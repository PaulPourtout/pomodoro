var minutes = document.getElementById("minutes-left");
var secondes = document.getElementById("secondes-left");
var doublePoint = document.querySelector("#time-left span:nth-child(2)");
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
      if (secondesLeft < 10) {
         secondes.textContent = "0" + secondesLeft;
      }
      else {
         secondes.textContent = secondesLeft;
      }
   }
};


startBtn.addEventListener("click", function() {
   if (clickCount === 0) {
      timeCountId = setInterval(timeCount, 1000);
      startBtn.textContent = "Stop";
      doublePoint.classList.add("blink");
      clickCount = 1;
   }
   else {
      clearInterval(timeCountId);
      startBtn.textContent = "Start";
      doublePoint.classList.remove("blink");
      clickCount = 0;
   }
});

var resetTimeCount = function() {
   clearInterval(timeCountId);
   startBtn.textContent = "Start";
   clickCount = 0;
   secondesLeft = 0;
   minutesLeft = 25;
   minutes.textContent = minutesLeft;
   secondes.textContent = "0" + secondesLeft;
   doublePoint.classList.remove("blink");
};

resetBtn.addEventListener("click", resetTimeCount);
