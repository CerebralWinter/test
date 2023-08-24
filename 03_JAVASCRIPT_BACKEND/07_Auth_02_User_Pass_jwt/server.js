const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const users = require('./users.json');

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = 'your-secret-key';

// route per il login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.users.find(
        (user) => user.username === username && user.password === password
    )

    if (user) { // creazione del json web token
        const token = jwt.sign({ username: user.username }, SECRET_KEY, {
            expiresIn: '1h',
        });

        res.json({ message: 'Authentication successful', token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// middleware per il controllo dell'autenticazione
function isAuthenticated(req, res, next) {
    const token = req.headers['authorization'];
    
    if (token) {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized access' });
            }
            req.decoded = decoded;
            next();
        })
    } else {
        res.status(401).json({ message: 'No token provided' });
    }
}

// route autenticata
app.get('/protected', isAuthenticated, (req, res) => {
    res.json({ message: 'You have accessed protected content'});
});

// avvio del server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});