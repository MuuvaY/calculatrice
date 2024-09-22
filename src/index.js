for (let boutons = 1; boutons < 10; boutons++) {
  // console.log(boutons);
  const btndiv = document.getElementById("btndiv");
  const bouton = document.createElement("button");
  bouton.textContent = boutons;
  bouton.className = "bouton";
  // bouton.onclick = calculate(event);

  btndiv.append(bouton);
}
const operator = document.getElementById("btnoperator");

const addition = document.createElement("button");
const soustraction = document.createElement("button");
const multiplication = document.createElement("button");
const division = document.createElement("button");

addition.textContent = "+";
addition.className = "operator";

soustraction.textContent = "-";
soustraction.className = "operator";

multiplication.textContent = "x";
multiplication.className = "operator";

division.textContent = "/";
division.className = "operator";

operator.append(addition, soustraction, multiplication, division);

const text = document.getElementById("calculatrice");

text.addEventListener("click", calculate);

function calculate(event) {
  const btnclicker = event.target.textContent;

  console.log(btnclicker);
}
