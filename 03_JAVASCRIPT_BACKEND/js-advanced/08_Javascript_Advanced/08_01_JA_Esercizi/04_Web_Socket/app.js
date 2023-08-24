const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Nuova connessione!');

  ws.on('message', (message) => {
    console.log(`Ricevuto messaggio: ${message}`);
  });

  ws.send('Benvenuto al server WebSocket!');
});