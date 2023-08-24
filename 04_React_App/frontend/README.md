# Creiamo un semplice sito web personale con React che contiene un'intestazione, una breve biografia e una sezione dei contatti. 

## parte 1

create-react-app per creare un nuovo progetto React. Apri il terminale e digita:

```bash

npx create-react-app mio-sito-personale
```
```
cd mio-sito-personale
```
```
Struttura del progetto:
src/
??? components/
?   ??? Header.js
?   ??? Biography.js
?   ??? Contacts.js
??? App.css
??? App.js
```

Creazione dei componenti:

Ora creiamo i componenti React che costituiranno il sito.

Header.js:

```javascript

import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Benvenuto nel mio sito personale</h1>
        </header>
    );
};

export default Header;
```

Biography.js:

```javascript

import React from 'react';

const Biography = () => {
    return (
        <section>
            <h2>Biografia</h2>
            <p>Ciao, sono [Nome] e sono un appassionato di tecnologia...</p>
        </section>
    );
};

export default Biography;
```

Contacts.js:

```javascript

import React from 'react';

const Contacts = () => {
    return (
        <section>
            <h2>Contatti</h2>
            <p>Puoi contattarmi via email a esempio@email.com</p>
        </section>
    );
};

export default Contacts;
```

Assemblare il sito in App.js:

Ora importiamo questi componenti in App.js e li mettiamo insieme:

```javascript

import React from 'react';
import './App.css';
import Header from './components/Header';
import Biography from './components/Biography';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Biography />
      <Contacts />
    </div>
  );
}

export default App;
```

Stilizzare il sito: Puoi aggiungere qualche stile nel file App.css per rendere il tuo sito più gradevole. Esempio:

```css

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

header {
  background: #35424a;
  color: #ffffff;
  text-align: center;
  padding: 1em 0;
}

h2 {
  border-bottom: 2px solid #333;
  padding-bottom: 0.5em;
}

section {
  padding: 2em;
}
```

Eseguire il sito: Finalmente, esegui il sito utilizzando il seguente comando nel terminale:


**npm start**

Questo aprirà il sito nel tuo browser predefinito. Ora hai un semplice sito web personale con un'intestazione, una breve biografia e una sezione dei contatti realizzato con React!





## parte 2

aggiungi altre sezioni una sezione "Progetti" per mostrare alcuni dei progetti a cui hai lavorato, e una sezione "Competenze" per elencare le tue competenze tecniche fullstack

Aggiungere nuovi file per i componenti: Crea due nuovi file all'interno della cartella components, chiamati Projects.js e Skills.js.

```
src/
??? components/
?   ??? Header.js
?   ??? Biography.js
?   ??? Contacts.js
?   ??? Projects.js
?   ??? Skills.js
??? App.css
??? App.js
```

Creare i componenti:

Projects.js:

```javascript

import React from 'react';

const Projects = () => {
    return (
        <section>
            <h2>Progetti</h2>
            <ul>
                <li>
                    <h3>Nome Progetto 1</h3>
                    <p>Descrizione del progetto 1.</p>
                </li>
                <li>
                    <h3>Nome Progetto 2</h3>
                    <p>Descrizione del progetto 2.</p>
                </li>
                {/* Aggiungi altri progetti qui */}
            </ul>
        </section>
    );
};

export default Projects;
```

Skills.js:

```javascript

import React from 'react';

const Skills = () => {
    return (
        <section>
            <h2>Competenze</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                {/* Aggiungi altre competenze qui */}
            </ul>
        </section>
    );
};

export default Skills;
```

Aggiungere i nuovi componenti a App.js: Importa i nuovi componenti in App.js e aggiungili al layout:

```javascript

import React from 'react';
import './App.css';
import Header from './components/Header';
import Biography from './components/Biography';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Biography />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
```

Aggiungere stili CSS: Puoi anche aggiungere qualche stile CSS aggiuntivo in App.css per le nuove sezioni.

Ad esempio, puoi stilizzare le liste in modo che appaiano più attraenti.

Eseguire il sito: Assicurati che il tuo sito sia in esecuzione utilizzando il comando **npm start**.

Le nuove sezioni dovrebbero ora essere visibili nel tuo sito web.





## parte 3

aggiungi la gestione degli utenti con JWT ed solo gli utenti autenticati possono vedere le pagine Projects ed Skills

Per aggiungere l'autenticazione con JWT (JSON Web Tokens) e permettere solo agli utenti autenticati di vedere le pagine "Projects" ed "Skills", avrai bisogno di fare alcune modifiche e aggiunte al tuo progetto.

Aggiungere pacchetti necessari: Innanzitutto, avrai bisogno di installare alcuni pacchetti. Puoi utilizzare jsonwebtoken per gestire i JWT, e axios per fare richieste HTTP per l'autenticazione.


**npm install jsonwebtoken axios**
**npm install jwt-decode**

Creare un componente di Login:

Crea un nuovo componente chiamato Login.js all'interno della cartella components. Questo componente permetterà agli utenti di effettuare il login.

Login.js:
```javascript

import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/authenticate', { username, password });
            onLogin(response.data.token);
        } catch (error) {
            console.error('Errore durante il login', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
```

