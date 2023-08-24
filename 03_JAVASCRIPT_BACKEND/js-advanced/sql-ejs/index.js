const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const ejs = require('ejs');

const app = express();
const db = new sqlite3.Database('mydb.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS mytable (name TEXT, age INTEGER, city TEXT)');
});

// db.serialize(() => {
//     db.run('CREATE TABLE IF NOT EXISTS logintable (username TEXT, password TEXT)');
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs'); // imposta ejs come motore di visualizzazione

// route per la pagina principale
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// route per visualzzare i dati
app.get('/data', (req, res) => {
    db.all('SELECT * FROM mytable', (err, rows) => {
        if (err) {
            res.status(500).send('Errore nel recupero dei dati dal database');
        } else {
            res.render('data', { rows });
        }
    })
});

// route per gestire il submit del form
app.post('/submit', (req, res) => {
    const { name, age, city } = req.body;
    const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?)');
    stmt.run(name, age, city);
    stmt.finalize();
    res.redirect('/index.html');
    //res.send('Dati inseriti correttamente!');
});

// route per la pagina di modifica
app.get('/edit', (req, res) => {
    res.sendFile(__dirname + '/public/edit.html');
});

// route per gestire la modifica dei dati
app.post('/edit', (req, res) => {
    const { id, newName, newAge, newCity } = req.body;
    const stmt = db.prepare('UPDATE mytable SET name = ?, age = ?, city = ? WHERE rowid = ?');
    stmt.run(newName, newAge, newCity, id, err => {
        if (err) {
            res.status(500).send('Errore nella modifica dei dati');
        } else {
            res.send(`Dato con id ${id} aggiornato correttamente!`)
        }
    });
    stmt.finalize();
});

// route per la pagina di eliminazione
app.get('/delete', (req, res) => {
    res.sendFile(__dirname + '/public/delete.html');
});

// route per gestire l'eliminazione di dati
app.post('/delete', (req, res) => {
    const { id } = req.body;
    const stmt = db.prepare('DELETE FROM mytable WHERE rowid = ?');
    stmt.run(id, err => {
        if (err) {
            res.status(500).send('Errore nell\'eliminazione del dato');
        } else {
            res.send(`Dato con id ${id} eliminato correttamente!`);
        }
    });
    stmt.finalize();
});

// route per la pagina di login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// route per gestire il login degli utenti
app.post('/login', (req, res) => {
    const { name, age } = req.body;
    const stmt = db.prepare('SELECT COUNT(*) AS count FROM mytable WHERE name = ? AND age = ?');
    stmt.get(name, age, (err, row) => {
        if (err) {
            res.status(500).send('Errore nel login');
        } else {
            if (row.count > 0) {
                // res.send('Accesso riuscito!');
                if (name === 'admin') {
                    res.redirect('/admin-page.html');
                } else if (age > 18) {
                    res.redirect('/premium-page.html');
                } else {
                    res.redirect('/user-page.html');
                }
            } else {
                res.redirect('/invalid-credentials.html');
            }
        }
    });
    stmt.finalize();
});

app.listen(3000, () => {
    console.log('Server avviato sulla porta 3000');
});