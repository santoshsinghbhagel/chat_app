const db = require('../config/db');

exports.getHome = async (req, res) => {
  try {
    const result = await db.query("SELECT COUNT(*) AS count FROM groups WHERE is_enable = 'y'");
    const groupsCount = parseInt(result.rows[0].count, 10);
    res.render('home', { groupsCount });
  } catch (error) {
    console.error('Home error:', error);
    res.render('home', { groupsCount: 0 });
  }
};

exports.listGroups = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM groups WHERE is_enable = 'y' ORDER BY created_at DESC");
    res.render('chat/groups', { groups: result.rows });
  } catch (error) {
    console.error('List groups error:', error);
    res.status(500).render('error', {
      code: 500,
      message: 'Database error',
      description: 'Could not load groups. Please try again later.'
    });
  }
};

exports.joinPage = async (req, res) => {
  const { id } = req.params;
  
  // Validate id is a number
  if (!/^\d+$/.test(id)) {
    return res.status(404).render('error', {
      code: 404,
      message: 'Group not found',
      description: 'Invalid group ID.'
    });
  }

  try {
    const result = await db.query("SELECT * FROM groups WHERE id = $1 AND is_enable = 'y'", [id]);
    if (result.rows.length === 0) {
      return res.status(404).render('error', {
        code: 404,
        message: 'Group not found',
        description: 'The group you are looking for does not exist or has been disabled.'
      });
    }
    res.render('chat/join', { group: result.rows[0] });
  } catch (error) {
    console.error('Join page error:', error);
    res.status(500).render('error', {
      code: 500,
      message: 'Server error',
      description: 'Something went wrong. Please try again later.'
    });
  }
};

exports.chatRoom = async (req, res) => {
  const { id } = req.params;
  const { name } = req.query;
  
  if (!name || !name.trim()) return res.redirect(`/chat/join/${id}`);
  
  // Limit guest name length
  const guestName = name.trim().substring(0, 30);

  if (!/^\d+$/.test(id)) {
    return res.status(404).render('error', {
      code: 404,
      message: 'Group not found',
      description: 'Invalid group ID.'
    });
  }

  try {
    const result = await db.query("SELECT * FROM groups WHERE id = $1 AND is_enable = 'y'", [id]);
    if (result.rows.length === 0) {
      return res.status(404).render('error', {
        code: 404,
        message: 'Group not found',
        description: 'The group you are looking for does not exist or has been disabled.'
      });
    }
    res.render('chat/room', { group: result.rows[0], guestName });
  } catch (error) {
    console.error('Chat room error:', error);
    res.status(500).render('error', {
      code: 500,
      message: 'Server error',
      description: 'Something went wrong. Please try again later.'
    });
  }
};

exports.getHistory = async (req, res) => {
  const { id } = req.params;
  
  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ error: 'Invalid group ID' });
  }

  try {
    // Get last 50 messages, ordered by time ascending
    const result = await db.query(
      'SELECT * FROM (SELECT * FROM messages WHERE group_id = $1 ORDER BY sent_at DESC LIMIT 50) AS sub ORDER BY sent_at ASC',
      [id]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Get history error:', error);
    res.status(500).json({ error: 'Failed to load messages. Please try again.' });
  }
};
