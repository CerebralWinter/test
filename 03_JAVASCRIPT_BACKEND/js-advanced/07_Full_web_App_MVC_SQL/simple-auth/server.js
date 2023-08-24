const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// const users = require('./users.json');
const serveStatic = require('serve-static');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./myDatabase.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the myDatabase SQLite database.');
  });

const app = express();
app.use(bodyParser.json());
app.use(serveStatic('public'));

const SECRET_KEY = 'your-secret-key'; // Replace this with a more secure key in a production environment

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
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
  });

// Middleware to check authentication
function isAuthenticated(req, res, next) {
  const token = req.headers['authorization'];

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized access' });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
}

// Middleware to check for admin role
function isAdmin(req, res, next) {
  if (req.decoded && req.decoded.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access forbidden: not an administrator' });
  }
}

// Authenticated route
app.get('/protected', isAuthenticated, (req, res) => {
  res.json({ message: 'You have accessed protected content' });
});

// Admin route
app.get('/admin', isAuthenticated, isAdmin, (req, res) => {
  res.json({ message: 'Welcome to the admin area' });
});

// Logout route
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/index.html');
});

// Register route
app.post('/register', (req, res) => {
    const { username, password, role } = req.body;
  
    db.run('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, password, role], (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      res.status(201).json({ message: 'User created successfully' });
    });
  });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

process.on('SIGINT', () => {
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Closed the database connection.');
    });
  
    process.exit(0);
  });