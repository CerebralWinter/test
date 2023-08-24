const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const { name, email, comments, receiveUpdates, favoriteColor } = req.body;

    console.log(`Nome: ${name}, Email: ${email}, Comments: ${comments}, Receive Updates: ${receiveUpdates}, Favorite Color: ${favoriteColor}`);

    res.send(`Dati ricevuti! Nome: ${name}, Email: ${email}, Comments: ${comments}, Receive Updates: ${receiveUpdates}, Favorite Color: ${favoriteColor}`);
});

app.listen(3000, () => {
    console.log('Il server è in ascolto sulla porta 3000!');
});