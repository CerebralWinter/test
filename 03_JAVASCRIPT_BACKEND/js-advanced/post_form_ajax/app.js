const express = require('express');
const app = express();

// prerequisiti:
// npm install express
// npm install ajax
// npm install querySelector
// creare cartella files statici in "public"
// mettere in "public" sia html che script.js

app.use(express.urlencoded({ extended: true })); // pare che deserializzi anche l'url  nel quale risiede il form
// extended true verifica che i valori contenuti nel form non siano solamente stringhe ma valori
app.use(express.json()); // le info vengono inviate come array json e quindi devono essere deserializzate
app.use(express.static('public')); // express crea una rotta "public" che serve i files statici

app.post('/submit', (req, res) => // submit è la rotta alla quale viene inviato il modulo
{
    const { name, email } = req.body; // richiama le informazioni dei campi del form

    console.log(`Nome: ${name}, Email: ${email}`);

    res.send(`Dati ricevuti! Nome: ${name}, Email: ${email}`); // conferma in post le ricezione dei dati
});

app.listen(3000, () =>
{
    console.log('Il server è in ascolto sulla porta 3000!');
});