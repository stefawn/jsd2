// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');
var randomAddress; //define a global variable!

// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)
var streetNumber = [123, 50, 1455, 685];
var streetName = ["Mission Street", "Fremont Street", "Market Street"];
var city = ["Redwood City", "San Francisco", "Pittsburgh"];
var state = ["CA", "NY", "PA"];
var postalCode = [94107, 94103, 94062];


// Event Listeners
// ------------------------------------------
function generateAddress(e) {
	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address
	var addNum = streetNumber[generateRandomInt(1,streetNumber.length)];
	var addStrt = streetName[generateRandomInt(1,streetName.length)];
	var addCity = city[generateRandomInt(1,city.length)];
	var addSt = state[generateRandomInt(1,state.length)];
	var addZip = postalCode[generateRandomInt(1,postalCode.length)];
	randomAddress = addNum + " " + addStrt + ", " + addCity + " " + addSt + " " + addZip;
	addAddress(randomAddress);
}

function generateRandomInt(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}

// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}



