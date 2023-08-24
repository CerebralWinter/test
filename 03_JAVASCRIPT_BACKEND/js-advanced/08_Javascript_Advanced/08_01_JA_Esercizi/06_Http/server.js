const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Benvenuto nella mia applicazione!');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Questa è la pagina "About"!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Pagina non trovata!');
  }
});

server.listen(3000, () => {
  console.log('Il server è in ascolto sulla porta 3000!');
});