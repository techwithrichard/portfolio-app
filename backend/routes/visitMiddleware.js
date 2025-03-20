const express = require('express');
const { getVisits } = require('../controllers/visitController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getVisits);

module.exports = router;