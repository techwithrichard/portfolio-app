const express = require('express');
const { getProjects, addProject, getProject, updateProject, deleteProject } = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Public routes
router.get('/', getProjects);

// Protected routes (require authentication)
router.post('/', authMiddleware, addProject);
router.put('/:id', authMiddleware, updateProject);
router.put('/:id', authMiddleware, getProject);
router.delete('/:id', authMiddleware, deleteProject);

module.exports = router;