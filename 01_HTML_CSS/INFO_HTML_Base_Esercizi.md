
**1 ESERCIZIO INTRODUZIONE AD HTML5**


 >Crea una pagina HTML5 che contenga un titolo, un sottotitolo e un paragrafo di testo.                              
 Il titolo dovrebbe essere "Benvenuti alla nostra pagina web",                                                      
 il sottotitolo dovrebbe essere "Scoprite il nostro sito" e il paragrafo di testo "Benvenuti al nostro sito web.    
 Qui potrete trovare tutte le informazioni di cui avete bisogno per conoscere la nostra azienda e i nostri prodotti"

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Benvenuti alla nostra pagina web</title>
  </head>
  <body>
    <h1>Benvenuti alla nostra pagina web</h1>
    <h2>Scoprite il nostro sito</h2>
    <p>Benvenuti al nostro sito web.
    Qui potrete trovare tutte le informazioni di cui avete bisogno per conoscere la nostra azienda e i nostri prodotti.</p>
  </body>
</html>
```

 **2  ESERCIZIO INTRODUZIONE AD HTML5**


 >Crea una pagina HTML5 che contenga un'immagine, una lista non ordinata e un link.                                  
 L'immagine dovrebbe essere "image.jpg" e dovrebbe avere un testo alternativo "Immagine di un paesaggio".           
 La lista non ordinata dovrebbe contenere almeno tre elementi, ciascuno dei quali dovrebbe essere una voce di elenco.
 Il link dovrebbe collegare a "https://www.example.com" e dovrebbe avere il testo "Visita il nostro sito web"       

```html
<!DOCTYPE html>
<html>
  <head>
    <title>La nostra pagina web</title>
  </head>
  <body>
    <img src="image.jpg" alt="Immagine di un paesaggio">
    <ul>
      <li>Voce di elenco 1</li>
      <li>Voce di elenco 2</li>
      <li>Voce di elenco 3</li>
    </ul>
    <a href="https://www.example.com">Visita il nostro sito web</a>
  </body>
</html>
```

 **3  ESERCIZIO INTRODUZIONE AD HTML5**


 >Crea una pagina HTML5 che contenga un form con due campi di testo e un pulsante di invio.                          
 Il primo campo di testo dovrebbe avere l'etichetta "Nome" e il secondo dovrebbe avere l'etichetta "Email".         
 Il pulsante di invio dovrebbe avere il testo "Invia".                                                              

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Il nostro form</title>
  </head>
  <body>
    <form>
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome"><br>

      <label for="email">Email:</label>
      <input type="text" id="email" name="email"><br>

      <input type="submit" value="Invia">
    </form>
  </body>
</html>
```

 **4  ESERCIZIO INTRODUZIONE AD HTML5**


 >Crea una pagina HTML5 che contenga una tabella con tre colonne e almeno tre righe di dati.                         
 La prima colonna dovrebbe avere l'intestazione "Nome", la seconda colonna                                          
 dovrebbe avere l'intestazione "Cognome" e la terza colonna dovrebbe avere l'intestazione "Età ".                    
 Inserisci i dati di almeno tre persone nella tabella                                                               

```html
<!DOCTYPE html>
<html>
  <head>
    <title>La nostra tabella</title>
  </head>
  <body>
    <table>
      <tr>
        <th>Nome</th>
        <th>Cognome</th>
        <th>Età </th>
      </tr>
      <tr>
        <td>Mario</td>
        <td>Rossi</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Giovanna</td>
        <td>Bianchi</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Luca</td>
        <td>Verdi</td>
        <td>40</td>
      </tr>
    </table>
  </body>
</html>
```

 **5  ESERCIZIO INTRODUZIONE AD HTML5**


 >Crea una pagina HTML5 che contenga un video e un'immagine con didascalie.                                          
 Il video dovrebbe avere la sorgente "video.mp4" e dovrebbe avere il testo alternativo "Video del nostro prodotto". 
 L'immagine dovrebbe avere la sorgente "image.jpg" testo alternativo "Immagine del nostro prodotto".                
 Inoltre, l'immagine dovrebbe avere una didascalia che recita "Il nostro prodotto"                                  

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Il nostro video e la nostra immagine</title>
  </head>
  <body>
    <video src="video.mp4" alt="Video del nostro prodotto" controls></video>
    <figure>
      <img src="image.jpg" alt="Immagine del nostro prodotto">
      <figcaption>Il nostro prodotto</figcaption>
    </figure>
  </body>
