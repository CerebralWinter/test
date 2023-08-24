const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Benvenuto nel mio server!');
});

server.listen(3000, () => {
  console.log('Il server è in ascolto sulla porta 3000!');
});