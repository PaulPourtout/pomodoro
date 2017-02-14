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

// LESS THAN TEN
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


// TIME COUNT
var timeCount = function() {
	if (secondesLeft === 0 && minutesLeft === 0) {
		resetTimeCount();
		sessionsNumber++;
		if (sessionsNumber % 2 !== 0) {
			startBreak();
		}
	} else {
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

// START BREAK
var startBreak = function() {
	if (sessionsNumber !== 7) {
		startBtn.textContent = "Start Break";
		secondesLeft = secondesPresetBreak;
		minutesLeft = minutesPresetBreak;
		lessThanTen();
	} else {
		sessionsNumber = 0;
		startBtn.textContent = "Start Long Break";
		secondesLeft = secondesPresetLongBreak;
		minutesLeft = minutesPresetLongBreak;
		lessThanTen();
	}
};

// RESET TIMECOUNT
var resetTimeCount = function() {
	clearInterval(timeCountId);
	startBtn.textContent = "Start working";
	clickCount = 0;
	secondesLeft = secondesPresetSession;
	minutesLeft = minutesPresetSession;
	lessThanTen();
	doublePoint.classList.remove("blink");
};

// AU CHARGEMENT
// Check que les valeurs inferieur à 10 sont affichées correctement
lessThanTen();

// START PROGRAM ON CLICK
startBtn.addEventListener("click", function() {
	if (clickCount === 0) {
		timeCountId = setInterval(timeCount, 1000);
		startBtn.textContent = "Stop";
		doublePoint.classList.add("blink");
		clickCount = 1;
	} else {
		clearInterval(timeCountId);
		startBtn.textContent = "Continue";
		doublePoint.classList.remove("blink");
		clickCount = 0;
	}
});

// RESET PROGRAM AU CLICK
resetBtn.addEventListener("click", resetTimeCount);
