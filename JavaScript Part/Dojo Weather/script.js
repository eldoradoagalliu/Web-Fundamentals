console.log("The page is being loaded...");

function removeCookie(element) {
  element.remove();
}

function changeValue(element) {
  for (var i = 0; i < 8; i++) {
    var tempSelector = document.querySelector("#temp" + i);
    var tempValue = parseInt(tempSelector.innerText);

    if (element.value == "°F") {
      tempSelector.innerText = farenheitValue(tempValue);
    } else {
      tempSelector.innerText = celsiusValue(tempValue);
    }
  }
}

function farenheitValue(element) {
  return Math.round((9 / 5) * element + 32);
}

function celsiusValue(element) {
  return Math.round((5 / 9) * (element - 32));
}
