const Visit = require('../models/Visit');

const trackVisit = async (req, res, next) => {
  const ip = req.ip;
  const userAgent = req.get('User-Agent');
  const userId = req.userId || null;

  const visit = new Visit({ ip, userAgent, userId });
  await visit.save();

  next();
};

module.exports = trackVisit;