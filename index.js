const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const carsRoutes = require('./routes/cars');
const authRoutes = require('./routes/auth');
const router = express.Router();
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
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
