/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function displayText() {
  //write your code here

  let who = [
    "El chef",
    "El cocinero",
    "El periodista",
    "La doctora",
    "La enfermera",
    "El abogado",
    "El detective"
  ];
  let action = [
    "mató",
    "asesinó",
    "apuñaló",
    "cortó",
    "desmembró",
    "descuartizó"
  ];
  let what = [
    "la navaja",
    "la pala de jardín",
    "el candelabro",
    "el picahielos",
    "el martillo",
    "el detornillador"
  ];
  let when = [
    "durante la cena.",
    "en la cocina.",
    "en el salón.",
    "durante el brindis.",
    "en el jardín."
  ];

  let selectedWho = who[Math.floor(Math.random() * who.length)];
  let selectedWhen = when[Math.floor(Math.random() * when.length)];
  let selectedAction = action[Math.floor(Math.random() * action.length)];
  let selectedWhat = what[Math.floor(Math.random() * what.length)];

  document.getElementById("excuse").innerHTML =
    selectedWho +
    " " +
    selectedAction +
    " " +
    "a la víctima con" +
    " " +
    selectedWhat +
    " " +
    selectedWhen;

  console.log(
    selectedWho +
      " " +
      selectedAction +
      " " +
      "a la víctima con" +
      " " +
      selectedWhat +
      " " +
      selectedWhen
  );
};
