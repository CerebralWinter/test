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