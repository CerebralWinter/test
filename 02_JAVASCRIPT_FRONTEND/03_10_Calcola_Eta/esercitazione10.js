const btnCalcolaEta = document.getElementById("calcola-eta");
const risultato = document.getElementById("risultato");

btnCalcolaEta.addEventListener("click", function() {
  const dataNascita = new Date(document.getElementById("data-nascita").value);
  const oggi = new Date();
  const etaInMillisecondi = oggi.getTime() - dataNascita.getTime();
  const anni = Math.floor(etaInMillisecondi / (1000 * 60 * 60 * 24 * 365));
  risultato.textContent = `Hai ${anni} anni`;
});