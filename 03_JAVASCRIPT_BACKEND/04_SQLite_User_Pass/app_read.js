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