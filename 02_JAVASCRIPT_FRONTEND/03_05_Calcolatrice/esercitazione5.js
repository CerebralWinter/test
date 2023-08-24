const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const operazione = document.getElementById("operazione");
const btnCalcola = document.getElementById("calcola");
const risultato = document.getElementById("risultato");

btnCalcola.addEventListener("click", function() {
  const numero1 = Number(input1.value);
  const numero2 = Number(input2.value);
  let risultatoOperazione;

  switch (operazione.value) {
    case "somma":
      risultatoOperazione = numero1 + numero2;
      break;
    case "sottrazione":
      risultatoOperazione = numero1 - numero2;
      break;
    case "moltiplicazione":
      risultatoOperazione = numero1 * numero2;
      break;
    case "divisione":
      risultatoOperazione = numero1 / numero2;
      break;
    default:
      risultatoOperazione = "Operazione non valida";
  }

  risultato.textContent = `Il risultato dell'operazione è ${risultatoOperazione}`;
});