const fs = require('fs');

// Leggi il file di testo
fs.readFile('notes.txt', 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);
});

// Aggiungi una nuova nota al file di testo
fs.appendFile('notes.txt', '\nNota 4', (err) => {
  if (err) throw err;

  console.log('Nota aggiunta con successo!');
});