const express = require('express');
const { getVisits, getUsers } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

// Protect all admin routes
router.use(authMiddleware);
router.use(adminMiddleware);

// Admin dashboard routes
router.get('/visits', getVisits);
router.get('/users', getUsers);

module.exports = router;