const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middleware/authMiddleware');

router.get('/login', adminController.getLoginPage);
router.post('/login', adminController.postLogin);
router.get('/logout', adminController.logout);

router.get('/dashboard', isAdmin, adminController.getDashboard);
router.post('/groups', isAdmin, adminController.createGroup);
router.post('/groups/:id/update', isAdmin, adminController.updateGroup);
router.post('/groups/:id/delete', isAdmin, adminController.deleteGroup);

module.exports = router;
