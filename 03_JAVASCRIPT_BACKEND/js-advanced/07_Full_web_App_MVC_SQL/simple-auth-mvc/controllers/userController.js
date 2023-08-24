const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const SECRET_KEY = 'your-secret-key';

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body;

    userModel.getUserByUsername(username, (err, user) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (user && user.password === password) {
        const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, {
          expiresIn: '1h',
        });

        res.json({ message: 'Authentication successful', token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    });
  },

  register: (req, res) => {
    const { username, password, role } = req.body;

    userModel.createUser(username, password, role, (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'Internal server error' });
      }

      res.status(201).json({ message: 'User created successfully' });
    });
  },
};