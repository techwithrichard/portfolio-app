const express = require('express');
const cors = require('cors');
const dotenv =require('dotenv');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const connectDB = require('./config/db');
const trackVisit = require('./middleware/visitMiddleware');

// Load environment variables
dotenv.config();

// create Express App

const app = express();
app.use(cors());
app.use(express.json());
app.use(trackVisit);

// default home routes, display welcome to my portfolio website

app.get('/', (req, res) => {
  res.send('Welcome to my portfolio website!');
});

// connect to MongoDB
connectDB();

// Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/projects', projectRoutes)
app.use('/api/v1/admin', require('./routes/adminRoutes'));

// start server 
console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
