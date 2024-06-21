var countArray = [9, 12, 9];

var likeNumber1 = document.querySelector(".likes1");
var likeNumber2 = document.querySelector(".likes2");
var likeNumber3 = document.querySelector(".likes3");

function addLikes1() {
  countArray[0]++;
  likeNumber1.innerText = countArray[0];
}

function addLikes2() {
  countArray[1]++;
  likeNumber2.innerText = countArray[1];
}

function addLikes3() {
  countArray[2]++;
  likeNumber3.innerText = countArray[2];
}
