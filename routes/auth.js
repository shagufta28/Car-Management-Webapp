const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const app = express();
// Dummy users (for simplicity)
const users = {
  admin: {
    username: 'Admin',
    password: '123456' // Plaintext password
  },
  user: {
    username: 'john dev',
    password: '987654' // Plaintext password
  }
};

// Admin login
router.post('/admin/login', (req, res) => {
  app.get('/', (req, res) => {
    res.send("running auth");
  });
  const { username, password } = req.body;
  const user = users.admin;

  // Check if the username matches and the password is correct
  if (username !== user.username || password !== user.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
});

// User login
router.post('/user/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.user;

  // Check if the username matches and the password is correct
  if (username !== user.username || password !== user.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
});

module.exports = router;
