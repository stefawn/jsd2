// Elements
var form = document.querySelector("form");
var search = document.querySelector("#search");
var results = document.querySelector(".results");
var display = document.querySelector(".display");
var favoritesList = document.querySelector(".favorites-list");
var button;

var headerTemplate = document.querySelector("#header-template");
var restaurantTemplate = document.querySelector("#restaurant-template");

var map; 
var markers = [];
var contents = [];
var infowindows = [];
var pinLocations = [];
var favoriteRestaurants = [];

// Events
// ------------------------------------
window.addEventListener("load", loadListFirebase);
form.addEventListener("submit", getRestaurants);
display.addEventListener("click", saveRestaurant);

// Firebase Setup
var firebaseRef = new Firebase("https://foodstr-a1343.firebaseio.com/");

// Event Handlers 
// ------------------------------------
function getRestaurants(event) {
	var searchString = search.value;
	
	if (isNaN(searchString) === false) {
		var zipUrl = "http://opentable.herokuapp.com/api/restaurants?zip=" + searchString;
		$.getJSON(zipUrl, updateRestaurants);	
	} else if (isNaN(searchString) === true) {
		var cityUrl = "http://opentable.herokuapp.com/api/restaurants?city=" + searchString;
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
		var li = document.createElement("li");
		li.textContent = addFavName;
		favoritesList.appendChild(li);
		favoriteRestaurants.push(addFavName);
	} else {
		return;
	}

	favListFirebase();
}

// Update page
// ------------------------------------
function loadRestaurants(snapshot) {
	console.log("loadRestaurants");
	if (snapshot.val() === null) {
		return;
	}

	favoriteRestaurants = snapshot.val();
	favoriteRestaurants.forEach();
}

function updateRestaurants(json) {
	
	clearPrevious();
	// // compile header template
	// var template = Handlebars.compile(headerTemplate.innerHTML);
	// display.innerHTML = template(json);

	// compiling the template source from <script> tag
	// into a Handlebars template
	template = Handlebars.compile(restaurantTemplate.innerHTML);
	display.innerHTML = template(json.restaurants);

	json.restaurants.forEach(savePinLocations);

	createMarkers();

}

function clearPrevious() {
	// clears out the old results
	results.innerHTML = '';
	pinLocations = [];
}

function savePinLocations(restaurant) {
	console.log("savePinLocations");
	pinLocations.push({name: restaurant.name, lat: restaurant.lat, lng: restaurant.lng});
}

// Firebase Functions
function loadListFirebase() {
	firebaseRef.on("value", loadRestaurants);
}

function favListFirebase() {
	firebaseRef.set(favoriteRestaurants);
}


// Map Functions
// ------------------------------------
function initMap() {
	loadMap();
}

function loadMap() {
	var el = document.querySelector('#places-map');

	var options = {
		center: { lat: 37.798969, lng: -122.407312 },
		zoom: 10
	};

	map = new google.maps.Map(el, options);

}

function createMarkers() {
	// clears out previous map markers
	deleteOverlays();

	for (i = 0; i < pinLocations.length; i++) {
		markers[i] = new google.maps.Marker({
			position: new google.maps.LatLng(pinLocations[i].lat, pinLocations[i].lng),
			map: map
		});

		markers[i].index = i;
		contents[i] = '<div class="popup_container">'+'<b>'+pinLocations[i].name+'</b>'+'</div>';

		infowindows[i] = new google.maps.InfoWindow({
			content: contents[i],
			maxWidth: 300
		});

	//adding labels when you click	
		google.maps.event.addListener(markers[i], "click", function() {
			console.log(this.index);
			infowindows[this.index].open(map,markers[this.index]);
			map.panTo(markers[this.index].getPosition());
		});
	}

	//center map on where pins are
	var bounds = markers.reduce(function(bounds, marker) {
		return bounds.extend(marker.getPosition());
	}, new google.maps.LatLngBounds());
	
	map.setCenter(bounds.getCenter());
	map.fitBounds(bounds);
}


function deleteOverlays() {
	console.log("deleteOverlays");
	if (markers) {
		for (i in markers) {
			markers[i].setMap(null);
		}
		markers.length = 0;
	}
}



