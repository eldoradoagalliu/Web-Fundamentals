var world = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 1, 3, 2, 1],
  [1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 1, 1, 1, 2, 1],
  [1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
  [1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 4, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 3, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var pacman = {
  x: 1,
  y: 1,
};

var otherPacman = {
  x: 13,
  y: 8,
};

var score = 0;

function displayWorld() {
  var output = "";
  for (var i = 0; i < world.length; i++) {
    output += "\n<div class='row'>\n";
    for (var j = 0; j < world[i].length; j++) {
      if (world[i][j] == 0) output += "<div class='empty'></div>";
      else if (world[i][j] == 1) output += "<div class='brick'></div>";
      else if (world[i][j] == 2) output += "<div class='coin'></div>";
      else if (world[i][j] == 3) output += "<div class='cherry'></div>";
      else if (world[i][j] == 4) output += "<div class='ghost'></div>";
    }
    output += "\n</div>";
  }
  document.getElementById("world").innerHTML = output;
}

function displayFirstPacman() {
  document.getElementById("firstPacman").style.top = pacman.y * 20 + "px";
  document.getElementById("firstPacman").style.left = pacman.x * 20 + "px";
}

function displaySecondPacman() {
  document.getElementById("secondPacman").style.top = otherPacman.y * 20 + "px";
  document.getElementById("secondPacman").style.left = otherPacman.x * 20 + "px";
}

function displayScore() {
  document.getElementById("score").innerHTML = score;
}

displayWorld();
displayFirstPacman();
displaySecondPacman();
displayScore();

document.onkeydown = function (e) {
    console.log(e.code);
  // First Pacman movement
  // Move left
  if (e.code == "ArrowLeft" && world[pacman.y][pacman.x - 1] != 1) {
    pacman.x--;
    document.getElementById("firstPacman").style.transform = "rotate(180deg)";
  }
  // Move right
  else if (e.code == "ArrowRight" && world[pacman.y][pacman.x + 1] != 1) {
    pacman.x++;
    document.getElementById("firstPacman").style.transform = "rotate(0deg)";
  }
  // Move up
  else if (e.code == "ArrowUp" && world[pacman.y - 1][pacman.x] != 1) {
    pacman.y--;
    document.getElementById("firstPacman").style.transform = "rotate(270deg)";
  }
  // Move down
  else if (e.code == "ArrowDown" && world[pacman.y + 1][pacman.x] != 1) {
    pacman.y++;
    document.getElementById("firstPacman").style.transform = "rotate(90deg)";
  }
  // Coin score
  if (world[pacman.y][pacman.x] == 2) {
    world[pacman.y][pacman.x] = 0;
    score += 10;
    displayWorld();
    displayScore();
  }
  // Cherry score
  else if (world[pacman.y][pacman.x] == 3) {
    world[pacman.y][pacman.x] = 0;
    score += 50;
    displayWorld();
    displayScore();
  }
  // Ghost
  else if (world[pacman.y][pacman.x] == 4) {
    world[pacman.y][pacman.x] = 0;
    document.getElementById("firstPacman").remove();
    score = 0;
    displayWorld();
    displayScore();
    alert("You lost the game! Reload to play again...");
  }

  displayFirstPacman();

  // Second Pacman movement
  // Move left
  if (e.code == "KeyA" && world[otherPacman.y][otherPacman.x - 1] != 1) {
    otherPacman.x--;
    document.getElementById("secondPacman").style.transform = "rotate(180deg)";
  }
  // Move right
  else if (e.code == "KeyD" && world[otherPacman.y][otherPacman.x + 1] != 1) {
    otherPacman.x++;
    document.getElementById("secondPacman").style.transform = "rotate(0deg)";
  }
  // Move up
  else if (e.code == "KeyW" && world[otherPacman.y - 1][otherPacman.x] != 1) {
    otherPacman.y--;
    document.getElementById("secondPacman").style.transform = "rotate(270deg)";
  }
  // Move down
  else if (e.code == "KeyS" && world[otherPacman.y + 1][otherPacman.x] != 1) {
    otherPacman.y++;
    document.getElementById("secondPacman").style.transform = "rotate(90deg)";
  }
  // Coin score
  if (world[otherPacman.y][otherPacman.x] == 2) {
    world[otherPacman.y][otherPacman.x] = 0;
    score += 10;
    displayWorld();
    displayScore();
  }
  // Cherry score
  else if (world[otherPacman.y][otherPacman.x] == 3) {
    world[otherPacman.y][otherPacman.x] = 0;
    score += 50;
    displayWorld();
    displayScore();
  }
  // Ghost
  else if (world[otherPacman.y][otherPacman.x] == 4) {
    world[otherPacman.y][otherPacman.x] = 0;
    document.getElementById("secondPacman").remove();
    score = 0;
    displayWorld();
    displayScore();
    alert("You lost the game! Reload to play again...");
  }

  displaySecondPacman();
};
