// Variables
// ------------------------------------

var map; 
var markers = [];
var contents = [];
var infowindows = [];
var pinLocations = [];

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

function clearPrevious() {
  // clears out the old results
  results.innerHTML = '';
  pinLocations = [];
}

function savePinLocations(restaurant) {
  console.log("savePinLocations");
  pinLocations.push({name: restaurant.name, lat: restaurant.lat, lng: restaurant.lng});
}