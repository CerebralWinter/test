const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const ejs = require('ejs');

const app = express();
const db = new sqlite3.Database('mydb.db');

// Crea la tabella se non esiste
db.serialize(() => {
db.run('CREATE TABLE IF NOT EXISTS mytable (name TEXT, age INTEGER, city TEXT)');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs'); // Imposta EJS come motore di visualizzazione

// Route per la pagina principale
app.get('/', (req, res) => {
 res.sendFile(__dirname + '/public/index.html');
});

// Route per gestire il submit del form
app.post('/submit', (req, res) => {
  const { name, age, city } = req.body;
  const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?)');
  stmt.run(name, age, city);
  stmt.finalize();
  res.send('Dati inseriti correttamente!');
});

// Route per visualizzare i dati
app.get('/data', (req, res) => {
  db.all('SELECT * FROM mytable', (err, rows) => {
    if (err) {
      res.status(500).send('Errore nel recupero dei dati dal database');
    } else {
      res.render('data', { rows });
    }
  });
});

// Route per la pagina di modifica
app.get('/edit', (req, res) => {
  res.sendFile(__dirname + '/public/edit.html');
});

// Route per gestire la modifica dei dati
app.post('/edit', (req, res) => {
  const { id, newAge } = req.body;
  const stmt = db.prepare('UPDATE mytable SET age = ? WHERE rowid = ?');
  stmt.run(newAge, id, err => {
    if (err) {
      res.status(500).send('Errore nella modifica dei dati');
    } else {
      res.send(`Dato con id ${id} aggiornato correttamente!`);
    }
  });
  stmt.finalize();
});

// Route per la pagina di modifica
app.get('/edit', (req, res) => {
  res.sendFile(__dirname + '/public/edit.html');
});

// Route per gestire la modifica dei dati
app.post('/edit', (req, res) => {
  const { id, newAge } = req.body;
  const stmt = db.prepare('UPDATE mytable SET age = ? WHERE rowid = ?');
  stmt.run(newAge, id, err => {
  if (err) {
      res.status(500).send('Errore nella modifica dei dati');
  } else {
      res.send(`Dato con id ${id} aggiornato correttamente!`);
  }
  });
  stmt.finalize();
});


// Avvia il server
app.listen(3000, () => {
  console.log('Server avviato sulla porta 3000');
});