

 # INTRODUZIONE AD HTML5

 
HTML5 è l'ultima versione del linguaggio di markup per la creazione di pagine web.
àˆ stato introdotto nel 2014 per fornire agli sviluppatori web una serie di
nuove funzionalità  e miglioramenti rispetto alle versioni precedenti di HTML.

Una delle caratteristiche pià¹ importanti di HTML5 è la sua capacità  di creare siti web moderni e reattivi,
che possono funzionare su una vasta gamma di dispositivi e piattaforme, compresi smartphone, tablet e desktop.

HTML5 include una serie di nuovi elementi semantici, come "header", "footer", "nav", "article" e "section",
che rendono pià¹ facile la strutturazione del contenuto della pagina.
Inoltre, ci sono anche nuovi elementi per la gestione di file multimediali, come "audio" e "video",
che consentono di incorporare facilmente file audio e video nella pagina.

Un'altra funzionalità  importante di HTML5 è la sua capacità  di supportare la geolocalizzazione e la memorizzazione locale,
che consente ai siti web di raccogliere informazioni sulla posizione dell'utente e di salvare dati in
modo persistente sul dispositivo dell'utente.

HTML5 è un linguaggio di markup potente e flessibile che consente agli sviluppatori web
di creare siti web moderni e reattivi con una maggiore facilità  e funzionalità  rispetto alle versioni precedenti di HTML.


 alcuni concetti di base:  


**Struttura di un documento HTML**

Il documento HTML è costituito da due parti principali:
l'intestazione (head) e il corpo (body).

L'intestazione contiene informazioni sulla pagina web, come il titolo e i collegamenti ai
file CSS e JavaScript, mentre il corpo contiene il contenuto della pagina.

**Tag HTML**

I tag HTML sono usati per indicare il tipo di contenuto che deve essere visualizzato sulla pagina web.
Ogni tag HTML è delimitato dai simboli "<" e ">". Ad esempio, il tag < p > viene utilizzato per definire un
paragrafo di testo, mentre il tag < img > viene utilizzato per inserire un'immagine.

**Attributi HTML**

Gli attributi HTML sono utilizzati per fornire informazioni aggiuntive sui tag HTML.
Gli attributi vengono definiti all'interno del tag, utilizzando il formato nome="valore".
```
Ad esempio, l'attributo src viene utilizzato per definire il percorso dell'immagine all'interno del tag <img>, come <img src="immagine.jpg">
```

**Collegamenti HTML**

I collegamenti HTML vengono utilizzati per collegare le pagine web.
Un collegamento puà² essere creato utilizzando il tag < a >, e viene definito l'URL della pagina di destinazione utilizzando l'attributo href.
Ad esempio, < a href="https://www.google.com" >Google< /a > crea un collegamento al sito web di Google



 **I tag pià¹ utilizzati**      

