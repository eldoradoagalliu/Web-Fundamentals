const SECONDS_OF_HOUR = 3600;
const SECONDS_OF_MINUTE = 60;
const HOUR_DEGREE = 15;
const MINUTES_SECONDS_DEGREE = 6;
const DEGREE_OFFLOAD = 180;

function getSecondsSinceStartOfDay() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * SECONDS_OF_MINUTE +
    new Date().getHours() * SECONDS_OF_HOUR
  );
}

setInterval(function () {
  var time = getSecondsSinceStartOfDay();

  var hour = document.querySelector("#hour");
  const HOUR_NUMBER = time / SECONDS_OF_HOUR;
  console.log("Hour", HOUR_DEGREE);
  hour.style.transform = "rotate(" + HOUR_DEGREE * HOUR_NUMBER + "deg)";

  var minutes = document.querySelector("#minutes");
  const MINUTES_NUMBER = (time % SECONDS_OF_HOUR) / SECONDS_OF_MINUTE;
  minutes.style.transform = "rotate(" + (DEGREE_OFFLOAD + MINUTES_SECONDS_DEGREE * MINUTES_NUMBER) + "deg)";

  var seconds = document.querySelector("#seconds");
  const SECONDS_NUMBER = (time % SECONDS_OF_HOUR) % SECONDS_OF_MINUTE;
  seconds.style.transform = "rotate(" + (DEGREE_OFFLOAD + MINUTES_SECONDS_DEGREE * SECONDS_NUMBER) + "deg)";
}, 1000);
