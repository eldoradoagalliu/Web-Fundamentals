var displayDiv = document.querySelector("#display");
var firstNumber = 0;
var secondNumber = 0;
var op = "";
var tempOp = "";
var result = 0;

function calculate() {
  switch (op) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
  }
  console.log(result);
  displayDiv.innerText = result;
}

function press(value) {
  switch (displayDiv.innerHTML) {
    case "0":
      displayDiv.innerText = value;
      break;
    default:
      displayDiv.innerText += value;
      break;
  }

  if (tempOp != "") {
    displayDiv.innerText = value;
    tempOp = "";
  }
  secondNumber = parseFloat(displayDiv.innerText);
}

function setOP(operation) {
  firstNumber = parseFloat(displayDiv.innerText);
  op = operation;
  tempOp = operation;
}

function clr() {
  displayDiv.innerText = 0;
  firstNumber = 0;
  secondNumber = 0;
  op = "";
}
