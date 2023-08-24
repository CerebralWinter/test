const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users.json'); // per recuperare i dati degli utenti dal file json

const app = express();
app.use(bodyParser.json());

// middleware di controllo autenticazione
function isAuthenticated(req, res, next) {
    const { username, password } = req.body;
    const user = users.users.find(
        (user) => user.username === username && user.password === password
    );

    if (user) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized access' });
    }
}

// route autenticata
app.post('/protected', isAuthenticated, (req, res) => {
    res.json({ message: 'You have accessed protected content'});
});

// avvio del server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});