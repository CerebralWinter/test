// Route per la pagina di modifica
app.get('/edit', (req, res) => {
    res.sendFile(__dirname + '/public/edit.html');
});

  // Route per gestire la modifica dei dati
app.post('/edit', (req, res) => {
    const { id, newAge } = req.body;
    const stmt = db.prepare('UPDATE mytable SET age = ? WHERE rowid = ?');
    stmt.run(newAge, id, err => {
    if (err) {
        res.status(500).send('Errore nella modifica dei dati');
    } else {
        res.send(`Dato con id ${id} aggiornato correttamente!`);
    }
    });
    stmt.finalize();
});