Gestione degli Stati dell'Applicazione: Modifica il componente App.js per gestire lo stato dell'autenticazione.

```javascript

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Biography from './components/Biography';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Login from './components/Login';
import jwt_decode from 'jwt-decode';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (token) => {
      const decoded = jwt_decode(token);
      setUserData(decoded);
      setIsAuthenticated(true);
      localStorage.setItem('token', token);
  };

  return (
    <div className="App">
      <Header />
      {isAuthenticated ? (
          <>
              <Biography />
              <Projects />
              <Skills />
              <Contacts />
          </>
      ) : (
          <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
```

Dovrai implementare questo backend utilizzando Node.js, Express e jsonwebtoken oppure utilizzare un servizio esterno.

Inizializzare l'App con l'Utente Loggato: Per conservare l'accesso dell'utente anche quando la pagina viene ricaricata, puoi utilizzare localStorage per conservare il token JWT.

Modifica l'inizializzazione degli state in App.js in questo modo:

```javascript

const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? jwt_decode(token) : null;
});
```

Proteggere i Componenti: Puoi creare un componente di ordine superiore (HOC) che protegga i componenti che richiedono l'autenticazione.

Tuttavia, nel nostro esempio, abbiamo gestito la visualizzazione condizionale nel componente App.js stesso.

Logout: Aggiungi una funzione per gestire il logout che rimuove il token dal localStorage e reimposta lo stato.


**App.js completa**



```javascript

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Biography from './components/Biography';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Login from './components/Login';
import jwt_decode from 'jwt-decode';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? jwt_decode(token) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUserData(jwt_decode(token));
    }
  }, []);

  const handleLogin = (token) => {
    const decoded = jwt_decode(token);
    setUserData(decoded);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <Header />
      {isAuthenticated ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <Biography />
          <Projects />
          <Skills />
          <Contacts />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
```

Questo codice utilizza lo stato e gli hook di React per gestire l'autenticazione.

Quando un utente effettua l'accesso con successo, il token JWT viene memorizzato in localStorage e utilizzato per decodificare i dati dell'utente. Gli utenti autenticati possono vedere le sezioni "Projects" e "Skills", mentre gli utenti non autenticati vedranno solo il modulo di login.





## parte 4

aggiungi un backend con un endpoint /api/authenticate che accetti un username e una password, e ritorni un JWT. Dovrai implementare questo backend utilizzando Node.js, Express e jsonwebtoken

Per aggiungere un backend con Node.js, Express, e jsonwebtoken, segui i seguenti passi:

Crea una nuova cartella per il backend accanto alla cartella del tuo progetto React (non all'interno della cartella React). Puoi chiamare questa cartella backend.

```bash

mkdir backend
cd backend
```

Inizializza un nuovo progetto Node.js eseguendo:

**npm init -y**

Installa le dipendenze necessarie:


**npm install express jsonwebtoken**

Crea un file per il tuo server, ad esempio server.js:

server.js

Aggiungi il codice seguente a server.js:

```javascript

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Dummy user data for demonstration
const dummyUser = {
    username: 'user',
    password: 'password',
    name: 'John Doe',
};

const SECRET_KEY = 'mysecretkey';

app.post('/api/authenticate', (req, res) => {
    const { username, password } = req.body;

    // In a real-world app, you should verify the user's credentials from a database
    if (username === dummyUser.username && password === dummyUser.password) {
        // Generate a token
        const token = jwt.sign({ name: dummyUser.name }, SECRET_KEY, {
            expiresIn: '1h',
        });

        // Send the token
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

Aggiungi uno script al file package.json per eseguire il server:

```json

"scripts": {
    "start": "node server.js"
}
```

Esegui il server con il comando:

**npm start**

Questo avvierà il server su http://localhost:3001.

Aggiorna il componente Login.js nel frontend per inviare la richiesta di autenticazione al tuo backend appena creato.

Assicurati che il metodo axios.post punti all'URL corretto, ovvero http://localhost:3001/api/authenticate.

```javascript

const response = await axios.post('http://localhost:3001/api/authenticate', { username, password });
```

Configura CORS. Quando sviluppi in locale, il tuo server React sarà in esecuzione su una porta diversa dal tuo server Express.

Per permettere al client di comunicare con il server, dovrai configurare CORS sul tuo server Express. Installa il modulo CORS con:

**npm install cors**

Poi, aggiungi il seguente codice nel tuo server.js:

```javascript

const cors = require('cors');
app.use(cors());
```

Esegui sia il backend che il frontend.

Assicurati che il backend sia in esecuzione eseguendo npm start nella cartella del backend, e che il frontend

## parte 5

aggiungi un form di registrazione e un profilo per gli utenti, dovrai fare alcune modifiche e aggiuntive sia al frontend che al backend.

Parte 1: Backend
Aggiungi una libreria per l'hashing delle password. Utilizza bcrypt per hashare le password prima di salvarle (backend).

**npm install bcrypt**

Aggiungi la libreria Axios (se non è stata installata in precedenza)per le richieste del modulo di registrazione del frontend

**npm i axios**

Aggiungi un endpoint per la registrazione.

Modifica il file **server.js** nel backend per includere un nuovo endpoint che gestisca la registrazione degli utenti.

Crea un "database" in memoria per scopi di dimostrazione. In un'applicazione reale, dovresti utilizzare un vero database.

Aggiorna il file **server.js** come segue:

```javascript

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const SECRET_KEY = 'mysecretkey';

// Simulated in-memory database
let users = [];

app.post('/api/register', async (req, res) => {
    const { username, password, name } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        username,
        password: hashedPassword,
        name,
    });

    res.status(201).json({ message: 'User registered' });
});

