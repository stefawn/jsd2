// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");
var header = document.querySelector(".header");


var headerTemplate = document.querySelector("#header-template");
var restaurantTemplate = document.querySelector("#restaurant-template");


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
function updateRestaurants(json) {
	console.log('updateRestaurants',json);

	// clears out the old results
	results.innerHTML = '';


	// compile header template
	var template = Handlebars.compile(headerTemplate.innerHTML);
	header.innerHTML = template(json);

	// compiling the template source from <script> tag
	// into a Handlebars template
	template = Handlebars.compile(restaurantTemplate.innerHTML);
	results.innerHTML = template(json.restaurants);

}












