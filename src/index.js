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

const calculatrice = document.getElementById("calculatrice");

calculatrice.addEventListener("click", calculate);

function calculate(event) {
  let btnclicker = event.target.textContent;
  let btnclicker2 = event.target.textContent;

  // console.log(btnclicker);

  const resultat = btnclicker + btnclicker;

  const test = `${btnclicker} ${soustraction} ${btnclicker2}`;

  console.log(test);

  // console.log(resultat);

  // console.log(btnclicker);
}
