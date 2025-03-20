const User = require('../models/User');
const Visit = require('../models/Visit');

// Get all website visits
const getVisits = async (req, res) => {
  try {
    const visits = await Visit.find().sort({ timestamp: 1 });
    res.json(visits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all registered users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getVisits, getUsers };