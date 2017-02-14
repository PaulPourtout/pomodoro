var settingsBtn = document.getElementById("settings-btn");
var settingsBtnIcon = document.querySelector("#settings-btn i");
var settingsModal = document.getElementById("settings-modal");
var saveSettings = document.getElementById("save-settings");

var clickCountModal = 0;

// Open/Close Settings
settingsBtn.addEventListener("click", function(){
	// Open Settings
	if (clickCountModal === 0) {
		settingsModal.style.display = "block";
		settingsBtnIcon.classList.remove("fa-cog");
		settingsBtnIcon.classList.add("fa-times");
		clickCountModal = 1;
	}
	// Close Settings
	else {
		settingsModal.style.display = "none";
		settingsBtnIcon.classList.remove("fa-times");
		settingsBtnIcon.classList.add("fa-cog");
		clickCountModal = 0;
	}
});

// Change sessions length
saveSettings.addEventListener("click", function(){
	// Working Sessions
	minutesPresetSession = document.querySelector("#settings-working-session .minutes").value;
	secondesPresetSession = document.querySelector("#settings-working-session .secondes").value;
	// Break Sessions
	minutesPresetBreak = document.querySelector("#settings-break-session .minutes").value;
	secondesPresetBreak = document.querySelector("#settings-break-session .secondes").value;
	// Long break Sessions
	minutesPresetLongBreak = document.querySelector("#settings-long-break-session .minutes").value;
	secondesPresetLongBreak = document.querySelector("#settings-long-break-session .secondes").value;

	resetTimeCount();
});
