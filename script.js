let newInput = 0;
let lastInput = 0;
let currentResult = 0;
let operator = "+";
let liste = "";

function numberInput(number) {
  newInput = newInput * 10 + number;
  document.getElementById("button-input").innerHTML = newInput;
}

function add() {
  operation();
  operator = "+";
  document.getElementById("calculation").innerHTML = currentResult + operator;
}

function subtract() {
  operation();
  operator = "-";
  document.getElementById("calculation").innerHTML = currentResult + operator;
}

function multiply() {
  operation();
  operator = "*";
  document.getElementById("calculation").innerHTML = currentResult + operator;
}

function divide() {
  operation();
  operator = "/";
  document.getElementById("calculation").innerHTML = currentResult + operator;
}

function operation() {
  if (operator === "+") {
    currentResult = lastInput + newInput;
  } else if (operator === "-") {
    currentResult = lastInput - newInput;
  } else if (operator === "*") {
    currentResult = lastInput * newInput;
  } else if (operator === "/") {
    currentResult = lastInput / newInput;
  }
  document.getElementById("button-input").innerHTML = 0;

  let listeString =
    "<p>" + lastInput + operator + newInput + "=" + currentResult + "</p>";
  liste = listeString + liste;
  lastInput = currentResult;
  updateResult();
  newInput = 0;
}

function equals() {
  let listeString =
    "<p>" + lastInput + operator + newInput + "=" + currentResult + "</p>";
  liste = listeString + liste;
  updateResult();
  newInput = 0;
  document.getElementById("button-input").innerHTML = 0;
  lastInput = 0;
  document.getElementById("calculation").innerHTML = 0;
  operator = "+";
}

function clearAll() {
  newInput = 0;
  document.getElementById("button-input").innerHTML = 0;
  lastInput = 0;
  document.getElementById("calculation").innerHTML = 0;
  liste = 0;
  document.getElementById("results").innerHTML = 0;
}

function updateResult() {
  document.getElementById("results").innerHTML = liste;
}
