# Analisi dei requisiti dell'applicazione

- questa applicazione web verrà realizzata in 4 versioni di complessità crescente.

1 - Backend Web App con gestione degli utenti (senza Admin) tramite file json **(senza interfaccia web ma con comandi CURL)**

2 - Backend Web App con utilizzo **JWT** (json web token) richiesti ed assegnati ad ogni utente (senza Admin) tramite comandi CURL

3 - Web App completa di frontend con gestione degli utenti (con Admin) tramite **file json** ed autenticazione tramite **jwt**

4 - Web app completa con **JWT** e **SQLite** (con Admin)

# DIPENDENZE

## 1 - Backend Web App con gestione degli utenti
- express
- body-parser

## 2 - Backend Web App con utilizzo JWT
- express
- body-parser
- jsonwebtoken

## 3 - Web App completa di frontend con gestione degli utenti
- express
- body-parser
- jsonwebtoken
- serve-static

## 4 - Web app completa con JWT e SQLite
- express
- body-parser
- jsonwebtoken
- serve-static
- sqlite3

# FILES NECESSARI

## 1 - Backend Web App con gestione degli utenti
- users.json: contiene i dati degli utenti (username,password)
- server.js: gestisce la connessione tra browser e console vsc inoltre gestisce i percorsi delle pagine

 eseguire con: **node server.js**

comando CURL da eseguire per autenticazione:

> curl -X POST -H "Content-Type: application/json" -d '{"username": "user1", "password": "password1"}' http://localhost:3000/protected

## 2 - Backend Web App con utilizzo JWT
- users.json: contiene i dati degli utenti (username,password)
- server.js:
    - gestisce la connessione tra browser e console vsc
    - gestisce i percorsi delle pagine
    - genera un json web token
    - reindirizza l'utente alla pagina protected (se il token è attivo)

## 3 - Web App completa di frontend con gestione degli utenti
- 

## 4 - Web app completa con JWT e SQLite
- 