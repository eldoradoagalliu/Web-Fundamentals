var count = 3;
var likeNumber = document.querySelector(".likes");

function addLikes() {
  count++;
  likeNumber.innerText = count + " " + "like(s)";
}
