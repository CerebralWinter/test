
 # Esempio di utilizzo di CSS


Per utilizzare CSS, è necessario creare un file CSS separato o incorporare il codice CSS all'interno della pagina HTML utilizzando il tag adatto.
Ecco un esempio di codice CSS incorporato all'interno di un documento HTML:

```html
<link rel="stylesheet" type="text/css" href="style.css">
```


 **1 esercizio**               



 Crea un file HTML con un titolo e tre paragrafi, ciascuno contenente un breve testo.                               
 Aggiungi un file CSS separato e collegalo alla tua pagina HTML utilizzando il tag <link>.                          
 Nella sezione CSS, aggiungi una regola che modifica il colore del testo del titolo in rosso.                       
 Aggiungi una regola CSS che modifica la dimensione del testo del primo paragrafo a 24px.                           
 Aggiungi una regola CSS che aggiunge un margine inferiore di 10px al secondo paragrafo.                            
 Aggiungi una regola CSS che aggiunge uno sfondo giallo al terzo paragrafo.                                         


HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>CSS</title>
  </head>
  <body>
    <h1>Benvenuti nel mio sito web</h1>
    <p>Questo è il mio primo paragrafo.</p>
    <p>Questo è il mio secondo paragrafo.</p>
    <p>Questo è il mio terzo paragrafo.</p>
  </body>
</html>
```
CSS:
```css
h1 {
  color: red;
}

p:first-of-type {
  font-size: 24px;
}

p:nth-of-type(2) {
  margin-bottom: 10px;
}

p:last-of-type {
  background-color: yellow;
}
```

Con queste regole CSS, il tuo titolo diventerà  rosso,
il primo paragrafo avrà  una dimensione del testo di 24px,
il secondo paragrafo avrà  un margine inferiore di 10px e il terzo paragrafo avrà  uno sfondo giallo.


 **2  esercizio**              



 Crea un file HTML con un'immagine e un'etichetta (tag <figcaption>) che descrive l'immagine.                       
 Aggiungi un file CSS separato e collegalo alla tua pagina HTML utilizzando il tag <link>.                          
 Nella sezione CSS, crea una classe che definisce la larghezza dell'immagine al 50% della larghezza della pagina.   
 Crea una regola CSS che centra l'immagine orizzontalmente.                                                         
 Crea una regola CSS che definisce un bordo grigio chiaro intorno all'immagine con uno spessore di 2px.             
 Crea una regola CSS che modifica la dimensione del testo dell'etichetta a 20px e lo allinea al centro.             


HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>CSS</title>
  </head>
  <body>
    <figure> <!-- tag <figure> è un contenitore per immagini e caption -->
      <img src="https://picsum.photos/400" alt="Immagine di esempio">
      <figcaption>Questa è un'immagine di esempio</figcaption>
    </figure>
  </body>
</html>
```
CSS:
```css
img.example {
  width: 50%;
  display: block;
  margin: 0 auto;
  border: 2px solid lightgray;
}

figcaption {
  font-size: 20px;
  text-align: center;
}
```
Con queste regole CSS, l'immagine sarà  larga il 50% della larghezza della pagina e centrata orizzontalmente.
Avrà  anche un bordo grigio chiaro intorno con uno spessore di 2px.
L'etichetta sarà  centrata e avrà  una dimensione del testo di 20px.


 **3  esercizio**              



 Crea un file HTML con un menu di navigazione orizzontale e quattro voci di menu: Home, About, Products e Contact.  
 Aggiungi un file CSS separato e collegalo alla tua pagina HTML utilizzando il tag <link>.                          
 Nella sezione CSS, crea una regola che definisce lo stile di base del menu di navigazione,                         
 impostando il colore di sfondo a grigio chiaro e il padding a 0.                                                   
 Crea una regola CSS che definisce lo stile delle voci di menu, impostando il display a inline-block,               
 la larghezza a 25% e il testo allineato al centro.                                                                 
 Aggiungi anche un bordo grigio scuro intorno alle voci di menu con uno spessore di 2px.                            
 Crea una regola CSS che definisce lo stile dell'elemento selezionato del menu di navigazione,                      
 impostando il colore di sfondo a blu e il testo a bianco.                                                          


HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>CSS</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="#" class="selected">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </body>
</html>
```
CSS:
```css
nav {
  background-color: lightgray;
  padding: 0;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  width: 25%;
  text-align: center;
  border: 2px solid darkgray;
}

nav li a {
  display: block;
  text-decoration: none;
  color: black;
}

nav li a:hover {
  background-color: gray;
}

