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
    } else {
        secondesLeft--;
        if (secondesLeft < 10) {
            secondes.textContent = "0" + secondesLeft;
        } else {
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
    } else {
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



// RIPPLE EFFECT

var buttons = document.querySelectorAll("#buttons-container button");

buttons.forEach(function(item) {
    item.addEventListener("click", function(e) {
        var inkWidth = parseFloat(getComputedStyle(item).getPropertyValue("width"));
        var inkHeight = parseFloat(getComputedStyle(item).getPropertyValue("height"));

        x = e.pageX - item.offsetLeft - inkWidth / 2;
        console.log("x", x);
        y = e.pageY - item.offsetTop - inkWidth / 2;
        console.log("y", y);
        var ink = document.createElement("span");
        ink.classList.add("ink");
        ink.classList.add("animate");
        ink.style.height = inkWidth + "px";
        ink.style.width = inkWidth + "px";
        ink.style.top = y + "px";
        ink.style.left = x + "px";
        item.appendChild(ink);
    });
});
