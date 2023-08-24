# next.js

Next.js è un framework basato su React che ti consente di creare applicazioni web lato server con rendering e generazione di siti statici.

Prima di tutto, avrai bisogno di **Node.js** e **npm**.

Una volta installato Node.js, puoi creare un nuovo progetto Next.js utilizzando il comando **create-next-app** nel tuo terminale:


**npx create-next-app@latest nome-del-progetto**

Dopo aver creato il progetto, accedi alla directory del progetto:

**cd nome-del-progetto**

Ora, puoi avviare il server di sviluppo con:


**npm run dev**

Dovresti essere in grado di vedere il tuo progetto Next.js in esecuzione su http://localhost:3000.

## Concetti fondamentali

Next.js ha alcuni concetti chiave che dovresti conoscere:

**Pages**: in Next.js, una pagina è un file React Component nella directory app. Ogni pagina è associata a un percorso di routing basato sul suo nome di file.

**Static Generation (SG) e Server Side Rendering (SSR)**: Next.js consente sia la generazione statica sia il rendering lato server per le pagine. Puoi decidere quale metodo utilizzare per ogni singola pagina.

**Styling**: Next.js supporta styled-jsx per lo styling, ma è possibile utilizzare qualsiasi libreria di styling che preferisci, come styled-components o emotion.

**Routing**: Next.js ha un sistema di routing integrato, e supporta la navigazione lato client con next/link.

Per esempio, se hai un file chiamato **index.js** nella directory pages, questo sarà renderizzato quando qualcuno visita la tua homepage. Se hai un file chiamato **about.js** nella directory pages, questo sarà renderizzato quando qualcuno visita **"/about"** sul tuo sito.

La struttura della directory pages può anche essere annidata. Ad esempio, se hai un file chiamato **blog/post.js**, questo sarà renderizzato quando qualcuno visita **"/blog/post"** sul tuo sito.

Inoltre, Next.js supporta il routing dinamico. Per esempio, se crei un file chiamato **[id].js** nella directory **pages/posts**, la pagina corrispondente sarà in grado di renderizzare qualsiasi contenuto in base al valore di **"id"** presente **nell'URL**. Il valore **"id"** può essere accessibile nel componente della pagina attraverso il hook useRouter di Next.js.

Ecco un esempio di come potrebbe apparire una directory pages:

```
app/
--| index.js
--| about.js
--| contact.js
--| blog/
-----| index.js
-----| [slug].js
--| api/
-----| user.js
```

In questo esempio, ci sono rotte per "/", "/about", "/contact", "/blog", "/blog/[slug]", e un'API Route per "/api/user".

Ogni file nella directory pages **dovrebbe esportare un componente React per default**. Questo componente è il componente principale che verrà renderizzato quando qualcuno visita la rotta corrispondente.




## Rendering

Next.js offre due metodi principali per il rendering delle pagine: la Generazione Statica (Static Generation, SG) e il Rendering Lato Server (Server Side Rendering, SSR).

Entrambi i metodi hanno vantaggi e svantaggi e la scelta del metodo di rendering dipende dalle esigenze specifiche della tua applicazione.

**Generazione Statica (SG)**

La generazione statica è il metodo in cui una pagina viene pre-renderizzata in HTML al momento della compilazione e sarà riutilizzata su ogni richiesta. Le pagine renderizzate staticamente possono essere memorizzate nella cache da un Content Delivery Network (CDN) e servite rapidamente agli utenti, il che le rende estremamente performanti.

Next.js consente di creare pagine statiche utilizzando due funzioni: **getStaticProps e getStaticPaths.**

**getStaticProps:** Questa funzione viene chiamata al momento della compilazione e può essere utilizzata per calcolare i dati che la pagina ha bisogno per il rendering.

**getStaticPaths:** Questa funzione è necessaria per le pagine con percorsi dinamici

Può essere utilizzata per definire quali percorsi per la pagina dinamica devono essere renderizzati al momento della compilazione.
Rendering Lato Server (SSR)

