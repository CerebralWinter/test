# Registazione e login dell'utente.

## Prerequisiti
- npm install express
- npm install sqlite3
- npm install ejs

## File e cartelle del progetto
- cartella del progetto con server.js
- sottocartella public con le pagine .html
- sottocartella views con data.ejs, visualizzazione dei dati del database

### 1. server.js

- includiamo sqlite3 express ed ejs;
- creiamo il nostro database includendo una tabella;
- serviamo il contenuto della cartella public al server che indirizza alla pagina principale;
```javascript
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
```
- creiamo la route per visualizzare i dati tramite ejs;
```javascript
app.get('/data', (req, res) => {
    db.all('SELECT * FROM mytable', (err, rows) => {
        if (err) {
            res.status(500).send('Errore nel recupero dei dati dal database');
        } else {
            res.render('data', { rows });
        }
    })
});
```
- creiamo la route per gestire il submit e mandare i dati al database. Una volta effettuata la registazione avviene un redirect alla pagina di login;
```javascript
app.post('/submit', (req, res) => {
    const { username, password, roles, premium } = req.body;
    const premiumValue = premium ? premium : "off";
    const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?, ?)');
    stmt.run(username, password, roles, premiumValue);
    stmt.finalize();
    res.redirect('/login');
});
```
- creiamo la route per la pagina di login e per gestire il login degli utenti. A seconda del ruolo o dell'inserimento del check *premium* verranno visualizzate pagine diverse.
```javascript
app.post('/login', (req, res) => {
    const {username, password } = req.body;
    const stmt = db.prepare('SELECT * FROM mytable WHERE username = ? AND password = ?');
    stmt.get(username, password, (err, row) => {
        if (err) {
            res.status(500).send('Errore nel login');
        } else if (row) {            
                if (row.roles === 'admin') {
                    res.redirect('/admin-page.html');
                }
                else if (row.premium === 'on') {
                    res.redirect('/premium-page.html');
                } else if (row.premium === 'off') {
                    res.redirect('/standard-page.html');
                } 
        } else {
                    res.redirect('/invalid-credentials.html');
                }
    });
    stmt.finalize();
});
```
- è anche presente una funzione che apre la porta 3000, e ci permette di comunicare con il server:
```javascript
app.listen(3000, () => {
    console.log('Server avviato sulla porta 3000');
});
```

### 2. data.ejs

- con questo file riusciamo a prendere la tabella del database, e visuallizzarla all'interno di una tabella html, in una pagina html.
- la tabella viene creata utilizzando la sintassi di ejs
```html
    <table class="table table-sm table-dark table-striped table-hover">
        <tr>
            <th><i class="fa-solid fa-users"></i> Username</th>
            <th><i class="fa-solid fa-key"></i> Password</th>
            <th><i class="fa-solid fa-user-cowboy"></i> Role</th>
            <th><i class="fa-solid fa-crown"></i> Premium</th>
        </tr>
        <% rows.forEach(row => { %>
        <tr>
            <td><%= row.username %></td>
            <td><%= row.password %></td>
            <td><%= row.roles %></td>
            <td><%= row.premium %></td>
        </tr>
        <% }); %>
    </table>
```
### 3. file .html
- questi file rappresentano il nostro sito,  da notare che all'interno dell apagina principale di registrazione e di quella di login abbiamo due form, il primo che salva i dati dell'utente nel database, il secondo che ci permette di accedere. A seconda del ruolo o dell'inserimento del check *premium* verranno visualizzate pagine diverse: admin-page, premium-page, standard-page, invalid-credentials.
