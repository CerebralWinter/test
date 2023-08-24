const express = require('express');
const sqlite3 = require ('sqlite3').verbose();
const ejs = require('ejs');

const app = express();
const db = new sqlite3.Database('mydb.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS mytable (username TEXT, password TEXT, roles TEXT, premium INTEGER)');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/data', (req, res) => {
    db.all('SELECT * FROM mytable', (err, rows) => {
        if (err) {
            res.status(500).send('Errore nel recupero dei dati dal database');
        } else {
            res.render('data', { rows });
        }
    })
});

app.post('/submit', (req, res) => {
    const { username, password, roles, premium } = req.body;   
    const premiumValue = premium ? premium : "off";
    const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?, ?)');
    stmt.run(username, password, roles, premiumValue);
    stmt.finalize();
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});


app.post('/login', (req, res) => {
    const {username, password } = req.body;
    const stmt = db.prepare('SELECT * FROM mytable WHERE username = ? AND password = ?');
    stmt.get(username, password, (err, row) => {
        if (err) {
            res.status(500).send('Errore nel login');
        } else if (row) {            
                if (row.roles === 'admin') {
                    res.redirect('/admin-page.html');
                }
                else if (row.premium === 'on') {
                    res.redirect('/premium-page.html');
                } else if (row.premium === 'off') {
                    res.redirect('/standard-page.html');
                } 
        } else {
                    res.redirect('/invalid-credentials.html');
                }
    });
    stmt.finalize();
});

app.listen(3000, () => {
    console.log('Server avviato sulla porta 3000');
});