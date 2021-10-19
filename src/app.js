/* eslint-disable */
import "bootstrap";
import "./style.css";
//VARIABLES
const BODY = document.querySelector("body");
const SUIT = ["♦", "♥", "♠", "♣"];
const NUMBERS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const RANDOMSUIT = generateRandom(SUIT); //(POSITIONS/(INDEX)
const RANDOMNUMBERS = generateRandom(NUMBERS);

window.onload = function() {
  createCard();
};
//FUNCTIONS
function generateRandom(array) {
  return Math.floor(Math.random() * array.length);
}

function createCard() {
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);

  let iconHeart = document.createElement("div");
  iconHeart.classList.add("iconHeart");
  let iconText = document.createTextNode(SUIT[RANDOMSUIT]); // (It's avar no "".)
  iconHeart.append(iconText);
  card.appendChild(iconHeart);

  let numberElement = document.createElement("div");
  numberElement.classList.add("numberElement");
  let numberText = document.createTextNode(NUMBERS[RANDOMNUMBERS]);
  numberElement.append(numberText);
  card.append(numberElement);

  let inverseElement = document.createElement("div");
  inverseElement.classList.add("inverseElement");
  let inverseText = document.createTextNode(SUIT[RANDOMSUIT]);
  inverseElement.append(inverseText);
  card.append(inverseElement);
  //SUITS COLOR CONDITIONAL
  if (SUIT[RANDOMSUIT] == "♥" || SUIT[RANDOMSUIT] == "♦") {
    iconHeart.classList.add("red");
    inverseElement.classList.add("red");
    numberElement.classList.add("red");
  } else {
    iconHeart.classList.add("black");
    inverseElement.classList.add("black");
    numberElement.classList.add("black");
  }
}
