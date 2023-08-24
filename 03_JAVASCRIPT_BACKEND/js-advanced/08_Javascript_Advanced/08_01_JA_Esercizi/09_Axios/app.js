const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Errore del server!');
  }
});

app.listen(3000, () => {
  console.log('Il server è in ascolto sulla porta 3000!');
});