Il Rendering Lato Server è il metodo in cui una pagina viene pre-renderizzata in HTML per ogni richiesta. Ciò significa che ogni volta che un utente richiede la pagina, il server calcolerà il rendering della pagina con i dati attuali. Questo lo rende ideale per le pagine che hanno bisogno di contenuti sempre aggiornati o personalizzati.

Next.js consente il rendering lato server utilizzando la funzione **getServerSideProps.**

getServerSideProps: Questa funzione viene chiamata ogni volta che viene fatta una richiesta per la pagina.

Può essere utilizzata per calcolare i dati che la pagina ha bisogno per il rendering.

La scelta tra Generazione Statica e Rendering Lato Server dipenderà dalle esigenze specifiche della tua applicazione.

In generale, se è possibile pre-renderizzare una pagina in anticipo, la Generazione Statica offre migliori prestazioni.

Tuttavia, per le pagine che necessitano di dati personalizzati o sempre aggiornati, il Rendering Lato Server potrebbe essere la scelta migliore.

Routing e Link: Next.js ha un sistema di routing integrato che utilizza il file system. Puoi utilizzare **il componente Link di Next.js** per creare collegamenti tra le tue pagine.

Inoltre, Next.js supporta il routing dinamico, il che significa che puoi avere parametri di rotta variabili.

**Data Fetching:** Next.js offre diverse funzioni per il fetching dei dati, tra cui getStaticProps, getStaticPaths e getServerSideProps, che ti permettono di fetchare i dati al momento della compilazione o al momento della richiesta.

**Image Optimization:** Next.js offre un componente Image per ottimizzare automaticamente le immagini. Questo componente carica le immagini in modo lazy, le ridimensiona, le adatta e ottimizza per la performance.

**Styling:** Next.js supporta lo styling out-of-the-box con CSS e Sass, e supporta anche styled-jsx per CSS-in-JS. Puoi anche utilizzare altre librerie di styling come styled-components o emotion se preferisci.

**Supporto TypeScript:** Next.js supporta TypeScript out-of-the-box. Puoi semplicemente rinominare i tuoi file da .js a .tsx per iniziare a utilizzare TypeScript.

**Environment Variables:** Next.js ha supporto integrato per le variabili d'ambiente, che ti permette di proteggere le tue chiavi API e altre informazioni sensibili.

**Fast Refresh:** Next.js supporta Fast Refresh, che significa che la tua applicazione si aggiorna in tempo reale mentre stai sviluppando senza perdere lo stato del tuo componente.

Imparare questi concetti ti fornirà una solida base per iniziare a creare applicazioni con Next.js.




# Creazione di un Progetto Next.js 13

## Passaggio 1: Assicurati di avere Node.js e npm installati nel tuo sistema. Puoi verificarlo aprendo un terminale e digitando i seguenti comandi:


node -v

npm -v

Se non hai Node.js e npm installati, dovrai installarli. Puoi trovare le istruzioni di installazione sul sito ufficiale di Node.js.

## Passaggio 2: Crea un nuovo progetto utilizzando create-next-app, che è un pacchetto fornito da Next.js per iniziare rapidamente con un nuovo progetto. Apri un terminale, vai nella directory in cui desideri creare il tuo nuovo progetto e digita il seguente comando:


npx create-next-app@latest my-next-app

Questo comando creerà una nuova directory chiamata "my-next-app" con un progetto Next.js pre-configurato.

## Passaggio 3: Entra nella directory del tuo nuovo progetto e avvia il server di sviluppo:


cd my-next-app

npm run dev

## Passaggio 4: Ora dovresti avere un server di sviluppo in esecuzione.

Apri un browser e vai a http://localhost:3000. Dovresti vedere una pagina di benvenuto di Next.js.

## Passaggio 5: Apri il tuo progetto in un editor di codice (come VSCode) e apri il file pages/index.js.

Questa è la tua pagina "Hello World".
Modifica il file per renderlo unico.
Per esempio, potresti sostituire il codice esistente con qualcosa del genere:

```jsx

export default function Home() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}
```

## Passaggio 6: Salva il tuo file e torna al tuo browser. Next.js ha il hot reloading, quindi dovresti vedere immediatamente le tue modifiche.

