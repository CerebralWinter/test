const form = document.querySelector('form'); // selezioniamo il tag form all'interno del dom
const result = document.getElementById('result'); //  cerchiamo le informazioni nel tag con id "result"

form.addEventListener('submit', (event) =>
{
    event.preventDefault(); // dovrebbe evitare che il browser metta un valore di default invisibile nel campo in modo che venga inviato soltanto se quel campo � valorizzato

    const name = document.getElementById('name').value; // prende l'elemento con id nome dal dom
    const email = document.getElementById('email').value; // prende l'elemento con id email dal dom

    const xhr = new XMLHttpRequest(); // isanzio unoggetto "xhr" dalla classe XMLHttpRequest che verifica lo stato della richiesta http e gestisce il caricamento delle infomazioni nella pagina


    xhr.onreadystatechange = () =>
    {
        if (xhr.readyState === XMLHttpRequest.DONE) // ricarica la pagina dinamicamente senza interruzione  del flusso dell'utente
        {
            if (xhr.status === 200)
            {
                result.innerHTML = xhr.responseText;
            }
            else
            {
                console.error('Errore nella richiesta AJAX!');
            }
        }
    };

    xhr.open('POST', '/submit'); // viene inviato il modulo via post
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`name=${name}&email=${email}`);
});

/*
I form hanno due metodi, il GET ed il POST.
La differenza tra i due � che il primo passa i dati come parametri all'interno
dell'indirizzo della pagina che li ricever�,
mentre il secondo (per certi versi pi� sicuro,
specie in presenza di dati delicati come password o codici segreti)
mantiene intatto l'indirizzo della pagina di ricezione
*/