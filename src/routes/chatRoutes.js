const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.getHome);
router.get('/chat/groups', chatController.listGroups);
router.get('/chat/join/:id', chatController.joinPage);
router.get('/chat/room/:id', chatController.chatRoom);
router.get('/chat/history/:id', chatController.getHistory);

module.exports = router;
