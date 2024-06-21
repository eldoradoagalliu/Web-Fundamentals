// Edit Name Function
var headerName = document.querySelector("#name");

function editProfile() {
  var newName = prompt("Suggest a new name: ");
  headerName.innerText = newName;
}

// Remove Function
function removeRequest(element) {
  element.remove();
}

// Decrease Request Number Function
var requestNumber = 2;
var request = document.querySelector("#r-number");

function decreaseConncection() {
  requestNumber--;
  request.innerText = requestNumber;
}

// Add Connection Number Function
var connectionNumber = 418;
var connection = document.querySelector("#c-number");

function addConnection() {
  connectionNumber++;
  connection.innerText = connectionNumber;
}
