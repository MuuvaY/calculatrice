for (let boutons = 0; boutons < 10; boutons++) {
  // console.log(boutons);
  const btndiv = document.getElementById("btndiv");
  const bouton = document.createElement("button");
  bouton.textContent = boutons;
  bouton.className = "bouton";
  // bouton.onclick = calculate(event);

  btndiv.append(bouton);
}
const operatorAll = document.getElementById("btnoperator");

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

operatorAll.append(addition, soustraction, multiplication, division);

const calculatrice = document.querySelectorAll(".bouton");
calculatrice.forEach((element) => {
  element.addEventListener("click", calculate);
  console.log(element);
});

const operatorclick = document.getElementById("btnoperator");

let num1 = 0;
let num2 = 0;
let operator = "";
let res;

const displayValue = document.getElementById("displayValue");

operatorclick.addEventListener("click", operatorclicky);

function operatorclicky(evt) {
  operator = evt.target.textContent;
  displayValue.append(operator);
}

function calculate(event) {
  let displayValue = document.getElementById("displayValue");

  if (operator === "") {
    num1 = event.target.textContent;
    displayValue.append(num1);
  }
  if (operator !== "") {
    num2 = event.target.textContent;
    displayValue.append(num2);
  }

  console.log(displayValue);
  console.log("num1 :", num1, "operator2 :", operator, "num2:", num2);
  if (operator === "+") {
    res = parseFloat(num1) + +parseFloat(num2);
  } else if (operator === "-") {
    res = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "x") {
    res = parseFloat(num1) * parseFloat(num2);
  } else if (operator === "/") {
    res = parseFloat(num1) / parseFloat(num2);
  }
}

const btnresultat = document.getElementById("btnresultat");
const btnres = document.createElement("button");
btnres.textContent = "=";
btnres.className = "btnres";

btnresultat.appendChild(btnres);

btnres.addEventListener("click", resultat);

function resultat() {
  console.log(res);
  displayValue.append(res);
  // document.getElementById(".displayValue").innerHTML = res;
  displayValue.innerHTML = res;
}

const clearbtn = document.getElementById("btnclear");
const allClear = document.createElement("button");
allClear.textContent = "AC";
allClear.className = "clear";

clearbtn.append(allClear);

allClear.addEventListener("click", test);

function test() {
  displayValue.innerHTML = "";
}
