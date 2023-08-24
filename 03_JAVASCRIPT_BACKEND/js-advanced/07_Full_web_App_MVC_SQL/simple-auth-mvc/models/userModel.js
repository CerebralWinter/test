const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./myDatabase.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the myDatabase SQLite database.');
});

module.exports = {
  getUserByUsername: (username, callback) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], callback);
  },

  createUser: (username, password, role, callback) => {
    db.run('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, password, role], callback);
  },
};