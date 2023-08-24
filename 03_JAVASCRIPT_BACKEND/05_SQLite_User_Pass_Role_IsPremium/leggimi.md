# Database di utenti registrati con SQLite

> In questa esercitazione viene creato un database sqlite3 con al suo interno una tabella per contenere i dati di utenti, con 4 campi:
> - nome
> - email
> - iscritto alla newsletter? (checkbox booleana)
> - ruolo (admin/utente, menù a tendina)   

L'esercitazione si compone di due file: **index.html** e **index.js** (oltre al file del database che verrà creato al lancio di index.js).

## index.html
Si trova all'interno della sottocartella public (cartella che contiene i file statici del progetto, viene servita da index.js con il pacchetto express), è la pagina di registrazione in cui vengono inseriti i dati degli utenti.
Al suo interno c'è un form con i CSS di Bootstrap:
```html
<form action="/submit" method="POST">
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" name="name">
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="newsletter" name="newsletter">
        <label class="form-check-label" for="newsletter">Subscribe to the newsletter</label>
    </div>
    <div class="mb-3">
        <label for="usertype" class="form-label">Select role</label>
        <select id="usertype" class="form-select" name="usertype">
            <option value="Admin">Admin</option>
            <option value="User">User</option>
        </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
Il form contiene i campi di input *name*, *email*; il checkbox *newsletter* ed il menù a tendina *usertype*, oltre ad un bottone di invio. Quando verrà avviato il server e raggiungeremo l'indirizzo **localhost:3000** visualizzeremo questo form e potremo immettere i dati desiderati, il cui invio verrà gestito da *index.js*.

## index.js
In questo file utilizziamo due moduli di Node.js: **express** e **sqlite3**.
```javascript
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('userdb.db');

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public')); // serviamo i file statici contenuti dentro /public
```

Creiamo all'interno del database una nuova tabella: questa volta, rispetto all'esercitazione precedente, aggiungiamo *IF NOT EXISTS* in modo da crearla solamente se non esiste.
```javascript
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users (name TEXT, email TEXT, newsletter INTEGER, usertype TEXT)')
});
```

Gestiamo la route della pagina principale per rimandarci al contenuto di **index.html**
```javascript
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
```

Con *app.post* accediamo ai dati del form, li assegniamo a delle costanti per poi inserirli nella tabella del nostro database. Definiamo inoltre una costante *newsletterValue* per evitare che, se lasciato non spuntato, il campo *newsletter* risulti nullo all'interno del database.
```javascript
app.post('/submit', (req, res) => {
    const { name, email, newsletter, usertype } = req.body;
    const newsletterValue = newsletter ? newsletter : "off";
    const stmt = db.prepare('INSERT INTO users VALUES (?, ?, ?, ?)');
    stmt.run(name, email, newsletterValue, usertype);
    stmt.finalize();
    res.send('Dati inseriti correttamente!');
});
```

Per permettere al server di comunicare con il terminale di Visual Studio Code, apriamo la porta 3000 con questo metodo:
```javascript
app.listen(3000, () => {
    console.log('Server avviato sulla porta 3000');
});
```

Lanciando da terminale il comando **node index.js** è ora possibile raggiungere l'indirizzo **localhost:3000**, inserire i dati desiderati nel form e visualizzarli nel database (per la visualizzazione del database utilizziamo l'estensione **SQLite Viewer** di Visual Studio Code).