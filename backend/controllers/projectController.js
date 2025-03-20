const Project = require('../models/Project');

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get one project

const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new project
const addProject = async (req, res) => {
  const { title, description, technologies, githubLink, liveLink, image } = req.body;
  try {
    const project = new Project({ title, description, technologies, githubLink, liveLink, image });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a project
const updateProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndUpdate(id, req.body, { new: true });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.findByIdAndDelete(id);
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProjects, addProject, getProject, updateProject, deleteProject };