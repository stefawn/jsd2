// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');

// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(something) {
	p.innerHTML = something;
}



// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here

function getPrivilege(input) {
	var privilege;
	if (input < 16) {	
		privilege = "you cannot do much outside of going to school";
	} else if (input >= 16 && input <18) {
		privilege = "you can drive";
	} else if (input >= 18 && input <21) {
		privilege = "you can vote";
	} else if (input >= 21 && input <25) {
		privilege = "you can drink alcohol";
	} else if (input >= 25 && input <35) {
		privilege = "you can rent a car";
	} else if (input >= 35 && input <62) {
		privilege = "you can run for president";
	} else if (input >= 62) {
		privilege = "you collect social security benefits";
	}
	return privilege;
}
