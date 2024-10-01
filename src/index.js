const btndiv = document.getElementById("btndiv");
// --- 1. Initialisation des boutons numériques (de 0 à 9) ---
for (let boutons = 0; boutons < 10; boutons++) {
  const bouton = document.createElement("button");
  bouton.textContent = boutons;
  bouton.className = "bouton";
  btndiv.append(bouton);
}

const virgule = document.createElement("button");

virgule.textContent = ".";
virgule.className = "bouton";

btndiv.append(virgule);
// --- 2. Initialisation des boutons opérateurs (+, -, x, /) ---
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

// --- 3. Gestionnaires d'événements pour les boutons numériques ---
const calculatrice = document.querySelectorAll(".bouton");
calculatrice.forEach((element) => {
  element.addEventListener("click", calculate);
});

// --- 4. Gestionnaires d'événements pour les opérateurs ---
const operatorclick = document.getElementById("btnoperator");
operatorclick.addEventListener("click", operatorclicky);

// --- 5. Variables globales pour stocker les valeurs ---
let num1 = 0;
let num2 = 0;
let operator = "";
let res;

// --- 6. Gestion de l'affichage ---
const displayValue = document.getElementById("displayValue");

// --- 7. Fonction : gestion du clic opérateur ---
function operatorclicky(evt) {
  operator = evt.target.textContent;
  displayValue.append(operator);
  currentNumber = "";
}
let currentNumber = "";

// --- 8. Fonction : calcul lors du clic sur un chiffre ---
function calculate(event) {
  currentNumber += event.target.textContent;
  console.log(currentNumber);
  let displayValue = document.getElementById("displayValue");
  displayValue.innerHTML = currentNumber;

  if (operator === "") {
    num1 = currentNumber;
    // num1 = event.target.textContent;
    // displayValue.append(num1);
    // currentNumber = "";
  } else {
    num2 = currentNumber;
    // num2 = event.target.textContent;
    // displayValue.append(num2);
    // currentNumber = "";
  }

  // console.log("num1 :", num1, "operator :", operator, "num2:", num2);

  if (operator === "+") {
    res = parseFloat(num1) + parseFloat(num2);
  } else if (operator === "-") {
    res = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "x") {
    res = parseFloat(num1) * parseFloat(num2);
  } else if (operator === "/") {
    res = parseFloat(num1) / parseFloat(num2);
  }
}

// --- 9. Initialisation du bouton résultat "=" ---
const btnresultat = document.getElementById("btnresultat");
const btnres = document.createElement("button");
btnres.textContent = "=";
btnres.className = "btnres";
btnresultat.appendChild(btnres);

// --- 10. Gestionnaire d'événements pour afficher le résultat ---
btnres.addEventListener("click", resultat);

function resultat() {
  console.log(res);
  // displayValue.append(res);
  displayValue.innerHTML = res;
}

// --- 11. Initialisation du bouton "AC" (Clear) ---
const clearbtn = document.getElementById("btnclear");
const allClear = document.createElement("button");
allClear.textContent = "AC";
allClear.className = "clear";
clearbtn.append(allClear);

// --- 12. Fonction pour réinitialiser la calculatrice ---
allClear.addEventListener("click", ac);

function ac() {
  displayValue.innerHTML = "";
  num1 = 0;
  num2 = 0;
  operator = "";
  res = 0;
  currentNumber = "";

  console.log("Calculatrice réinitialisée", num1, num2);
}