nav li a.selected {
  background-color: blue;
  color: white;
}
```
Con queste regole CSS, il menu di navigazione avrà  uno sfondo grigio chiaro e le voci
di menu avranno un bordo grigio scuro intorno con uno spessore di 2px.
Il testo delle voci di menu sarà  allineato al centro e ciascuna voce avrà  una larghezza del 25% del menu.
L'elemento selezionato del menu di navigazione avrà  uno sfondo blu e il testo bianco.


 **4  esercizio**              



 Crea un file HTML con una sezione contenente quattro immagini di uguale dimensione.                                
 Aggiungi un file CSS separato e collegalo alla tua pagina HTML utilizzando il tag <link>.                          
 Nella sezione CSS, crea una regola che definisce lo stile di base della sezione delle immagini,                    
 impostando il padding a 0 e la larghezza a 80% della larghezza della pagina.                                       
 Crea una regola CSS che definisce lo stile delle immagini,                                                         
 impostando la larghezza a 100% e l'altezza automatica per mantenere le proporzioni originali.                      
 Crea una regola CSS che definisce sfondo chiaro per l'immagine con un bordo grigio intorno ad essa con spessore di 2px.
 Crea una regola CSS che definisce l'effetto di ombreggiatura su ciascuna immagine al passaggio del mouse.          


HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>CSS</title>
  </head>
  <body>
    <section>
      <img src="https://picsum.photos/400" alt="Immagine 1">
      <img src="https://picsum.photos/400" alt="Immagine 2">
      <img src="https://picsum.photos/400" alt="Immagine 3">
      <img src="https://picsum.photos/400" alt="Immagine 4">
    </section>
  </body>
</html>
```
CSS:
```css
section {
  width: 80%;
  margin: 0 auto;
  padding: 0;
}

section img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
  border: 2px solid gray;
  background-color: lightgray;
  transition: box-shadow 0.3s ease-in-out;
}

section img:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
```
Con queste regole CSS, le immagini avranno un bordo grigio intorno a uno sfondo chiaro e una larghezza del 100%.
Al passaggio del mouse, ciascuna immagine avrà  un effetto di ombreggiatura.
La sezione delle immagini occuperà  il 80% della larghezza della pagina e non avrà  alcun padding.


 **5  esercizio**              



 Crea un file HTML con una griglia di immagini di diverse dimensioni, con una descrizione testuale sotto ciascuna immagine.
 Aggiungi un file CSS separato e collegalo alla tua pagina HTML utilizzando il tag <link>.                          
 Nella sezione CSS, crea una regola che definisce lo stile di base della griglia,                                   
 impostando il padding a 0 e la larghezza a 80% della larghezza della pagina.                                       
 Crea una regola CSS che definisce lo stile delle immagini,                                                         
 impostando una larghezza massima del 100% e l'altezza automatica per mantenere le proporzioni originali.           
 Crea una regola CSS che definisce lo stile della descrizione testuale sotto ogni immagine,                         
 impostando una larghezza massima del 100% e il testo allineato al centro.                                          
 Crea una regola CSS che definisce uno sfondo chiaro per ciascuna descrizione testuale con un bordo grigio con uno spessore di 2px


HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>CSS</title>
  </head>
  <body>
    <section>
      <div>
        <img src="https://picsum.photos/400" alt="Immagine 1">
        <p>Descrizione dell'immagine 1</p>
      </div>
      <div>
        <img src="https://picsum.photos/500" alt="Immagine 2">
        <p>Descrizione dell'immagine 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/600" alt="Immagine 3">
        <p>Descrizione dell'immagine 3</p>
      </div>
      <div>
        <img src="https://picsum.photos/400" alt="Immagine 4">
        <p>Descrizione dell'immagine 4</p>
      </div>
      <div>
        <img src="https://picsum.photos/500" alt="Immagine 5">
        <p>Descrizione dell'immagine 5</p>
      </div>
      <div>
        <img src="https://picsum.photos/600" alt="Immagine 6">
        <p>Descrizione dell'immagine 6</p>
      </div>
    </section>
  </body>