Next.js 13 introduce un nuovo modello di file system in cui pages diventa app. Vediamo come creare il tuo primo progetto con Next.js 13.

File System Migliorato.

## Passaggio 1: Inizia creando una nuova pagina.

In Next.js 13, il percorso della pagina è determinato dalla sua posizione nella cartella app/pages.

Quindi, se desideri creare una pagina all'indirizzo "/profile", dovrai creare un nuovo file profile.tsx all'interno della cartella app/pages.


**code app/pages/profile.tsx**

## Passaggio 2: Apri il nuovo file profile.tsx e aggiungi il seguente codice:

```tsx

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome to the profile page!</p>
    </div>
  )
}
```

## Passaggio 3: Salva il file e naviga a http://localhost:3000/profile nel tuo browser.

Dovresti vedere la tua nuova pagina del profilo.

Ora, **proviamo con un percorso dinamico.**

## Passaggio 4: Per creare un percorso dinamico, devi creare un file o una cartella con il nome racchiuso tra parentesi quadre.

Ad esempio, per creare una pagina a "/profile/[username]", crea un nuovo file app/pages/profile/[username].tsx.


touch app/pages/profile/[username].tsx

## Passaggio 5: Apri il file [username].tsx e aggiungi il seguente codice:

```tsx

import { useRouter } from 'next/router'

export default function UserProfile() {
  const router = useRouter()
  const { username } = router.query

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  )
}
```

## Passaggio 6: Salva il file e vai a http://localhost:3000/profile/johndoe nel tuo browser.

Dovresti vedere "User: johndoe" visualizzato sulla pagina.





## uso delle funzioni getServerSideProps o getStaticProps per il rendering lato server o la generazione statica di pagine.

Esercizio: Routing Dinamico con Dati Fetchati

Immagina di avere un'applicazione blog in cui ogni post ha un suo URL univoco basato sul suo slug. In questa esercitazione, creerai pagine dinamiche per i post del blog utilizzando getStaticProps e getStaticPaths.

## Passaggio 1: Crea una nuova cartella chiamata "blog" all'interno di app/pages e all'interno di essa crea un file [slug].tsx.


**mkdir app/pages/blog**
**code app/pages/blog/[slug].tsx**

## Passaggio 2: Apri il file [slug].tsx e aggiungi il seguente codice per gestire il routing dinamico:

```tsx

import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
    </div>
  )
}
```

## Passaggio 3: Ora, aggiungeremo la logica per pre-renderizzare i dati del post del blog utilizzando getStaticProps.

Per questa esercitazione, faremo finta di avere una funzione asincrona getBlogPostData che restituisce i dati del post del blog in base al suo slug:

```tsx

export async function getStaticProps(context) {
  const { params } = context;
  const blogPostData = await getBlogPostData(params.slug);

  return {
    props: {
      post: blogPostData,
    },
  };
}

export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
```

## Passaggio 4: Infine, utilizzeremo la funzione getStaticPaths per definire quali percorsi della pagina dovranno essere generati in fase di build. Per ora, supponiamo di avere una funzione asincrona getAllBlogSlugs che restituisce tutti gli slug dei post del blog:

```tsx

export async function getStaticPaths() {
  const slugs = await getAllBlogSlugs();
  const paths = slugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
```

Ora, quando esegui una build del tuo sito, Next.js genererà pagine statiche per tutti i post del blog in base ai loro slug.

**Nota:** Nel mondo reale, le funzioni come getBlogPostData e getAllBlogSlugs potrebbero richiedere i dati da un database esterno.

# il concetto di CSS-in-JS in Next.js.

Next.js supporta styled-jsx out of the box, che è una libreria CSS-in-JS.

Ciò significa che puoi scrivere CSS all'interno dei tuoi componenti React senza doverti preoccupare di problemi come il conflitto di nomi di classe. Il CSS che scrivi per un componente avrà effetto solo su quel componente.

## Esercizio: Applicazione di Stili a un Componente

## Passaggio 1: Crea un nuovo componente in app/components chiamato StyledButton.tsx.


