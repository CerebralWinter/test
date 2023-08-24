const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

fs.writeFile('message.txt', 'Ciao, mondo!', (err) => {
  if (err) throw err;
  console.log('Il file è stato creato!');
});