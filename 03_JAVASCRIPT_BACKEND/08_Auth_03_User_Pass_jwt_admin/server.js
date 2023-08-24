
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const users = require('./users.json');
const serveStatic = require('serve-static'); 

const app = express();
app.use(bodyParser.json());
app.use(serveStatic('public'));

const SECRET_KEY = 'your-secret-key';

// route per il login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.users.find(
        (user) => user.username === username && user.password === password
    )

    if (user) { // questa volta viene incluso anche il ruolo nella creazione del jwt
        const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, {
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

// middleware per controllare il ruolo dell'utente (se è un admin)
function isAdmin(req, res, next) {
    if (req.decoded && req.decoded.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access forbidden: not an administrator '});
    }
}

// route autenticata
app.get('/protected', isAuthenticated, (req, res) => {
    res.json({ message: 'You have accessed protected content'});
});

// route admin
app.get('/admin', isAuthenticated, isAdmin, (req, res) => {
    res.json({ message: 'Welcome to the admin area' });
});

// route di logout con redirect al login
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/index.html');
});

// avvio del server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});