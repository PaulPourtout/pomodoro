var minutes = document.getElementById("minutes-left");
var secondes = document.getElementById("secondes-left");
var doublePoint = document.querySelector("#time-left span:nth-child(2)");
var startBtn = document.getElementById("start-btn");
var resetBtn = document.getElementById("reset-btn");


var minutesPresetSession = 0;
var secondesPresetSession = 5;
var minutesPresetBreak = 0;
var secondesPresetBreak = 7;
var minutesPresetLongBreak = 0;
var secondesPresetLongBreak = 10;

var minutesLeft = minutesPresetSession;
var secondesLeft = secondesPresetSession;
var timeCountId = null;
var clickCount = 0;
var sessionsNumber = 0;

var lessThanTen = function() {
	if (minutesLeft < 10) {
		minutes.textContent = "0" + minutesLeft;
	} else {
		minutes.textContent = minutesLeft;
	}
	if (secondesLeft < 10) {
		secondes.textContent = "0" + secondesLeft;
	} else {
		secondes.textContent = secondesLeft;
	}
};

lessThanTen();

var timeCount = function() {
	if (secondesLeft === 0 && minutesLeft === 0) {
		alert("fini!!! Pause");
		resetTimeCount();
		sessionsNumber++;
		console.log("session Number ", sessionsNumber);
		if (sessionsNumber < 5) {
			secondesLeft = secondesPresetBreak;
			minutesLeft = minutesPresetBreak;
		}
		else {
			sessionsNumber = 0;
			secondesLeft = secondesPresetLongBreak;
			minutesLeft = minutesPresetLongBreak;
		}
	}
	else {
		if (secondesLeft === 0) {
			minutesLeft--;
			secondesLeft = 59;
			lessThanTen();
		} else {
			secondesLeft--;
			lessThanTen();
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
	secondesLeft = secondesPresetSession;
	minutesLeft = minutesPresetSession;
	lessThanTen();
	doublePoint.classList.remove("blink");
};

resetBtn.addEventListener("click", resetTimeCount);



// RIPPLE EFFECT
var buttons = document.querySelectorAll("#buttons-container button");
console.log("buttons", buttons);
buttons.forEach(function(item) {
	item.addEventListener("click", function(e) {
		var inkWidth = parseFloat(getComputedStyle(item).getPropertyValue("width"));
		var inkHeight = parseFloat(getComputedStyle(item).getPropertyValue("height"));
		var x = e.pageX - item.offsetLeft - inkWidth / 2;
		var y = e.pageY - item.offsetTop - inkWidth / 2;

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
