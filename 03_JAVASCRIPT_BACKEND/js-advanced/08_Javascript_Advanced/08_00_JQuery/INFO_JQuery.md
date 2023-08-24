/***********************************************************************************************************************
 * Cosa è JQUERY                                                                                                       *
 ***********************************************************************************************************************/
jQuery è una libreria JavaScript molto popolare utilizzata per semplificare la
scrittura di codice JavaScript in modo più conciso e veloce.
jQuery offre una vasta gamma di funzionalità che semplificano
l'interazione con i documenti HTML e CSS, oltre a fornire funzionalità per la gestione degli eventi, l'animazione,
l'AJAX e la manipolazione del DOM (Document Object Model)
jQuery è compatibile con la maggior parte dei browser moderni ed è ampiamente utilizzato in tutto il Web,
dai siti Web semplici alle applicazioni Web più complesse.
jQuery è open source, gratuito e può essere utilizzato con licenza MIT.
Grazie alla sua vasta popolarità, ci sono molte risorse online e comunità di sviluppatori
disponibili per aiutare a utilizzare jQuery nel modo più efficace

/***********************************************************************************************************************
 * per utilizzare la libreria JQUERY in VISUAL STUDIO CODE                                                             *
 ***********************************************************************************************************************/

Apri Visual Studio Code e apri la cartella del progetto in cui desideri installare la libreria jQuery.
Apri la finestra terminale di Visual Studio Code.
Nella finestra terminale, digita il seguente comando per installare la libreria jQuery tramite npm:

npm install jquery
Questo comando scaricherà e installerà la libreria jQuery nella cartella del progetto.

Aggiungi il tag script per includere la libreria jQuery nel tuo file HTML.
Se hai installato la libreria nella cartella del progetto, puoi utilizzare il percorso relativo per includerla.
Ad esempio:

<script src="node_modules/jquery/dist/jquery.min.js"></script>

Ora sei pronto per utilizzare la libreria jQuery nel tuo progetto Visual Studio Code.

utilizza npm init per inizializzare il progetto

/***********************************************************************************************************************
 * 1 esercizio su JQUERY per principianti                                                                              *
 ***********************************************************************************************************************/

Obiettivo dell'esercizio: Fare in modo che quando l'utente clicca su un bottone, un paragrafo nascosto diventi visibile.

HTML:

<!DOCTYPE html>
<html>
<head>
	<title>jQuery Esercizio</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    	<script src="app.js"></script>
</head>
<body>
	<h1>Il mio esercizio jQuery</h1>
	<button id="mostra">Mostra paragrafo</button>
	<p id="paragrafo" style="display:none;">Questo paragrafo era nascosto</p>
</body>
</html>

jQuery:

$(document).ready(function(){
    $("#mostra").click(function(){
        $("#paragrafo").show();
    });
});

In questo esempio, abbiamo un bottone con l'id "mostra" e un paragrafo con l'id "paragrafo" che è
inizialmente nascosto grazie alla proprietà CSS "display:none;".
Nel codice jQuery, abbiamo inserito il metodo $(document).ready() che viene eseguito quando la
pagina HTML è completamente caricata.
Quando l'utente fa clic sul bottone con l'id "mostra",
viene attivata la funzione click() di jQuery che mostra il paragrafo con l'id "paragrafo" grazie al metodo show().
In questo modo, quando l'utente clicca sul bottone "Mostra paragrafo", il paragrafo precedentemente nascosto diventa visibile.

/***********************************************************************************************************************
 * 2 esercizio su JQUERY per principianti                                                                              *
 ***********************************************************************************************************************/

Obiettivo dell'esercizio: Fare in modo che quando l'utente passa il mouse sopra un'immagine,
l'immagine si ingrandisca e quando l'utente sposta il mouse via dall'immagine, l'immagine torni alle dimensioni originali.

HTML:

<!DOCTYPE html>
<html>
<head>
	<title>jQuery Esercizio 2</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    	<script src="app.js"></script>
	<style>
		#img1 {
			width: 200px;
			height: auto;
		}
	</style>
