const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const carsRoutes = require('./routes/cars');
const authRoutes = require('./routes/auth');
const router = express.Router();
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
   origin: 'https://car-management-backend-km8wgvati-shagufta28s-projects.vercel.app/' // Update to your Netlify domain
}));
app.use(bodyParser.json());

// Routes
router.get('/', (req, res) => {
    res.send("running");
});
app.use('/cars', carsRoutes);
app.use('/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Failed to connect to MongoDB Atlas', err));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});