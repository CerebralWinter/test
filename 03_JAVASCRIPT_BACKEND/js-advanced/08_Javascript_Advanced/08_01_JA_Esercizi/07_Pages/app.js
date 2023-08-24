const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Benvenuto nella mia applicazione!');
});

app.get('/about', (req, res) => {
  res.send('Questa è la pagina "About"!');
});

app.get('/contact', (req, res) => {
  res.send('Questa è la pagina "Contatti"!');
});

app.get('*', (req, res) => {
  res.send('Pagina non trovata!');
});

app.listen(3000, () => {
  console.log('Il server è in ascolto sulla porta 3000!');
});