app.post('/api/authenticate', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ name: user.name }, SECRET_KEY, {
            expiresIn: '1h',
        });

        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```
Parte 2: Frontend

Crea un componente di registrazione. Crea un nuovo componente chiamato Register.js all'interno della cartella components.

Register.js:

```javascript

import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onRegisterSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/register', { username, password, name });
            onRegisterSuccess();
        } catch (error) {
            console.error('Error during registration', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
```

Aggiorna il componente App.js per includere la registrazione degli utenti.

App.js:

```javascript

// ... existing code ...

import Register from './components/Register';

// ... existing code ...

const [isRegistering, setIsRegistering] = useState(false);

const handleRegisterSuccess = () => {
    setIsRegistering(false);
};

// ... existing code in the return statement ...

{isAuthenticated ? (
    // ... existing code ...
) : isRegistering ? (
    <Register onRegisterSuccess={handleRegisterSuccess} />
) : (
    <div>
        <Login onLogin={handleLogin} />
        <button onClick={() => setIsRegistering(true)}>Register</button>
    </div>
)}

// ... existing code ...
```

Crea un componente del profilo.

Crea un componente chiamato **Profile.js** nella cartella components che mostrerà il nome dell'utente autenticato.

Profile.js:

```javascript

import React from 'react';

const Profile = ({ user }) => {
    return (
        <div>
            <h2>Profile</h2>
            <p>Name: {user.name}</p>
        </div>
    );
};

export default Profile;
```

Aggiungi il componente del profilo in App.js.

App.js:

```javascript

// ... existing code ...

import Profile from './components/Profile';

// ... existing code in the return statement ...

{isAuthenticated ? (
    <>
        <button onClick={handleLogout}>Logout</button>
        <Profile user={userData} />
        <Biography />
        <Projects />
        <Skills />
        <Contacts />
    </>
) : // ... existing code ...
```

Quindi ecco App.js completo

 pagina App.js completa

Ecco una versione completa di App.js che include sia il form di login che quello di registrazione, e mostra il profilo dell'utente quando è autenticato:

```javascript

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Biography from './components/Biography';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import jwt_decode from 'jwt-decode';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [isRegistering, setIsRegistering] = useState(false);
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? jwt_decode(token) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUserData(jwt_decode(token));
    }
  }, []);

  const handleLogin = (token) => {
    const decoded = jwt_decode(token);
    setUserData(decoded);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  const handleRegisterSuccess = () => {
    setIsRegistering(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <Header />

      {isAuthenticated ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <Profile user={userData} />
          <Biography />
          <Projects />
          <Skills />
          <Contacts />
        </>
      ) : isRegistering ? (
        <Register onRegisterSuccess={handleRegisterSuccess} />
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <button onClick={() => setIsRegistering(true)}>Register</button>
        </div>
      )}
    </div>
  );
}

export default App;
```

Questa versione di App.js include la gestione degli stati per l'autenticazione, la registrazione, e i dati dell'utente. Utilizza anche i componenti Login, Register, e Profile per mostrare il form di login, il form di registrazione, e il profilo dell'utente rispettivamente.

Assicurati di avere i componenti Login.js, Register.js, e Profile.js implementati come descritto precedentemente, e che tutti i file siano importati 

# DA IMPLEMENTARE

1 - divisione fre i ruoli dell'applicazione in admin ed user
- il file server js si deve occupare di riconoscere il ruolo ed attribuire diverse funzionalità tramite
- un booleano isAdmin e lo utilizzaremo in Profile.js e lo verificheremo tramite server.js
- se l'utente è admin può gestire i profili degli users

2 - Aggiungere la gestione del profilo utente dove l'utente possa:
- gestire le proprie skills e visualizzarle attraverso status bar javascript 
- gestire i propri progetti

3 - aggiungere ai progetti una foto ed un link
- implemtnare il component progetti

4 - aggiungere il database con la tabella users (name, username, password, role, link all'immagin personalizzata del profilo)
 
5 - aggiungere al database una tabella Projects (nome, description, foto del progetto, link)

# PRIORITà

- Database degli utenti
- gestione progetti e skills
- Versioning

# TECNOLOGIE (stack MERN)

What Is The MERN Stack? Introduction & Examples
https://www.mongodb.com/mern-stack
MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. 1. MongoDB — document database 2. Express(.js) — Node.js web framework 3. React(.js) — a client-side JavaScript framework 4. Node(.js) — the premier JavaScript web server Express and Node make up … Visualizza altr

- tipo di database MongoDB