mkdir app/components
touch app/components/StyledButton.tsx

## Passaggio 2: Apri StyledButton.tsx e aggiungi il seguente codice:

```tsx

export default function StyledButton() {
  return (
    <button>
      Click me!

      <style jsx>{`
        button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 24px;
          margin: 5px;
          font-size: 1em;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </button>
  )
}
```

Adesso hai un bottone stile Next.js blu. Puoi utilizzarlo in qualsiasi pagina o componente importandolo.

## Esercizio: Utilizzo di Moduli CSS

Se preferisci utilizzare i moduli CSS, Next.js supporta anche questa funzionalità.

Questo ti permette di utilizzare CSS in file separati e di importare stili specifici.

## Passaggio 1: Crea un nuovo file CSS in styles chiamato Button.module.css.


mkdir styles
touch styles/Button.module.css

## Passaggio 2: Apri Button.module.css e aggiungi il seguente codice CSS:

```css
Copy code
.button {
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 10px 24px;
  margin: 5px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
}
```

## Passaggio 3: Crea un nuovo componente in app/components chiamato CssModuleButton.tsx.


touch app/components/CssModuleButton.tsx

## Passaggio 4: Apri CssModuleButton.tsx e aggiungi il seguente codice:

```tsx

import styles from '../../styles/Button.module.css'

export default function CssModuleButton() {
  return (
    <button className={styles.button}>
      Click me!
    </button>
  )
}
```

# l'utilizzo delle librerie di terze parti in Next.js.

Spesso, avrai bisogno di utilizzare librerie di terze parti per aggiungere funzionalità al tuo progetto Next.js.

L'installazione e l'utilizzo di queste librerie non differisce molto da come lo faresti in una normale applicazione React.js.

## Esercizio: Utilizzo della libreria Axios per le richieste http

Axios è una popolare libreria JavaScript utilizzata per effettuare richieste HTTP. Vediamo come possiamo utilizzarla in un progetto Next.js.

## Passaggio 1: Installa Axios nel tuo progetto utilizzando npm o yarn:


npm install axios

## Passaggio 2: Creiamo un componente UserList che effettuerà una richiesta GET all'API JSONPlaceholder e visualizzerà una lista di utenti.

Crea un nuovo file in app/components chiamato UserList.tsx.


touch app/components/UserList.tsx

## Passaggio 3: Apri UserList.tsx e aggiungi il seguente codice:

```tsx

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
```





# il concetto di Internazionalizzazione in Next.js.

Next.js 13 ha introdotto il supporto integrato per l'internazionalizzazione (i18n).

Ciò significa che puoi facilmente creare versioni multiple del tuo sito web per diverse lingue senza dover utilizzare librerie di terze parti.

## Esercizio: Impostazione dell'Internazionalizzazione

## Passaggio 1: Per iniziare, aggiorna il tuo file next.config.js per includere l'opzione i18n.

Ad esempio, se vuoi supportare l'inglese (predefinito) e l'italiano, il tuo file next.config.js dovrebbe assomigliare a questo:

```js

module.exports = {
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },
}
```

## Passaggio 2: Ora, puoi utilizzare la funzione useRouter per accedere al locale corrente del tuo sito.
Ecco un esempio di come potresti creare un componente "Hello, World!" multilingue:

```tsx

import { useRouter } from 'next/router'