</html>
```
CSS:
```css
section {
  width: 80%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

section div {
  width: 31%;
  margin-bottom: 20px;
  border: 2px solid gray;
  background-color: lightgray;
  overflow: hidden;
}

section img {
  max-width: 100%;
  height: auto;
  display: block;
}

section p {
  margin: 0;
  padding: 10px;
  max-width: 100%;
  text-align: center;
  background-color: lightgray;
  border-top: 2px solid gray;
}
```

Con queste regole CSS, la griglia di immagini sarà  centrata orizzontalmente e occuperà  il 80% della larghezza della pagina.
Ciascuna immagine avrà  un bordo grigio intorno ad essa e una descrizione testuale sotto di essa,
con uno sfondo chiaro e un bordo grigio intorno.
Le immagini avranno una larghezza massima del 100% e l'altezza automatica per mantenere le proporzioni originali.
Le descrizioni testuali avranno una larghezza massima del 100% e il testo allineato al centro.

Inoltre, abbiamo utilizzato la proprietà  flexbox per allineare le immagini in modo che ogni riga
sia completa e non ci siano spazi vuoti tra le immagini.
Abbiamo anche utilizzato la proprietà  overflow:hidden per nascondere eventuali
parti dell'immagine che possano fuoriuscire dalla sua area.


 **6  esercizio**              



 Crea un file HTML con un'immagine di sfondo a schermo intero e una                                                 
 sezione contenente un'intestazione (tag < h1 >) e un paragrafo (tag < p >).                                            
 Aggiungi un file CSS separato e collegalo alla tua pagina HTML utilizzando il tag < link >.                          
 Nella sezione CSS, crea una regola che definisce lo stile di base del corpo della pagina,                          
 impostando il margin a 0 e il font-family a Arial.                                                                 
 Crea una regola CSS che definisce lo stile dell'immagine di sfondo,                                                
 impostando la larghezza e l'altezza a 100% e il ridimensionamento a "cover".                                       
 Crea una regola CSS che definisce lo stile dell'intestazione,                                                      
 impostando la dimensione del testo a 72px, il colore a bianco e la posizione al centro del viewport.               
 Crea una regola CSS che definisce lo stile del paragrafo,                                                          
 impostando la dimensione del testo a 24px, il colore a bianco e la posizione leggermente sotto l'intestazione      


HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>CSS</title>
  </head>
  <body>
    <header>
      <h1>Titolo del mio sito web</h1>
      <p>Benvenuti nel mio sito web.</p>
    </header>
  </body>
</html>
```
CSS:
```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  background-image: url('https://picsum.photos/1920/1080');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 72px;
  color: white;
  text-align: center;
}

p {
  font-size: 24px;
  color: white;
  text-align: center;
  margin-top: 20px;
}
```
Con queste regole CSS, l'immagine di sfondo coprirà  l'intera finestra del browser,
con un effetto di ridimensionamento ("cover") per mantenere le proporzioni originali.
L'intestazione sarà  centrata orizzontalmente e verticalmente,
con una dimensione del testo di 72px e il testo di colore bianco.
Il paragrafo sarà  posizionato leggermente sotto l'intestazione e avrà  una dimensione del testo di
24px e il testo di colore bianco.


 **7  esercizio**              



 Crea un file HTML con una sezione contenente una lista di elementi.                                                
 Aggiungi un file CSS separato e collegalo alla tua pagina HTML utilizzando il tag <link>.                          
 Nella sezione CSS, crea una regola che definisce lo stile di base della lista,                                     
 impostando il padding a 0 e la larghezza a 80% della larghezza della pagina                                        
 Crea una regola CSS che definisce lo stile degli elementi della lista,                                             
 impostando il display a flex e la larghezza al 100%.                                                               
 Crea una regola CSS che definisce lo stile dell'immagine all'interno di ciascun elemento della lista,              
 impostando la larghezza a 30% e l'altezza automatica per mantenere le proporzioni originali.                       
 Crea una regola CSS che definisce lo stile del testo all'interno di ciascun elemento della lista,                  
 impostando la larghezza a 70%, il testo allineato a sinistra e un margine a sinistra di 20px                       


HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>CSS</title>
  </head>
  <body>
    <section>
      <ul>
        <li>
          <img src="https://picsum.photos/200" alt="Immagine 1">
          <div>
            <h2>Titolo dell'elemento 1</h2>
            <p>Descrizione dell'elemento 1</p>
          </div>
        </li>
        <li>
          <img src="https://picsum.photos/200" alt="Immagine 2">
          <div>
            <h2>Titolo dell'elemento 2</h2>
            <p>Descrizione dell'elemento 2</p>
          </div>
        </li>
        <li>
          <img src="https://picsum.photos/200" alt="Immagine 3">
          <div>
            <h2>Titolo dell'elemento 3</h2>
            <p>Descrizione dell'elemento 3</p>
          </div>
        </li>
      </ul>
    </section>
  </body>
</html>
```
CSS:
```css
section {
  width: 80%;
  margin: 0 auto;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid gray;
  background-color: lightgray;
  overflow: hidden;
}

li img {
  width: 30%;
  height: auto;
  display: block;
}

li div {
  width: 70%;
  padding: 10px;
  text-align: left;
}

li h2 {
  margin: 0;
  font-size: 24px;
}

li p {
  margin: 0;
  margin-left: 20px;
  font-size: 16px;
}
```
Con queste regole CSS, la lista avrà  uno sfondo chiaro e un bordo grigio intorno ad ogni elemento


 **8  esercizio**              



 Crea un file HTML con una sezione contenente un pulsante e una casella di testo.                                   
 Aggiungi un file CSS separato e collegalo alla tua pagina HTML utilizzando il tag <link>.                          
 Nella sezione CSS, crea una regola che definisce lo stile di base della sezione,                                   
 impostando il padding a 20px e la larghezza a 50% della larghezza della pagina.                                    
 Crea una regola CSS che definisce lo stile del pulsante,                                                           
 impostando la larghezza al 100%, il colore di sfondo a blu e il testo di colore bianco.                            
 Crea una regola CSS che definisce lo stile della casella di testo,                                                 
 impostando la larghezza al 100%, l'altezza a 40px e un margine inferiore di 20px.                                  
 Crea una regola CSS che definisce lo stile del testo all'interno della casella di testo,                           
 impostando il testo allineato al centro                                                                            



HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>CSS</title>
  </head>
  <body>
    <section>
      <input type="text" placeholder="Inserisci il tuo nome">
      <button>Invia</button>
    </section>
  </body>
</html>
```
CSS:
```css
section {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
}

button {
  width: 100%;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="text"] {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 4px;
  text-align: center;
}
```
Con queste regole CSS, la casella di testo avrà  un bordo grigio e un margine inferiore di 20px.
Il pulsante avrà  un colore di sfondo blu e il testo di colore bianco.
La casella di testo avrà  un testo centrato e una larghezza del 100%.
Il pulsante e la casella di testo occuperanno ciascuno il 100% della larghezza della sezione.


 **9  esercizio**              



 Crea un file HTML con una sezione contenente una griglia di elementi.                                              
 Aggiungi un file CSS separato e collegalo alla tua pagina HTML utilizzando il tag <link>.                          
 Nella sezione CSS, crea una regola che definisce lo stile di base della griglia,                                   
 impostando il padding a 0 e la larghezza a 80% della larghezza della pagina.                                       
 Crea una regola CSS che definisce lo stile degli elementi della griglia,                                           
 impostando la larghezza a 30%, un margine inferiore di 20px e un bordo grigio intorno ad ogni elemento.            
 Crea una regola CSS che definisce lo stile dell'immagine all'interno di ciascun elemento della griglia,            
 impostando la larghezza al 100% e l'altezza automatica per mantenere le proporzioni originali.                     
 Crea una regola CSS che definisce lo stile del testo all'interno di ciascun elemento della griglia,                
 impostando la larghezza al 100% e il testo allineato al centro.                                                    


HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>CSS</title>
  </head>
  <body>
    <section>
      <div>
        <img src="https://picsum.photos/200" alt="Immagine 1">
        <h2>Titolo dell'elemento 1</h2>
        <p>Descrizione dell'elemento 1</p>
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="Immagine 2">
        <h2>Titolo dell'elemento 2</h2>
        <p>Descrizione dell'elemento 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="Immagine 3">
        <h2>Titolo dell'elemento 3</h2>
        <p>Descrizione dell'elemento 3</p>
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="Immagine 4">
        <h2>Titolo dell'elemento 4</h2>
        <p>Descrizione dell'elemento 4</p>
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="Immagine 5">
        <h2>Titolo dell'elemento 5</h2>
        <p>Descrizione dell'elemento 5</p>
      </div>
      <div>
        <img src="https://picsum.photos/200" alt="Immagine 6">
        <h2>Titolo dell'elemento 6</h2>
        <p>Descrizione dell'elemento 6</p>
      </div>
    </section>
  </body>
</html>
```
CSS:
```css
section {
  width: 80%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

div {
width: 30%;
margin-bottom: 20px;
border: 1px solid gray;
}

img {
width: 100%;
height: auto;
}

h2, p {
width: 100%;
text-align: center;
padding: 10px;
margin: 0;
}
```
Con queste regole CSS, la griglia di elementi avrà  un margine inferiore di 20px tra ogni elemento e un bordo grigio intorno ad ogni elemento.
L'immagine all'interno di ogni elemento della griglia avrà  una larghezza del 100% e un'altura automatica per mantenere le proporzioni originali.
Il testo all'interno di ogni elemento della griglia sarà  centrato e avrà  una larghezza del 100%.
La griglia di elementi occuperà  il 100% della larghezza della sezione e sarà  disposta su pià¹ righe a seconda del contenuto.
