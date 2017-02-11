var minutes = document.getElementById("minutes-left");
var secondes = document.getElementById("secondes-left");
var startBtn = document.getElementById("start-btn");
var resetBtn = document.getElementById("reset-btn");

var minutesLeft = 25;
var secondesLeft = 0;
var timeCountId = null;
var clickCount = 0;

var timeCount = function() {
   if (secondesLeft === 0) {
      minutesLeft--;
      secondesLeft = 59;
      minutes.textContent = minutesLeft;
      secondes.textContent = secondesLeft;
   }
   else {
      secondesLeft--;
      secondes.textContent = secondesLeft;
   }
};

var resetTimeCount = function() {
   clearInterval(timeCountId);
};

startBtn.addEventListener("click", function() {
   if (clickCount === 0) {
      timeCountId = setInterval(timeCount, 1000);
      startBtn.textContent = "Stop";
      clickCount = 1;
   }
   else {
      clearInterval(timeCount);
      startBtn.textContent = "Start";
      clickCount = 0;
   }
});

resetBtn.addEventListener("click", resetTimeCount());
