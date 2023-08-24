# Formattazione e stile

Prerequisiti

HTML5 Base
 
HTML5 è il linguaggio di markup che definisce la struttura e i contenuti della pagina web,
ma per la formattazione e lo stile della pagina è necessario utilizzare CSS (Cascading Style Sheets).
CSS è un linguaggio di stile separato da HTML, che consente di definire la presentazione visuale della pagina web,
come il colore, la dimensione e il posizionamento dei diversi elementi della pagina.

Ecco alcuni concetti fondamentali di CSS che ti saranno utili nella formattazione e nello stile della tua pagina web:

**Selettori**
I selettori sono utilizzati per selezionare gli elementi HTML a cui applicare uno stile.
Ci sono diversi tipi di selettori, come selettori di classe, di ID e di tipo.

**Proprietà  CSS**
Le proprietà  CSS vengono utilizzate per definire le regole di stile da applicare agli elementi selezionati.
Ad esempio, la proprietà  "color" viene utilizzata per definire il colore del testo.

**Valori CSS**
I valori CSS definiscono il valore specifico di una proprietà  CSS, ad esempio, "red" per il colore rosso.
**Regole CSS**
Le regole CSS combinano il selettore, la proprietà  e il valore CSS per definire lo stile degli elementi selezionati.
**Box model**
Il box model è il modello utilizzato per definire la posizione, le dimensioni e il padding dei diversi elementi della pagina.
Ogni elemento della pagina è considerato una "scatola" (box), compresi i margini, il bordo e il padding.

**Media queries**
Le media queries sono utilizzate per definire gli stili in base alle diverse dimensioni dello schermo del dispositivo.
Cià² consente di creare siti web reattivi che si adattano automaticamente alla dimensione dello schermo.

**CSS preprocessors**
I preprocessori CSS, come Sass o Less, sono utilizzati per semplificare il processo di
scrittura di CSS, utilizzando funzionalità  avanzate come variabili, mixin e funzioni.
In sintesi, la formattazione e lo stile della pagina web sono definiti tramite CSS.
Con una buona comprensione dei concetti fondamentali di CSS, puoi creare una pagina web ben strutturata e visivamente accattivante


 **Sintassi di base di CSS**   


Il codice CSS è composto da una serie di regole che vengono applicate a elementi HTML.
Ogni regola è costituita da un selettore e una serie di proprietà  e valori, come mostrato di seguito
```css
selettore {
proprietà : valore;
proprietà : valore;
}
```

 **i selettori**               


Il selettore indica quale elemento HTML verrà  modificato e le proprietà  definiscono l'aspetto dell'elemento,
come il colore, la dimensione del testo e il layout.
I valori delle proprietà  specificano il valore numerico o il colore per la proprietà .

I selettori possono essere basati sul tipo di elemento, sulla classe, sull'id o su altri attributi HTML.
Ecco alcuni esempi di selettori CSS:

Selettore di tipo:
seleziona tutti gli elementi HTML di un determinato tipo, ad esempio "p" per i paragrafi o "h1" per i titoli di primo livello

Selettore di classe:
seleziona tutti gli elementi HTML che hanno un determinato nome di classe, ad esempio ".classe"

Selettore di id:
seleziona un elemento HTML con un determinato id, ad esempio "#id"


 **Proprietà  CSS**             


Ci sono molte proprietà  CSS disponibili, ma alcune delle pià¹ comuni includono:

**Colore**
specifica il colore del testo o dello sfondo, ad esempio "color" o "background-color"

**Dimensione del testo**
specifica la dimensione del testo, ad esempio "font-size"

**Font**
specifica il tipo di carattere utilizzato, ad esempio "font-family"

**Margini e padding**
specifica lo spazio intorno o all'interno dell'elemento, ad esempio "margin" o "padding"

**Posizione**
specifica la posizione dell'elemento, ad esempio "position" e "top", "bottom", "left", "right"


 Stili specifici per gli elementi HTML divisi per tipo                                                              


**Stili per gli elementi di testo**
```css
p {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: #000;
}

a {
  color: #007bff;
  text-decoration: none;
}

strong {
  font-weight: bold;
}

em {
  font-style: italic;
}
```

**Stili per i pulsanti**
```css
button, input[type="submit"], input[type="reset"] {
  display: inline-block;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

button:hover, input[type="submit"]:hover, input[type="reset"]:hover {
  background-color: #0069d9;
}
```
**Stili per le tabelle**
```css
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}
```
**Stili per i modali**
```css
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  cursor: pointer;
}
```
**Cosa sono i modali**

I modali sono finestre o sezioni che appaiono sopra la pagina web e richiedono l'interazione dell'utente per poter essere chiuse.
Sono spesso utilizzati per richiedere all'utente di eseguire un'azione, come confermare la cancellazione di un elemento,
inserire dati in un form, visualizzare informazioni aggiuntive o avviare una finestra di login.
I modali sono solitamente realizzati con l'uso di HTML, CSS e JavaScript.
L'uso dei modali puà² migliorare l'esperienza utente fornendo un'interazione pià¹ chiara e diretta con l'utente,
consentendo di concentrarsi su un'azione specifica o su un compito specifico.
Tuttavia, è importante utilizzarli con parsimonia,
poichà© l'utilizzo eccessivo di modali puà² interrompere la navigazione dell'utente e causare confusione.

**Stili per il pulsante di chiusura**
```css
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
```
**Stili per il pulsante di azione principale**
```css
.action-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.action-button:hover {
  background-color: #0069d9;
}
```
**Stili per il testo all'interno della finestra modale**
```css
.modal-content h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.modal-content p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
}
```
**Stili per elementi dei moduli**

**Stili per gli input di testo**
```css
input[type="text"], input[type="email"], input[type="password"] {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus {
  outline: none;
  border-color: #007bff;
}
```
**Stili per i menu a discesa**
```css
select {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: #fff;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='5'%3E%3Cpath fill='%23007bff' d='M0 0l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
}

select:focus {
  outline: none;
  border-color: #007bff;
}
```
**Stili per le caselle di controllo e le radio**
```css
input[type="checkbox"], input[type="radio"] {
  display: inline-block;
  margin-right: 10px;
}

label {
  display: inline-block;
  margin-bottom: 10px;
}

input[type="checkbox"]:checked + label::before, input[type="radio"]:checked + label::before {
  content: '\2714';
  display: inline-block;
  font-size: 16px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

input[type="checkbox"]:checked + label::before {
  background-color: #007bff;
  color: #fff;
}

input[type="radio"]:checked + label::before {
  background-color: #fff;
  color: #007bff;
}
```
**Stili per il pulsante di invio**
```css
input[type="submit"] {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #0069d9;
}
```