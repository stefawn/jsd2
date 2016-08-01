// Structure
// ------------------------------------------
var form = document.querySelector("body form");
var ul = document.querySelector("ul");
var input = document.querySelector(".new-thing");

// Events
// ------------------------------------------
form.addEventListener('submit', createNewThing);


// Event Listeners
// ------------------------------------------
function createNewThing(e) {
	e.preventDefault();
	console.log('createNewThing');
// get value from form	
	addToList(input.value);
}


// Update Page function
// ------------------------------------------
function addToList(newThing) {
	var li = document.createElement("li");
	li.innerHTML = newThing;
	ul.appendChild(li);
	li.className = "fav-thing";
}

