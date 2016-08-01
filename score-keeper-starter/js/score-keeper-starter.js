// Setup
var points = 0;

// Variables
var score = document.querySelector("#score");
var increaseButton = document.querySelector("#increase-5");
var decreaseButton = document.querySelector("#decrease-5");
var customScore = document.querySelector("#submit-custom-score");
var inputBox = document.querySelector("#custom-score");

// Event Listeners
increaseButton.addEventListener("click", plusFive);
decreaseButton.addEventListener("click", minusFive);
customScore.addEventListener("click", setScore);

// functions to add or subtract
function plusFive (number) {
	points = points + 5;
	updateScore(points);
};

function minusFive (number) {
	if (points - 5 > 0) {
		points = points - 5;
	} else {
		points = 0;
	}
	updateScore(points)
}

function setScore (number) {
	var custom = customScore.value;
	if (isNaN(custom)) {
		alert("Please enter in a number");
	} else {
		points = custom;
		updateScore(custom);
	}
}

//
function updateScore (number) {
	score.innerHTML = (number) + " Points";
}
