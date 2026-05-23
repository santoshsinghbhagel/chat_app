const WebSocket = require('ws');
const db = require('../config/db');

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });

  // Map to hold clients per room: { 'groupId': Set(ws, ws...) }
  const rooms = new Map();

  wss.on('connection', (ws, req) => {
    // Parse query params e.g., ?groupId=1&name=Santosh
    const urlParams = new URL(req.url, `http://${req.headers.host}`).searchParams;
    const groupId = urlParams.get('groupId');
    const name = urlParams.get('name');

    if (!groupId || !name) {
      ws.close();
      return;
    }

    ws.groupId = groupId;
    ws.guestName = name;

    if (!rooms.has(groupId)) {
      rooms.set(groupId, new Set());
    }
    rooms.get(groupId).add(ws);

    // Broadcast updated online count to all clients in the room
    broadcastUserCount(groupId, rooms.get(groupId).size);

    ws.on('message', async (message) => {
      try {
        const data = JSON.parse(message);
        
        // Handle typing indicators (no DB write needed)
        if (data.type === 'typing' || data.type === 'stop_typing') {
          const roomClients = rooms.get(groupId);
          if (roomClients) {
            const payload = JSON.stringify({
              type: data.type,
              sender: name
            });
            roomClients.forEach((client) => {
              // Don't send typing events back to the sender
              if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(payload);
              }
            });
          }
          return;
        }

        // Handle regular chat message
        const { content } = data;

        // Check if group is enabled before saving/broadcasting
        const groupCheck = await db.query("SELECT is_enable FROM groups WHERE id = $1", [groupId]);
        if (groupCheck.rows.length === 0 || groupCheck.rows[0].is_enable === 'n') {
          const errorPayload = JSON.stringify({
            type: 'error',
            message: 'This group has been disabled by the admin. You cannot send messages.'
          });
          if (ws.readyState === WebSocket.OPEN) {
            ws.send(errorPayload);
          }
          return;
        }

        // Save to DB
        const result = await db.query(
          'INSERT INTO messages (group_id, sender, content) VALUES ($1, $2, $3) RETURNING *',
          [groupId, name, content]
        );
        const savedMessage = result.rows[0];

        // Broadcast to all clients in the same room
        const roomClients = rooms.get(groupId);
        if (roomClients) {
          const payload = JSON.stringify(savedMessage);
          roomClients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(payload);
            }
          });
        }
      } catch (err) {
        console.error('Error handling WS message:', err);
      }
    });

    ws.on('close', () => {
      const roomClients = rooms.get(groupId);
      if (roomClients) {
        roomClients.delete(ws);
        if (roomClients.size === 0) {
          rooms.delete(groupId);
          // No one left, no need to broadcast
        } else {
          // Broadcast updated online count
          broadcastUserCount(groupId, roomClients.size);
        }
      }
    });
  });

  // Helper to broadcast user count to a room
  function broadcastUserCount(groupId, count) {
    const roomClients = rooms.get(groupId);
    if (!roomClients) return;
    const payload = JSON.stringify({ type: 'user_count', count });
    roomClients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(payload);
      }
    });
  }

  return wss;
};
