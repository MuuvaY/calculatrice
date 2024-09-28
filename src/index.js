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

const operatorclick = document.getElementById("btnoperator");

// const calculatrice = document.getElementById("btndiv");
const calculatrice = document.querySelectorAll(".bouton");

calculatrice.forEach((element) => {
  element.addEventListener("click", calculate);
  console.log(element);
});

let num1 = 0;
let num2 = 0;
let operator2 = "";

// num1 = parseFloat(num1.value);

// num2 = parseFloat(num2.value);

// console.log("Nombre 1 :", num1, "Nombre 2 :", num2);
operatorclick.addEventListener("click", operatorclicky);

function operatorclicky(evt) {
  operator2 = evt.target.textContent;
}

function calculate(event) {
  if (operator2 === "" || null) {
    num1 = event.target.textContent;
  }
  if (operator2 != null) {
    num2 = event.target.textContent;
  }

  console.log("num1 :", num1, "operator2 :", operator2, "num2:", num2);
}