</head>
<body>
	<h1>Il mio secondo esercizio jQuery</h1>
	<img id="img1" src="https://picsum.photos/200" alt="Immagine di esempio">
</body>
</html>

jQuery:

$(document).ready(function(){
    $("#img1").mouseover(function(){
        $(this).css("width", "400px");
    });
    $("#img1").mouseout(function(){
        $(this).css("width", "200px");
    });
});

In questo esempio, abbiamo un'immagine con l'id "img1" che ha una larghezza di 200px.
Nel codice jQuery, abbiamo inserito il metodo $(document).ready() che viene eseguito quando la pagina HTML è completamente caricata.
Quando l'utente passa il mouse sopra l'immagine con l'id "img1",
viene attivata la funzione mouseover() di jQuery che cambia la larghezza dell'immagine a 400px grazie al metodo css().
Quando l'utente sposta il mouse via dall'immagine,
viene attivata la funzione mouseout() di jQuery che cambia la larghezza dell'immagine a 200px grazie al metodo css(),
facendo tornare l'immagine alle dimensioni originali
In questo modo, quando l'utente passa il mouse sopra l'immagine,
l'immagine si ingrandisce e quando l'utente sposta il mouse via dall'immagine,
l'immagine torna alle dimensioni originali

/***********************************************************************************************************************
 * 3 esercizio su JQUERY per principianti                                                                              *
 ***********************************************************************************************************************/

Obiettivo dell'esercizio: Fare in modo che quando l'utente scrive qualcosa in un input, il testo viene visualizzato in un'area di testo.

HTML:

<!DOCTYPE html>
<html>
<head>
	<title>jQuery Esercizio 3</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    	<script src="app.js"></script>
</head>
<body>
	<h1>Il mio terzo esercizio jQuery</h1>
	<input type="text" id="input1" placeholder="Scrivi qualcosa...">
	<textarea id="textarea1" rows="4" cols="50"></textarea>
</body>
</html>

jQuery:

$(document).ready(function(){
    $("#input1").keyup(function(){
        var testo = $(this).val();
        $("#textarea1").val(testo);
    });
});

In questo esempio, abbiamo un input con l'id "input1" e un'area di testo con l'id "textarea1".
Nel codice jQuery, abbiamo inserito il metodo $(document).ready() che viene eseguito quando la pagina HTML è completamente caricata.
Quando l'utente scrive qualcosa nell'input con l'id "input1",
viene attivata la funzione keyup() di jQuery che cattura il testo scritto grazie al metodo val().
Il testo viene poi visualizzato nell'area di testo con l'id "textarea1" grazie al metodo val().
In questo modo,
quando l'utente scrive qualcosa nell'input, il testo viene visualizzato nell'area di testo in tempo reale.

/***********************************************************************************************************************
 * 4 esercizio su JQUERY per principianti                                                                              *
 ***********************************************************************************************************************/

Obiettivo dell'esercizio: Fare in modo che quando l'utente clicca su un pulsante, si generi un numero casuale e venga visualizzato.

HTML:

<!DOCTYPE html>
<html>
<head>
	<title>jQuery Esercizio 4</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    	<script src="app.js"></script>
</head>
<body>
	<h1>Il mio quarto esercizio jQuery</h1>
	<button id="btn1">Genera numero casuale</button>
	<p id="numeroCasuale"></p>
</body>
</html>

jQuery:

$(document).ready(function(){
    $("#btn1").click(function(){
        var numero = Math.floor(Math.random() * 100) + 1;
        $("#numeroCasuale").text(numero);
    });
});

In questo esempio, abbiamo un bottone con l'id "btn1" e un paragrafo con l'id "numeroCasuale" che sarà utilizzato per visualizzare il numero casuale.
Nel codice jQuery, abbiamo inserito il metodo $(document).ready() che viene eseguito quando la pagina HTML è completamente caricata.
Quando l'utente fa clic sul pulsante con l'id "btn1",
viene attivata la funzione click() di jQuery che genera un numero casuale compreso tra 1 e 100 grazie alla funzione Math.random() e alla funzione Math.floor().
Il numero casuale viene poi visualizzato nel paragrafo con l'id "numeroCasuale" grazie al metodo text().
In questo modo, quando l'utente clicca sul bottone "Genera numero casuale",
viene generato un numero casuale e visualizzato nel paragrafo.