```
<html>
Questo è il tag principale di un documento HTML e indica l'inizio e la fine del documento.
<head>
Questo tag contiene le informazioni dell'intestazione della pagina, come il titolo, i collegamenti CSS.
<title>
Questo tag viene utilizzato per definire il titolo della pagina, che appare nella scheda del browser.
<body>
Questo tag contiene tutto il contenuto visibile della pagina web.
<h1> - <h6>
Questi tag vengono utilizzati per creare i titoli della pagina. <h1> è il pià¹ grande e <h6> è il pià¹ piccolo.
<p>
Questo tag viene utilizzato per definire un paragrafo di testo.
<a>
Questo tag viene utilizzato per creare collegamenti a altre pagine web o file.
<img>
Questo tag viene utilizzato per inserire un'immagine nella pagina.
<ul> e <li>
Questi tag vengono utilizzati per creare una lista non ordinata.
<ol> e <li>
Questi tag vengono utilizzati per creare una lista ordinata.
<div>
Questo tag viene utilizzato per creare una sezione della pagina web e puà² essere utilizzato per raggruppare elementi insieme.
<span>
Questo tag viene utilizzato per definire una porzione di testo all'interno di un elemento, come un titolo o una sezione di testo
```
**Tag per link**
Il tag principale per creare un link in HTML è il tag < a >.
Per creare un link, il tag < a > deve contenere un attributo href che indica l'URL della pagina di destinazione.
Ecco un esempio di codice per creare un link ad una pagina web:
```
<a href="https://www.example.com">Testo del link</a>
```
Il tag puà² anche avere altri attributi come target, title e rel.
Ad esempio, l'attributo target puà² essere utilizzato per specificare se il link deve essere aperto in una nuova finestra del browser.
Ecco un esempio di codice con l'attributo target:
```
<a href="https://www.example.com" target="_blank">Testo del link</a>
```
**Tag per pulsanti** 
Per creare pulsanti in HTML, si possono utilizzare diversi tag, ma il tag principale è il tag < button >.
Ecco un esempio di codice per creare un pulsante:
```
<button>Testo del pulsante</button>
```
Il tag < button > puà² anche avere l'attributo type, che definisce il tipo di azione che il pulsante deve eseguire.
I valori pià¹ comuni per l'attributo type sono "submit", "reset" e "button".
Ad esempio, ecco come definire un pulsante di invio di un form
```
<button type="submit">Invia</button>
```
Ci sono anche altri tag che possono essere utilizzati per creare pulsanti in HTML, come il tag < input > con l'attributo type="button" o type="submit".
Ad esempio, ecco come definire un pulsante di invio di un form con il tag < input >
```
<input type="submit" value="Invia">
```
**Tag per immagini**
Il tag principale per l'inserimento di immagini in HTML è il tag <img>. Ecco un esempio di codice per inserire un'immagine nella pagina:
```
<img src="percorso/immagine.jpg" alt="Descrizione dell'immagine">
```
In questo esempio, l'attributo src indica il percorso dell'immagine che si vuole inserire nella pagina web, mentre l'attributo alt definisce una descrizione dell'immagine.
L'attributo alt è importante perchà© fornisce una descrizione testuale dell'immagine per gli utenti che utilizzano tecnologie assistive come i lettori per non vedenti.
Inoltre, è possibile utilizzare altri attributi per personalizzare l'aspetto dell'immagine,
come l'attributo width e height per definire le dimensioni dell'immagine.
Ecco un esempio di codice con l'attributo width e height:
```
<img src="percorso/immagine.jpg" alt="Descrizione dell'immagine" width="500" height="300">
Infine, è possibile anche creare immagini cliccabili utilizzando il tag <a> intorno al tag <img>.
Ecco un esempio di codice per creare un link cliccabile intorno all'immagine:

<a href="https://www.example.com">
  <img src="percorso/immagine.jpg" alt="Descrizione dell'immagine">
</a>
```

 # PER VISUALIZZARE LE PAGINE HTML IN VISUAL STUDIO CODE, PUOI SEGUIRE QUESTI PASSAGGI


 **LIVE SERVER**


Apri il tuo progetto HTML in Visual Studio Code.
Nella finestra principale di Visual Studio Code, seleziona il file HTML che vuoi visualizzare.
Fai clic con il pulsante destro del mouse sul file selezionato e seleziona "Apri con Live Server" dal menu a tendina.
Verrà  aperto il tuo browser predefinito e visualizzata la pagina HTML nel server locale di Live Server.
Se si apportano modifiche alla pagina HTML, queste verranno automaticamente aggiornate nel browser senza dover ricaricare manualmente la pagina.
In alternativa, è possibile aprire il file HTML nel browser utilizzando il comando "Apri con Live Server"nella barra degli strumenti di Visual Studio Code,
oppure premendo la combinazione di tasti "CTRL + SHIFT + P" per aprire la finestra dei comandi e digitando "Apri con Live Server".


