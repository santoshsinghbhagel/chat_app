require('dotenv').config();
const express = require('express');
const session = require('express-session');
const http = require('http');
const path = require('path');
const setupWebSocket = require('./src/websocket/wsHandler');

const app = express();
const server = http.createServer(app);

// Setup WebSocket
setupWebSocket(server);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'secret_fallback',
  resave: false,
  saveUninitialized: false,
}));

// Flash message middleware
app.use((req, res, next) => {
  res.locals.flash = req.session.flash || null;
  delete req.session.flash;
  res.locals.currentPath = req.path;
  next();
});

// Routes
const adminRoutes = require('./src/routes/adminRoutes');
const chatRoutes = require('./src/routes/chatRoutes');

app.use('/admin', adminRoutes);
app.use('/', chatRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('error', { 
    code: 404, 
    message: 'Page not found',
    description: 'The page you are looking for does not exist or has been moved.'
  });
});

// 500 handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).render('error', {
    code: 500,
    message: 'Server error',
    description: 'Something went wrong. Please try again later.'
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