/***********************************************************************************************************************
 * 5 esercizio su JQUERY per principianti                                                                              *
 ***********************************************************************************************************************/

Obiettivo dell'esercizio: Fare in modo che quando l'utente fa clic su un pulsante, si aggiunga un nuovo elemento alla lista.

HTML:

<!DOCTYPE html>
<html>
<head>
	<title>jQuery Esercizio 5</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    	<script src="app.js"></script>
</head>
<body>
	<h1>Il mio quinto esercizio jQuery</h1>
	<ul id="lista">
		<li>Elemento 1</li>
		<li>Elemento 2</li>
		<li>Elemento 3</li>
	</ul>
	<button id="btn1">Aggiungi elemento</button>
</body>
</html>

jQuery:

$(document).ready(function(){
    $("#btn1").click(function(){
        var nuovoElemento = "<li>Nuovo elemento</li>";
        $("#lista").append(nuovoElemento);
    });
});

In questo esempio, abbiamo una lista con l'id "lista" e un bottone con l'id "btn1" che sarà utilizzato per aggiungere un nuovo elemento alla lista.

Nel codice jQuery, abbiamo inserito il metodo $(document).ready() che viene eseguito quando la pagina HTML è completamente caricata.

Quando l'utente fa clic sul pulsante con l'id "btn1", viene attivata la funzione click() di jQuery che crea una nuova stringa HTML contenente un nuovo elemento della lista grazie alla variabile nuovoElemento.

La nuova stringa HTML viene poi aggiunta alla lista con l'id "lista" grazie al metodo append().

In questo modo, quando l'utente clicca sul bottone "Aggiungi elemento", viene aggiunto un nuovo elemento alla lista.

/***********************************************************************************************************************
 * 6 esercizio su JQUERY per principianti                                                                              *
 ***********************************************************************************************************************/

Obiettivo dell'esercizio: Fare in modo che quando l'utente fa clic su un pulsante, venga cambiato il testo di un paragrafo

HTML:

<!DOCTYPE html>
<html>
<head>
	<title>jQuery Esercizio 11</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
	<h1>Il mio undicesimo esercizio jQuery in Visual Studio Code</h1>
	<p>Questo è un paragrafo di esempio.</p>
	<button id="btn1">Cambia il testo del paragrafo</button>
</body>
</html>

jQuery:

$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").text("Il testo del paragrafo è stato cambiato!");
    });
});

In questo esempio, abbiamo un pulsante con l'id "btn1" e un paragrafo.
Nel codice jQuery, abbiamo inserito il metodo $(document).ready() che viene eseguito quando la pagina HTML è completamente caricata.
Quando l'utente fa clic sul pulsante con l'id "btn1", viene attivata la funzione click() di jQuery.
All'interno della funzione, utilizziamo il metodo text() di jQuery per cambiare il testo del paragrafo.
In questo caso, il testo viene cambiato in "Il testo del paragrafo è stato cambiato!".
In questo modo, quando l'utente fa clic sul pulsante, il testo del paragrafo viene cambiato

/***********************************************************************************************************************
 * 7 esercizio su JQUERY per principianti                                                                              *
 ***********************************************************************************************************************/

Obiettivo dell'esercizio: Fare in modo che quando l'utente digita qualcosa in un campo di ricerca, vengano visualizzati solo gli elementi che corrispondono alla ricerca.

HTML:

<!DOCTYPE html>
<html>
<head>
	<title>jQuery Esercizio 7</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    	<script src="app.js"></script>
