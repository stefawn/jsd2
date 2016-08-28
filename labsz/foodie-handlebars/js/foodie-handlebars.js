// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");
var header = document.querySelector(".header");

var restaurantTemplate = document.querySelector("#restaurant-template");

var headerTemplate = document.querySelector("#header-template");

// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(event) {
	event.preventDefault();

	var search = zip.value;
	console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

	$.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
// This function is updated to use Handlebars, shorter code
function updateRestaurants(json) {
	console.log('updateRestaurants',json);

	// clears out the old results
	results.innerHTML = '';


	// Handlebars step 1: add in Handlebars template in HTML
	// Handlebars step 2: Compiling template source from the script tag into a Handlebars template
	var template = Handlebars.compile(restaurantTemplate.innerHTML);
	// Handlebars step 3: Combining Handlebar Template object with HTML
	results.innerHTML = template(json.restaurants);

	// Option 2 for Combining
	// var html = template(json.restaurants);
	// results.innerHTML = html;

	//-----compile header template-----
	template = Handlebars.compile(headerTemplate.innerHTML);
	header.innerHTML = template(json);


}

// This function doesn't need to be created anymore
	// function createRestaurant(restaurant) {

	// 	var li = document.createElement("li");
	// 	//do a multi-line string for the var
	// 	var template = 
	// 		'<img src="' + restaurant.image_url + '">' +
	// 		'<h2>' + restaurant.name + '</h2>' +
	// 		'<p>'+ restaurant.address + '</p>';

	// 	li.innerHTML = template; //instead of appending at the end
	// 	results.appendChild(li);
	// }

