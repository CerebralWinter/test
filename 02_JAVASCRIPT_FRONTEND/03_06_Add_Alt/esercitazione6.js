const input = document.getElementById("input");
const btnAggiungi = document.getElementById("aggiungi");
const lista = document.getElementById("lista");
let elementiLista = [0,1.10098988,"ciao", "javascript"]; // le liste in js possono contenere dati di tipo diverso

btnAggiungi.addEventListener("click", function() {
  const elemento = input.value.trim();
  if (elemento !== "") {
    elementiLista.push(elemento); // il metodo push consente di inserire un elemento
    aggiornaLista();
  }
  input.value = "";
});

function aggiornaLista() {
  lista.innerHTML = "";
  for (let i = 0; i < elementiLista.length; i++) {
    const elemento = document.createElement("li");
    elemento.textContent = elementiLista[i];
    lista.appendChild(elemento);
  }
}