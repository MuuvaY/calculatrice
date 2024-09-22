for (let boutons = 1; boutons < 10; boutons++) {
  // console.log(boutons);
  const btndiv = document.getElementById("btndiv");
  const bouton = document.createElement("button");
  bouton.textContent = boutons;
  bouton.className = "bouton";
  // bouton.onclick = calculate(event);

  btndiv.append(bouton);
}

const text = document.getElementById("btndiv");

text.addEventListener("click", calculate);

function calculate(event) {
  const btnclicker = event.target.textContent;

  console.log(btnclicker);
}