</head>
<body>
	<h1>Il mio settimo esercizio jQuery</h1>
	<input type="text" id="campoRicerca" placeholder="Cerca...">
	<ul id="lista">
		<li>Elemento 1</li>
		<li>Elemento 2</li>
		<li>Elemento 3</li>
		<li>Elemento 4</li>
		<li>Elemento 5</li>
	</ul>
</body>
</html>

jQuery:

$(document).ready(function(){
    $("#campoRicerca").on("keyup", function() {
        var valoreRicerca = $(this).val().toLowerCase();
        $("#lista li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(valoreRicerca) > -1);
        });
    });
});

In questo esempio, abbiamo un campo di ricerca con l'id "campoRicerca" e una lista con l'id "lista".
Nel codice jQuery, abbiamo inserito il metodo $(document).ready() che viene eseguito quando la pagina HTML è completamente caricata.
Quando l'utente digita qualcosa nel campo di ricerca con l'id "campoRicerca",
viene attivata la funzione on("keyup") di jQuery che cattura il testo digitato grazie al metodo val().
Viene poi creato un valore di ricerca in minuscolo a partire dal testo digitato.
La funzione filter() viene utilizzata per cercare tutti gli elementi della lista con l'id "lista" e confrontare il testo di ogni elemento con il valore di ricerca.
L'elemento viene quindi mostrato o nascosto grazie al metodo toggle() in base alla presenza o meno del valore di ricerca.
In questo modo, quando l'utente digita qualcosa nel campo di ricerca, vengono visualizzati solo gli elementi della lista che corrispondono alla ricerca.

/***********************************************************************************************************************
 * 8 esercizio su JQUERY per principianti                                                                              *
 ***********************************************************************************************************************/

Obiettivo dell'esercizio: Fare in modo che quando l'utente fa clic su un'immagine, l'immagine viene ingrandita in una finestra modale.

HTML:

<!DOCTYPE html>
<html>
<head>
	<title>jQuery Esercizio 8</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    	<script src="app.js"></script>
	<style>
		#modal {
			display: none;
			position: fixed;
			z-index: 1;
			padding-top: 100px;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			overflow: auto;
			background-color: rgba(0, 0, 0, 0.9);
		}
		#contenuto-modal {
			margin: auto;
			display: block;
			width: 80%;
			max-width: 800px;
		}
		#immagine-modal {
			display: block;
			width: 100%;
			height: auto;
		}
	</style>
</head>
<body>
	<h1>Il mio ottavo esercizio jQuery</h1>
	<img id="immagine1" src="https://picsum.photos/400" alt="Immagine di esempio">
	<div id="modal">
		<img id="immagine-modal" src="" alt="Immagine modale">
	</div>
</body>
</html>

jQuery:

$(document).ready(function(){
    $("#immagine1").click(function(){
        var urlImmagine = $(this).attr("src");
        $("#immagine-modal").attr("src", urlImmagine);
        $("#modal").fadeIn();
    });
    $("#modal").click(function(){
        $(this).fadeOut();
    });
});

In questo esempio, abbiamo un'immagine con l'id "immagine1" e una finestra modale con l'id "modal".
All'interno della finestra modale, c'è un'immagine con l'id "immagine-modal".
Nel codice jQuery, abbiamo inserito il metodo $(document).ready() che viene eseguito quando la pagina HTML è completamente caricata.
Quando l'utente fa clic sull'immagine con l'id "immagine1",
viene attivata la funzione click() di jQuery che cattura l'URL dell'immagine grazie al metodo attr()
L'URL viene poi assegnato all'attributo src dell'immagine con l'id "immagine-modal" grazie al metodo attr()
La finestra modale con l'id "modal" viene quindi visualizzata grazie al metodo fadeIn()
Quando l'utente fa clic sulla finestra modale, viene attivata la funzione click() di jQuery che nasconde la finestra modale grazie al metodo fadeOut().
In questo modo, quando l'utente fa clic sull'immagine,
l'immagine viene visualizzata in una finestra modale e quando l'utente fa clic sulla finestra modale,
la finestra modale viene nascosta