</html>
```

 **6  ESERCIZIO INTRODUZIONE AD HTML5**


 >Crea una pagina HTML5 che contenga un elenco a discesa, un pulsante di opzione e un'area di testo.                 
 L'elenco a discesa dovrebbe contenere almeno tre elementi, ciascuno dei quali dovrebbe essere una voce di elenco.  
 Il pulsante di opzione dovrebbe avere l'etichetta "Opzione" e l'area di testo dovrebbe avere l'etichetta "Commenti".

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Il nostro elenco a discesa, il pulsante di opzione e l'area di testo</title>
  </head>
  <body>
    <label for="elenco-a-discesa">Seleziona un elemento:</label>
    <select id="elenco-a-discesa" name="elenco-a-discesa">
      <option value="opzione1">Opzione 1</option>
      <option value="opzione2">Opzione 2</option>
      <option value="opzione3">Opzione 3</option>
    </select>

    <br>

    <label for="opzione">Opzione:</label>
    <input type="radio" id="opzione1" name="opzione" value="opzione1">
    <label for="opzione1">Opzione 1</label>
    <input type="radio" id="opzione2" name="opzione" value="opzione2">
    <label for="opzione2">Opzione 2</label>

    <br>

    <label for="commenti">Commenti:</label>
    <textarea id="commenti" name="commenti"></textarea>
  </body>
</html>
```


 **7  ESERCIZIO INTRODUZIONE AD HTML5**


 >Crea una pagina HTML5 che contenga un'immagine di sfondo, un titolo, un sottotitolo e un pulsante.                 
 L'immagine di sfondo dovrebbe essere "background.jpg".                                                             
 Il titolo dovrebbe essere "Benvenuti al nostro sito web".                                                          
 Il sottotitolo dovrebbe essere "Scoprite i nostri prodotti".                                                       
 Il pulsante dovrebbe avere il testo "Scopri di pià¹".                                                               

```html
<!DOCTYPE html>
<html>
  <head>
    <title>La nostra pagina iniziale</title>
    <style>
      body {
        background-image: url('background.jpg');
      }
    </style>
  </head>
  <body>
    <h1>Benvenuti al nostro sito web</h1>
    <h2>Scoprite i nostri prodotti</h2>
    <button>Scopri di pià¹</button>
  </body>
</html>
```


 **8  ESERCIZIO INTRODUZIONE AD HTML5**


  >Crea una pagina HTML5 che contenga un link a "https://www.google.com" con il testo "Visita Google" e un link      
 interno alla pagina con il testo "Torna all'inizio della pagina".                                                  
 Il link interno dovrebbe collegare alla parte superiore della pagina.                                              
                                                                                                                    

```html
<!DOCTYPE html>
<html>
  <head>
    <title>La nostra pagina con i link</title>
  </head>
  <body>
    <a href="https://www.google.com">Visita Google</a>
    <a href="#top">Torna all'inizio della pagina</a>

    <!-- Il resto del contenuto della pagina -->

    <a name="top"></a>
  </body>
</html>
```

 **9  ESERCIZIO INTRODUZIONE AD HTML5**


 >Crea una pagina HTML5 che contenga un'immagine con una mappa di immagine.                                          
 L'immagine dovrebbe essere "mappa.jpg" e dovrebbe avere il testo alternativo "Mappa dell'edificio".                
 La mappa di immagine dovrebbe contenere almeno tre aree cliccabili, ciascuna una sezione dell'edificio.            
 Quando l'utente fa clic su un'area, dovrebbe essere reindirizzato a una pagina                                     
 diversa che contiene maggiori informazioni su quella sezione.                                                      

```html
<!DOCTYPE html>
<html>
  <head>
    <title>La nostra mappa di immagine</title>
  </head>
  <body>
    <img src="mappa.jpg" alt="Mappa dell'edificio" usemap="#map">

    <map name="map">
      <area shape="rect" coords="0,0,100,100" href="sezione1.html" alt="Sezione 1">
      <area shape="rect" coords="100,0,200,100" href="sezione2.html" alt="Sezione 2">
      <area shape="rect" coords="200,0,300,100" href="sezione3.html" alt="Sezione 3">
    </map>
  </body>
</html>
```


 **10  ESERCIZIO INTRODUZIONE AD HTML5**


 >Crea una pagina HTML5 che contenga una tabella con due colonne e almeno tre righe di dati.                         
 La prima colonna dovrebbe contenere il nome di una persona e la seconda colonna dovrebbe contenere un pulsante.    
 Il testo del pulsante dovrebbe essere il nome della persona e quando l'utente fa clic sul pulsante,                
 dovrebbe essere visualizzato un messaggio di alert con il nome della persona.                                      

```html
<!DOCTYPE html>
<html>
  <head>
    <title>La nostra tabella con i pulsanti</title>
  </head>
  <body>
    <table>
      <tr>
        <td>Mario Rossi</td>
        <td><button onclick="alert('Hai fatto clic su Mario Rossi')">Mario Rossi</button></td>
      </tr>
      <tr>
        <td>Giovanna Bianchi</td>
        <td><button onclick="alert('Hai fatto clic su Giovanna Bianchi')">Giovanna Bianchi</button></td>
      </tr>
      <tr>
        <td>Luca Verdi</td>
        <td><button onclick="alert('Hai fatto clic su Luca Verdi')">Luca Verdi</button></td>
      </tr>
    </table>
  </body>
</html>
```