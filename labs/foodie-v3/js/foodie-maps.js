// ------------------------------------------------------ //
//     Demo 3: Google Places API
// ------------------------------------------------------ //
function initMap() {
	console.log("initMap");

	// Demo 3: Google Places API
	googlePlacesDemo();
};

function googlePlacesDemo() {
	console.log("googlePlacesDemo");

	// Elements
	// --------------
	var el = document.querySelector('#places-map');

	// map options
	// --------------
	var options = {
		center: { lat: 37.8040, lng: -122.4110 },
		zoom: 15
	};

	// create a new google map object
	var map = new google.maps.Map(el, options);

	// setup new google places api search
	var service = new google.maps.places.PlacesService(map);

	// setup one InfoWindow (popover when marker is clicked)
	var infoWindow = new google.maps.InfoWindow();


	// Do a search for nearby laundry businesses
	// - Documentation for all the place types:
	// - https://developers.google.com/places/supported_types
	service.nearbySearch({
		location: { lat: 37.8040, lng: -122.4110 },
		radius: 1000, // in meters
		type: ['laundry']	
	}, displayResults);

	// the callback function that handles the search result data
	// - calls createMarker 1 time for each place
	function displayResults(results, status) {
		console.log("displayResults");
		results.forEach(createMarker);
	}

	// creates one marker and place it on a map
	// - expects to be passed a Google Place object
	function createMarker(place) {
		var marker = new google.maps.Marker({
			map: map,
			position: place.geometry.location
		});

		marker.addListener('click', function() {
			infoWindow.setContent(place.name);
			infoWindow.open(map, marker);
		})
	}

}