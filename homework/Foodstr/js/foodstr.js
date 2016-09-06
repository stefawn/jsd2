// Selectors
// ------------------------------------

var form = document.querySelector("form");
var search = document.querySelector("#search");
var results = document.querySelector(".results");
var display = document.querySelector(".display");
var favoritesList = document.querySelector(".favorites-list");
var clear = document.querySelector(".clear");
var headerTemplate = document.querySelector("#header-template");
var restaurantTemplate = document.querySelector("#restaurant-template");

// Variables
// ------------------------------------

var favoriteRestaurants = [];

// Events
// ------------------------------------

window.addEventListener("load", loadListFirebase);
form.addEventListener("submit", getRestaurants);
display.addEventListener("click", saveRestaurant);
clear.addEventListener("click", clearFavorites);

// Firebase Functions
// ------------------------------------

// Firebase Setup
var firebaseRef = new Firebase("https://foodstr-a1343.firebaseio.com/");

function loadListFirebase() {
	console.log('listFirebase');
	firebaseRef.on("value", loadRestaurants);
}

function favListFirebase() {
	console.log('favlistFirebase');
	firebaseRef.set(favoriteRestaurants);
}

// Restaurant Functions
// ------------------------------------

function getRestaurants(event) {
	event.preventDefault();
	var searchString = search.value;
	console.log("getRestaurants");
	if (isNaN(searchString) === false) {
		var zipUrl = "https://opentable.herokuapp.com/api/restaurants?zip=" + searchString;
		$.getJSON(zipUrl, updateRestaurants);	
	} else if (isNaN(searchString) === true) {
		var cityUrl = "https://opentable.herokuapp.com/api/restaurants?city=" + searchString;
		$.getJSON(cityUrl, updateRestaurants);
	}	else {
		return;	
	}
}

function saveRestaurant(e) {
	if (e.target.nodeName == "BUTTON") {
		console.log("saved");
	} else {
		return;
	}

	var target = e.target.closest("li");
	var addFavName = target.getElementsByTagName('h2')[0].innerHTML;

	if (!favoriteRestaurants.includes(addFavName)) {
		console.log('addFavName: ' + addFavName);

		populateFavs(addFavName);
		
		favoriteRestaurants.push(addFavName);
		console.log('favoriteRestaurants: ' + favoriteRestaurants);
	} else {
		return;
	}

	favListFirebase();
}

function clearFavorites() {
	favoritesList.textContent = "";
	favoriteRestaurants = [];
	favListFirebase();
}

function loadRestaurants(snapshot) {
	console.log('loadRestaurants...');
	console.log(snapshot.val());

	if (snapshot.val() === null) {
		return;
	}
	favoriteRestaurants = snapshot.val();

	if ($('.favorites-list li').length == 0){
		favoriteRestaurants.forEach(populateFavs);		
	} else {
		return;
	}
}

// Update page
// ------------------------------------

function populateFavs(restaurantName) { 
	console.log('populateFavs...');
	console.log('test');
	
	var li = document.createElement("li");
	li.textContent = restaurantName;
	favoritesList.appendChild(li);
}

function updateRestaurants(json) {
	clearPrevious();
	// compile results template
	var template = Handlebars.compile(headerTemplate.innerHTML);
	results.innerHTML = template(json);
	// compile display template
	template = Handlebars.compile(restaurantTemplate.innerHTML);
	display.innerHTML = template(json.restaurants);

	json.restaurants.forEach(savePinLocations);

	createMarkers();
}