let newInput = 0;
let lastInput = 0;
let operator = "+";

function numberInput(number) {
  newInput = newInput * 10 + number;
  document.getElementById("button-input").innerHTML = newInput;
}

function add() {
  operation();
  operator = "+";
  document.getElementById("calculation").innerHTML = lastInput + operator;
}

function subtract() {
  operation();
  operator = "-";
  document.getElementById("calculation").innerHTML = lastInput + operator;
}

function multiply() {
  operation();
  operator = "*";
  document.getElementById("calculation").innerHTML = lastInput + operator;
}

function divide() {
  operation();
  operator = "/";
  document.getElementById("calculation").innerHTML = lastInput + operator;
}

function operation() {
  if (operator === "+") {
    lastInput = lastInput + newInput;
  } else if (operator === "-") {
    lastInput = lastInput - newInput;
  } else if (operator === "*") {
    lastInput = lastInput * newInput;
  } else if (operator === "/") {
    lastInput = lastInput / newInput;
  }

  newInput = 0;
  document.getElementById("button-input").innerHTML = 0;
}

function equals() {}

function clearAll() {
  newInput = 0;
  document.getElementById("button-input").innerHTML = 0;
  lastInput = 0;
  document.getElementById("calculation").innerHTML = 0;
  document.getElementById("results").innerHTML = 0;
}