export default function HelloWorld() {
  const router = useRouter()
  const { locale } = router

  return (
    <div>
      {locale === 'en' && <p>Hello, World!</p>}
      {locale === 'it' && <p>Ciao, Mondo!</p>}
    </div>
  )
}
```

Adesso hai un componente che visualizzerà "Hello, World!" quando il locale è 'en' e "Ciao, Mondo!" quando il locale è 'it'.

## Esercizio: Creazione di Versioni Localizzate delle Pagine

Next.js 13 permette anche di creare versioni separate delle tue pagine per ogni locale. Ad esempio, potresti avere un file app/pages/about.tsx per la versione inglese della tua pagina "About", e un file app/pages/it/about.tsx per la versione italiana.

Prova a creare queste due pagine e a visualizzarle navigando a http://localhost:3000/about e http://localhost:3000/it/about.

Congratulazioni! Hai appena appreso come utilizzare l'internazionalizzazione in Next.js. Nei prossimi esercizi, imparerai a gestire le transizioni di pagina e a personalizzare il documento e l'applicazione di base di Next.js.




# la gestione delle transizioni di pagina in Next.js.

Next.js utilizza il componente Link per permettere la navigazione tra le pagine del tuo sito. Ma cosa succede se vuoi animare le transizioni tra le pagine? Possiamo farlo utilizzando una libreria chiamata Framer Motion.

## Esercizio: Animazione delle Transizioni di Pagina

## Passaggio 1: Installa Framer Motion nel tuo progetto utilizzando npm o yarn:


npm install framer-motion

## Passaggio 2: Crea un componente Layout che includerà l'animazione della transizione di pagina.
Questo componente sarà utilizzato per avvolgere il contenuto delle tue pagine.

Crea un nuovo file in app/components chiamato Layout.tsx.


touch app/components/Layout.tsx
## Passaggio 3: Apri Layout.tsx e aggiungi il seguente codice:

```tsx

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Layout({ children }) {
  const router = useRouter()
  const controls = useAnimation()

  useEffect(() => {
    controls.start('animate')
  }, [router.pathname]) // restart animation on route change

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate={controls}
      exit='exit'
    >
      {children}
    </motion.div>
  )
}
```

## Passaggio 4: Ora, devi avvolgere il contenuto delle tue pagine con il componente Layout.
Ecco come potrebbe apparire la tua pagina app/pages/index.tsx:

```tsx

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      // ... rest of your page content
    </Layout>
  )
}
```

Adesso hai delle transizioni di pagina animate in Next.js utilizzando Framer Motion!

Congratulazioni! Hai appreso come gestire le transizioni di pagina in Next.js. Nei prossimi esercizi, esplorerai come personalizzare il documento e l'applicazione di base di Next.js.




# Ora esploreremo come personalizzare il Documento e l'Applicazione di base in Next.js.

In Next.js, il componente _document.tsx (o .js) è un'ottima posizione per mettere qualsiasi logica che riguarda tutto il tuo sito, come le meta-tag head o l'aggiunta di provider globali.

## Esercizio: Personalizzazione del Documento di Base

## Passaggio 1: Crea un nuovo file in app/pages chiamato _document.tsx.


touch app/pages/_document.tsx

## Passaggio 2: Apri _document.tsx e aggiungi il seguente codice:

```tsx

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="A Next.js application" />
          <link rel="icon" href="/favicon.ico" />
          {/* Add other head tags here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```
Questa è la struttura base del documento in Next.js. Puoi personalizzare questo file per aggiungere o modificare le meta-tag, aggiungere font esterni, ecc.

Ora, il componente _app.tsx (o .js) in Next.js è il componente di livello più alto che viene condiviso tra tutte le diverse pagine.

Puoi utilizzarlo per mettere in comune le parti del tuo layout tra diverse pagine, o per aggiungere funzionalità a livello di applicazione, come la gestione dello stato o il routing.

## Esercizio: Personalizzazione dell'Applicazione di Base

## Passaggio 1: Crea un nuovo file in app/pages chiamato _app.tsx.


touch app/pages/_app.tsx
## Passaggio 2: Apri _app.tsx e aggiungi il seguente codice:

```tsx

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
```
Questo è il layout di base di _app.tsx in Next.js. Puoi personalizzare questo file per aggiungere funzionalità a livello di applicazione, come provider di stato globale (ad esempio, Redux o MobX), temi globali, ecc.

Congratulazioni! Hai appena appreso come personalizzare il documento e l'applicazione di base in Next.js. Con questi concetti, dovresti essere ben equipaggiato per iniziare a costruire la tua applicazione Next.js.




# prima applicazione complet sito con utenti utilizza auth0 e pagine regista ed login e visualizza profili 

Creare un sito completo con autenticazione può essere piuttosto impegnativo, ma proverò a darti una panoramica su come potrebbe essere fatto utilizzando Next.js e Auth0. Non dimenticare che questo sarà un esercizio avanzato e potrebbe richiedere una buona comprensione di Next.js e Auth0.

## Esercizio: Creazione di un sito completo con autenticazione

## Passaggio 1: Per prima cosa, avrai bisogno di un account Auth0. Se non ne hai già uno, registrati su Auth0.

## Passaggio 2: Una volta che hai il tuo account Auth0, installa il pacchetto @auth0/nextjs-auth0 nel tuo progetto Next.js. Questo pacchetto fornisce funzioni e componenti per aiutarti con l'autenticazione.


npm install @auth0/nextjs-auth0

## Passaggio 3: Crea un file .env.local nel tuo progetto e aggiungi le tue variabili di ambiente Auth0.

Assicurati di sostituire YOUR_DOMAIN, YOUR_CLIENT_ID e YOUR_CLIENT_SECRET con i tuoi dati Auth0 reali.

```

AUTH0_SECRET='a very long secret value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_DOMAIN'
AUTH0_CLIENT_ID='YOUR_CLIENT_ID'
AUTH0_CLIENT_SECRET='YOUR_CLIENT_SECRET'
Passaggio 4: Creiamo una pagina di login. Crea un nuovo file in app/pages chiamato login.tsx.
```

touch app/pages/login.tsx

Apri login.tsx e aggiungi il seguente codice:

```tsx
Copy code
import { useUser } from '@auth0/nextjs-auth0'

export default function Login() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div>
        <h1>Welcome, {user.name}!</h1>
        <p>You are logged in.</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You are not logged in.</h1>
        <p>Please log in to continue.</p>
      </div>
    )
  }
}
```
## Passaggio 5: Creiamo una pagina di registrazione.
La registrazione viene gestita da Auth0, quindi la pagina di registrazione sarà simile alla pagina di login.

Crea un nuovo file in app/pages chiamato register.tsx.


touch app/pages/register.tsx

Apri register.tsx e copia il codice da login.tsx.

## Passaggio 6: Creiamo una pagina del profilo. Crea un nuovo file in app/pages chiamato profile.tsx.


touch app/pages/profile.tsx

Apri profile.tsx e aggiungi il seguente codice:

```tsx

import { useUser } from '@auth0/nextjs-auth0'

export default function Profile() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div>
        <h1>{user.name}'s Profile</h1>
        <p>This is your profile page.</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You are not logged in.</h1>
        <p>Please log in to view your profile.</p>
      </div>
    )
  }
}
```
## Esercizio: Creazione di Rotte Protette

## Passaggio 1: Crea una nuova pagina che sarà accessibile solo agli utenti autenticati. Chiamiamola secret.tsx.


touch app/pages/secret.tsx

## Passaggio 2: Apri secret.tsx e aggiungi il seguente codice:

```tsx

import { useUser } from '@auth0/nextjs-auth0'

export default function Secret() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div>
        <h1>Secret Page</h1>
        <p>Only logged-in users can see this!</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You are not logged in!</h1>
        <p>Please log in to see the secret.</p>
      </div>
    )
  }
}
```
## Esercizio: Gestione del Logout

## Passaggio 1: Crea una nuova pagina che gestirà il logout. Chiamiamola logout.tsx.


touch app/pages/logout.tsx

## Passaggio 2: Apri logout.tsx e aggiungi il seguente codice:

```tsx

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0'

export default function Logout() {
  const { user, error, isLoading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user && !isLoading) {
      router.push('/')
    }
  }, [user, isLoading])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div>
        <h1>Logging out...</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You are already logged out.</h1>
      </div>
    )
  }
}
```
**Nota:** Ricorda di aggiungere i link per navigare tra queste pagine nel tuo layout o nel tuo componente di navigazione.

Congratulazioni! Hai appena creato rotte protette e implementato la gestione del logout in Next.js utilizzando Auth0. Continuando su questo percorso, potresti voler esplorare come personalizzare ulteriormente l'esperienza utente, come l'aggiunta di un form di registrazione personalizzato, l'aggiunta di opzioni di recupero password, e altro ancora.