/***********************************************************************************************************************
 * 9 esercizio su JQUERY per principianti                                                                              *
 ***********************************************************************************************************************/

Obiettivo dell'esercizio: Fare in modo che quando l'utente fa clic su un bottone, vengano visualizzati tutti gli elementi con una classe specifica.

HTML:

<!DOCTYPE html>
<html>
<head>
	<title>jQuery Esercizio 9</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    	<script src="app.js"></script>
	<style>
		.verde {
			color: green;
		}
		.rosso {
			color: red;
		}
		.blu {
			color: blue;
		}
		.nascosto {
			display: none;
		}
	</style>
</head>
<body>
	<h1>Il mio nono esercizio jQuery</h1>
	<button id="btn1">Visualizza elementi verdi</button>
	<button id="btn2">Visualizza elementi rossi</button>
	<button id="btn3">Visualizza elementi blu</button>
	<ul>
		<li class="verde">Elemento verde 1</li>
		<li class="rosso">Elemento rosso 1</li>
		<li class="blu">Elemento blu 1</li>
		<li class="verde">Elemento verde 2</li>
		<li class="rosso">Elemento rosso 2</li>
		<li class="blu">Elemento blu 2</li>
		<li class="verde">Elemento verde 3</li>
		<li class="rosso">Elemento rosso 3</li>
		<li class="blu">Elemento blu 3</li>
	</ul>
</body>
</html>

jQuery:

$(document).ready(function(){
    $("#btn1").click(function(){
        $(".verde").removeClass("nascosto");
        $(".rosso, .blu").addClass("nascosto");
    });
    $("#btn2").click(function(){
        $(".rosso").removeClass("nascosto");
        $(".verde, .blu").addClass("nascosto");
    });
    $("#btn3").click(function(){
        $(".blu").removeClass("nascosto");
        $(".verde, .rosso").addClass("nascosto");
    });
});

In questo esempio, abbiamo tre pulsanti con gli id "btn1", "btn2" e "btn3" che saranno utilizzati per visualizzare gli elementi con la classe "verde", "rosso" e "blu" rispettivamente.
Nel codice jQuery, abbiamo inserito il metodo $(document).ready() che viene eseguito quando la pagina HTML è completamente caricata.
Quando l'utente fa clic su un pulsante con un determinato id, viene attivata la funzione click() di jQuery corrispondente.
Per visualizzare gli elementi con la classe specifica, viene utilizzato il metodo removeClass() per rimuovere la classe "nascosto".
Per nascondere gli elementi con altre classi, viene utilizzato il metodo addClass() per aggiungere la classe "nascosto".
In questo modo, quando l'utente fa clic su un pulsante, vengono visualizzati solo gli elementi con la classe specifica e gli elementi con altre classi vengono nascosti.

/***********************************************************************************************************************
 * 10 esercizio su JQUERY per principianti                                                                             *
 ***********************************************************************************************************************/

Obiettivo dell'esercizio: Fare in modo che quando l'utente passa il mouse sopra un elemento, l'elemento si ingrandisca.

HTML:

<!DOCTYPE html>
<html>
<head>
	<title>jQuery Esercizio 10</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    	<script src="app.js"></script>
	<style>
		.box {
			display: inline-block;
			width: 100px;
			height: 100px;
			background-color: red;
			margin: 10px;
			transition: all 0.3s ease;
		}
		.box:hover {
			transform: scale(1.2);
		}
	</style>
</head>
<body>
	<h1>Il mio decimo esercizio jQuery</h1>
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
</body>
</html>

jQuery:

$(document).ready(function(){
    // Non serve alcun codice jQuery
});

In questo esempio, abbiamo quattro box con la classe "box" che si ingrandiscono quando l'utente passa il mouse sopra.
Nel codice CSS, abbiamo utilizzato il selettore :hover per far ingrandire gli elementi quando l'utente passa il mouse sopra grazie alla proprietà transform.
In questo modo, non è necessario utilizzare alcun codice jQuery per l'effetto di ingrandimento al passaggio del mouse sopra gli elementi.
