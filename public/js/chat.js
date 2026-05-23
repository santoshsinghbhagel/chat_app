document.addEventListener('DOMContentLoaded', () => {
  const messagesContainer = document.getElementById('chat-messages');
  const chatForm = document.getElementById('chat-form');
  const messageInput = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-btn');
  const connectionStatus = document.getElementById('connection-status');
  const loadingIndicator = document.getElementById('loading-indicator');
  
  const groupId = document.getElementById('groupId').value;
  const guestName = document.getElementById('guestName').value;

  const typingIndicator = document.getElementById('typing-indicator');
  const typingText = document.getElementById('typing-text');
  const onlineNum = document.getElementById('online-num');
  const onlineCount = document.getElementById('online-count');

  let ws = null;
  let reconnectTimer = null;
  let reconnectAttempts = 0;
  const maxReconnectAttempts = 5;
  let isManuallyClosed = false;
  
  // Typing state
  let typingTimer = null;
  const typingTimeoutMs = 2000;
  const typingUsers = {}; // { senderName: lastTypingTimestamp }

  // ---- Helpers ----

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  };

  const setConnectionStatus = (state, label) => {
    if (!connectionStatus) return;
    connectionStatus.className = 'connection-status ' + state;
    connectionStatus.innerHTML = '<i class="fa-solid fa-circle"></i> ' + label;
  };

  const showError = (message) => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'chat-error';
    errorDiv.innerHTML = `
      <i class="fa-solid fa-circle-exclamation"></i>
      <span>${message}</span>
      <button class="flash-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    messagesContainer.appendChild(errorDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    // Auto remove after 5 seconds
    setTimeout(() => { if (errorDiv.parentElement) errorDiv.remove(); }, 5000);
  };

  const appendMessage = (msg, animate = true) => {
    // Remove loading indicator if it exists
    const loading = document.getElementById('loading-indicator');
    if (loading) loading.remove();

    // Remove empty state if present
    const emptyState = messagesContainer.querySelector('.chat-empty-state');
    if (emptyState) emptyState.remove();

    // Remove no-messages indcator
    const noMsg = messagesContainer.querySelector('.no-messages');
    if (noMsg) noMsg.remove();

    const isOwn = msg.sender === guestName;
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isOwn ? 'message-own' : 'message-other'} ${animate ? 'message-enter' : ''}`;
    
    msgDiv.innerHTML = `
      <div class="message-sender">${escapeHtml(msg.sender)}</div>
      <div class="message-content">${escapeHtml(msg.content)}</div>
      <div class="message-time">${formatTime(msg.sent_at || new Date().toISOString())}</div>
    `;
    
    messagesContainer.appendChild(msgDiv);
    
    // Trigger animation
    if (animate) {
      requestAnimationFrame(() => {
        msgDiv.classList.add('message-visible');
      });
    }
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  // ---- Typing Indicator ----

  const updateTypingIndicator = () => {
    const now = Date.now();
    const activeTypers = Object.keys(typingUsers).filter(s => {
      // Remove users who haven't sent a typing event in the last 3 seconds
      if (now - typingUsers[s] > 3000) {
        delete typingUsers[s];
        return false;
      }
      return true;
    }).filter(s => s !== guestName);

    if (activeTypers.length === 0) {
      typingIndicator.style.display = 'none';
      return;
    }

    typingIndicator.style.display = 'flex';
    
    if (activeTypers.length === 1) {
      typingText.textContent = `${escapeHtml(activeTypers[0])} is typing...`;
    } else if (activeTypers.length === 2) {
      typingText.textContent = `${escapeHtml(activeTypers[0])} and ${escapeHtml(activeTypers[1])} are typing...`;
    } else {
      typingText.textContent = `${escapeHtml(activeTypers[0])} and ${activeTypers.length - 1} others are typing...`;
    }
  };

  const handleTypingEvent = (sender) => {
    if (sender === guestName) return;
    typingUsers[sender] = Date.now();
    updateTypingIndicator();
  };

  const handleStopTyping = (sender) => {
    delete typingUsers[sender];
    updateTypingIndicator();
  };

  const sendTypingEvent = () => {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({ type: 'typing' }));
    
    // Clear existing timer and set new one
    if (typingTimer) clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: 'stop_typing' }));
      }
    }, typingTimeoutMs);
  };

  const sendStopTyping = () => {
    if (typingTimer) {
      clearTimeout(typingTimer);
      typingTimer = null;
    }
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'stop_typing' }));
    }
  };

  // Periodically clean up stale typing users
  setInterval(updateTypingIndicator, 2000);

  const showEmptyState = () => {
    const loading = document.getElementById('loading-indicator');
    if (loading) loading.remove();
    
    const existing = messagesContainer.querySelector('.no-messages');
    if (existing) return;

    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'no-messages';
    emptyDiv.innerHTML = `
      <div class="chat-empty-state">
        <i class="fa-solid fa-comment-dots fa-3x"></i>
        <h3>No messages yet</h3>
        <p>Start the conversation by sending a message!</p>
      </div>
    `;
    messagesContainer.appendChild(emptyDiv);
  };

  // ---- WebSocket Connection ----

  const connectWebSocket = () => {
    if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
      return;
    }

    setConnectionStatus('connecting', 'Connecting...');
    
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}?groupId=${groupId}&name=${encodeURIComponent(guestName)}`;
    
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('Connected to chat room');
      setConnectionStatus('connected', 'Connected');
      reconnectAttempts = 0;
      sendBtn.disabled = false;
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        // Handle typing indicators
        if (data.type === 'typing') {
          handleTypingEvent(data.sender);
          return;
        }
        if (data.type === 'stop_typing') {
          handleStopTyping(data.sender);
          return;
        }
        // Handle online user count updates
        if (data.type === 'user_count') {
          onlineNum.textContent = data.count;
          onlineCount.className = 'online-badge' + (data.count > 1 ? ' online-badge-multi' : '');
          return;
        }

        // Handle error messages (e.g., group disabled)
        if (data.type === 'error') {
          showError(data.message);
          return;
        }
        
        // Regular chat message
        appendMessage(data);
      } catch (e) {
        console.error('Error parsing message:', e);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
      setConnectionStatus('error', 'Connection error');
    };

    ws.onclose = () => {
      if (isManuallyClosed) {
        setConnectionStatus('disconnected', 'Disconnected');
        return;
      }
      
      setConnectionStatus('disconnected', 'Disconnected');
      sendBtn.disabled = true;
      
      // Attempt reconnection
      if (reconnectAttempts < maxReconnectAttempts) {
        const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 10000);
        setConnectionStatus('connecting', `Reconnecting in ${delay/1000}s...`);
        
        reconnectTimer = setTimeout(() => {
          reconnectAttempts++;
          connectWebSocket();
        }, delay);
      } else {
        setConnectionStatus('error', 'Connection lost');
        showError('Unable to connect. Please refresh the page to try again.');
      }
    };
  };

  // ---- Fetch History ----

  fetch(`/chat/history/${groupId}`)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch history');
      return res.json();
    })
    .then(data => {
      if (data.length === 0) {
        showEmptyState();
      } else {
        data.forEach(msg => appendMessage(msg, false));
      }
    })
    .catch(err => {
      console.error('Error fetching history:', err);
      const loading = document.getElementById('loading-indicator');
      if (loading) {
        loading.innerHTML = `
          <i class="fa-solid fa-circle-exclamation"></i> 
          Could not load history. 
          <button class="btn btn-sm btn-outline" onclick="location.reload()">Retry</button>
        `;
      }
    });

  // ---- Connect WebSocket ----
  connectWebSocket();

  // ---- Handle Form Submit ----
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = messageInput.value.trim();
    if (!content) return;
    
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      showError('Not connected. Please wait or refresh the page.');
      return;
    }

    // Tell others we stopped typing
    sendStopTyping();
    
    const payload = { content };
    ws.send(JSON.stringify(payload));
    
    messageInput.value = '';
    messageInput.focus();
  });

  // ---- Handle Input (Typing Indicator) ----
  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim()) {
      sendTypingEvent();
    } else {
      sendStopTyping();
    }
  });

  // ---- Handle Enter key ----
  messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      chatForm.dispatchEvent(new Event('submit'));
    }
  });

  // ---- Online/Offline Detection ----
  window.addEventListener('online', () => {
    setConnectionStatus('connecting', 'Reconnecting...');
    connectWebSocket();
  });

  window.addEventListener('offline', () => {
    setConnectionStatus('error', 'Offline');
    showError('You are offline. Messages will send when reconnected.');
  });

  // ---- Cleanup on page unload ----
  window.addEventListener('beforeunload', () => {
    sendStopTyping();
    isManuallyClosed = true;
    if (reconnectTimer) clearTimeout(reconnectTimer);
    if (ws) ws.close();
  });
});
