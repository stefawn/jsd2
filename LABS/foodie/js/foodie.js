// Structure
// ------------------------------------
var form = document.querySelector("form"); //where zip box is contained
var zip = document.querySelector("form .zip"); //where zip code search/input is
var submit = document.querySelector();
var ul = document.querySelector(".results");


// Events
// make that input box work by connection to updateRestaurants
form.addEventListener("submit", getRestaurants);

//
function getRestaurants(event){
	event.preventDefault(); //to counteract 'form' behavior (?)
	
	// be able to input something in zip code box
	var search = zip.value;
	console.log(search);

	//get the url from Postman
	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search; //concatenation allows you to make it flexible
	
	//jQuery function - pass url and callback
	$.getJSON(url, updateRestaurants);
}


// Event Handler 
// ------------------------------------


// Update page
// ------------------------------------

// this automates the need to create a restaurant at a time
function updateRestaurants(json) {
	console.log("updateRestaurants", json);

	//to clear results each time we search
	ul.innerHTML = "" ; 

	//Unpack restaurants from json array; dont forget to add a variable in function (orange - not very clear about thisssss)
	json.restaurants.forEach(createRestaurant);
}


function createRestaurant(restaurant) {

	//new shit Step 0 - data from JSON object instead of hard coded
		// var restaurant = {
		// 	name: "Bomb",
		// 	image: "http://www.surakbbq.com/specialties/bulgogi.jpg",
		// 	address: "bomb.geocities.com"
		// };

	//Step 1 - create elements and put in variables
	var li = document.createElement("li");
	var h2 = document.createElement("h2");
	var p = document.createElement("p");
	var img = document.createElement("img");
	
	//Step 2 - write in text, can use textContent or innerHTML(has more features)
	img.src = restaurant.image_url; //added _url to connect to Open Table's API?
	h2.textContent = restaurant.name;
	p.textContent = restaurant.address;

	//Step 3 - append elements into parent elements
	ul.appendChild(li);
	li.appendChild(img);
	li.appendChild(h2);
	li.appendChild(p);
}

// this becomes useless, was just an example
	// var korean = {
	// 	name: "Korean",
	// 	image: "http://pugetsoundblogs.com/poulsbo-beyond/files/2010/12/koreanbbq.jpg",
	// 	address: "uberEATS"
	// };

	// var japanese = {
	// 	name: "Japanese",
	// 	image: "https://eat24-files-live.s3.amazonaws.com/cuisines/v4/japanese.jpg?Signature=oC6GcksgKOZvrz53sj93ontEyEM%3D&Expires=1470281267&AWSAccessKeyId=AKIAIEJ2GCCJRT63TBYA",
	// 	address: "Caviar"
	// };

	// var indian = {
	// 	name: "Indian",
	// 	image: "http://photo.elsoar.com/wp-content/images/Favourite-Indian-curry-Rogan-Josh-with-chapatis.jpg",
	// 	address: "DoorDash"
	// };

	// var restaurants = [];
	// restaurants.push(korean,japanese,indian);
