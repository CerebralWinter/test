const testo = document.getElementById("testo");
const colore = document.getElementById("colore");
const btnCambiaColore = document.getElementById("cambia-colore");

btnCambiaColore.addEventListener("click", function() {
  if (colore.value === "rosso") {
    testo.classList.remove("verde");
    testo.classList.add("rosso");
  } else if (colore.value === "verde") {
    testo.classList.remove("rosso");
    testo.classList.add("verde");
  }
});