// Setup
// ------------------------------------------
var points = 0;


// Structure
// ------------------------------------------
var score       = document.querySelector("#score");
var increase5   = document.querySelector("#increase-5");
var decrease5   = document.querySelector("#decrease-5");
var customScore = document.querySelector("#custom-score");
var setScore    = document.querySelector("#submit-custom-score");


// Events
// ------------------------------------------
increase5.addEventListener('click', add5);
decrease5.addEventListener('click', subtract5);
setScore.addEventListener('click', setCustomScore);


// Event Listener functions
// ------------------------------------------
function add5(e) {
	points = points + 5;
	updateScore(points)
}

function subtract5(e) {
	if (points - 5 > 0) {
		points = points - 5;
	} else {
		points = 0;
	}
	updateScore(points)
}

function setCustomScore(e) {
	var custom = customScore.value;
	if (isNaN(custom)) {
		alert("Please enter in a number");
	} else {
		points = custom;
		updateScore(custom);
	}
}


// Update page functions
// ------------------------------------------
function updateScore(value) {
	score.innerHTML = value + ' Points';
}