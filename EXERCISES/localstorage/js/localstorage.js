//grab the buttons!
var button = document.querySelector("button");
var color = document.querySelector(".color");
var model = document.querySelector(".model");
var p = document.querySelector("p");


//Event
window.addEventListener("load", updateCar);
button.addEventListener("click", saveCar);

function saveCar(e) {
	console.log(color.value);

	var car = {
		color: color.value,
		model: model.value
	};

	car = JSON.stringify(car);

	//save the input color to local storage
	localStorage.setItem("car", car);

	updateCar();
};

// Clear data
function clearCar() {
	localStorage.removeItem('car');
};

// Update page
function updateCar() {
	//get object from local storage
	var car = localStorage.getItem("car");

	//first run case: validation, in case null is returned
	if (car == null) {
		return;
	}
	
	//convert to an object
	car = JSON.parse(car);

	//or innerHTML
	p.textContent = car.color + " " + car.model;
};
