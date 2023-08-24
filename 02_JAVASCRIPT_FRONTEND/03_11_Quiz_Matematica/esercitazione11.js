const btnControllaRisposte = document.getElementById("controlla-risposte");
const risultato = document.getElementById("risultato");

btnControllaRisposte.addEventListener("click", function() {
  const risposta1 = Number(document.getElementById("risposta1").value);
  const risposta2 = Number(document.getElementById("risposta2").value);
  const risposta3 = Number(document.getElementById("risposta3").value);
  let punteggio = 0;
  
  if (risposta1 === 4) {
    punteggio++;
  }
  if (risposta2 === 4) {
    punteggio++;
  }
  if (risposta3 === 56) {
    punteggio++;
  }
  
  risultato.textContent = `Hai ottenuto ${punteggio} su 3`;
});