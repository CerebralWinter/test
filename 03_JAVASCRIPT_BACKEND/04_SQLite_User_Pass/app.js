const sqlite3 = require('sqlite3').verbose(); // richiede il modulo sqlite3 e con .verbose() abilita i messaggi di debug

const db = new sqlite3.Database('mydb.db'); // viene istanziato un oggetto Database che rappresenta il database SQLite denominato mydb.db

db.serialize(() => { // .serialize() serve per garantire che tutte le query vengano eseguite in sequenza una dopo l'altra

    db.run('CREATE TABLE IF NOT EXISTS mytable (name TEXT, age INTEGER, city TEXT)'); // viene eseguita una query SQL per creare la tabella mytable con tre colonne: name di tipo TEXT etc.

    const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?)'); // viene preparata una query SQL che inserisce tre righe nella tabella
    stmt.run('Chri', 30, 'Roma');
    stmt.run('Luigi', 25, 'Napoli');
    stmt.run('Giovanni', 35, 'Milano');
    stmt.finalize(); // .finalize() completa l'inserimento dei dati nella tabella

    console.log('Dati inseriti correttamente!');

});

db.close(); // chiude la connessione al database