// RIPPLE EFFECT
var buttons = document.querySelectorAll("#buttons-container button");

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
