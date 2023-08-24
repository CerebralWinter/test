# Salvare e gestire i dati in un database SQLite

> In questa esercitazione viene creato un database sqlite3 utilizzando Node.js e vengono eseguite operazioni di inserimento, aggiornamento, lettura ed eliminazione di record dalla tabella del database. 

## app.js 
All'interno del file **app.js** creiamo un nuovo database ed una tabella adatta a contenere i dati *Nome, Età* e *Città* di persone generiche, per poi inserire tre record al suo interno. Ciò avviene lanciando da terminale il comando **node app.js**

```javascript
const sqlite3 = require('sqlite3').verbose(); // richiede il modulo sqlite3 e con .verbose() abilita i messaggi di debug

const db = new sqlite3.Database('mydb.db'); // viene istanziato un oggetto Database che rappresenta il database SQLite denominato mydb.db

db.serialize(() => { // .serialize() serve per garantire che tutte le query vengano eseguite in sequenza una dopo l'altra

    db.run('CREATE TABLE mytable (name TEXT, age INTEGER, city TEXT)'); // viene eseguita una query SQL per creare la tabella mytable con tre colonne: name di tipo TEXT etc.

    const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?)'); // viene preparata una query SQL che inserisce tre righe nella tabella
    stmt.run('Mario', 30, 'Roma');
    stmt.run('Luigi', 25, 'Napoli');
    stmt.run('Giovanni', 35, 'Milano');
    stmt.finalize(); // .finalize() completa l'inserimento dei dati nella tabella

    console.log('Dati inseriti correttamente!');

});

db.close(); // chiude la connessione al database
```
## app_read.js

Definiamo in **app_read.js** un metodo per stampare su console il contenuto della nostra tabella; possiamo lanciare il programma e visualizzare il contenuto con il comando **node app_read.js**

```javascript
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydb.db');

db.all('SELECT * FROM mytable', (err, rows) => { // il metodo .all interviene su tutto il contenuto del database. L'asterisco indica tutto il contenuto di mytable

    if (err) {
        console.error(err.message);
    }

    rows.forEach(row => {
        console.log(row.name, row.age, row.city);
    });

});
```

## app_delete.js
In **app_delete.js** definiamo una costante *id* che rappresenta l'id del record da cancellare. In questo modo, per eliminare un record specifico dobbiamo intervenire direttamente all'interno del codice e modificarne il valore. Lanciamo, al solito, con **node app_delete.js**

```javascript
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydb.db');

const id = 1;

db.run(`DELETE FROM mytable WHERE rowid = ${id}`, err => {

    if (err) {
        console.error(err.message);
    }

    console.log(`Dato con id ${id} eliminato correttamente!`);
});
```

## app_update.js
In **app_update.js** vengono definite due costanti: *id*, che rappresenta l'id del record che aggiorneremo e, come nel file precedente, andrà modificato manualmente all'interno del codice; e *newAge*, che rappresenta il nuovo dato *Età* che andrà a sovrascrivere il precedente. In questo modo lanciando **node app_update.js** potremo aggiornare il campo *Età* del record desiderato.

```javascript
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydb.db');

const id = 2;
const newAge = 22;

db.run(`UPDATE mytable SET age = ${newAge} WHERE rowid = ${id}`, err => {
    
    if (err) {
        console.error(err.message);
    }

    console.log(`Dato con id ${id} aggiornato correttamente!`);

});

db.close();
```