// Structure
var body = document.querySelector("body");

// Setup
var counter = 0;
// Create
var h1 = document.createElement("h1");
h1.innerHTML = "events";
body.appendChild(h1);

// Create Event
var me = document.createEvent("MouseEvent");
me.initEvent("dblclick");

// Now attach Event to Element
h1.dispatchEvent(me);

// Event Listener

h1.addEventListener("dblclick", count);

function count(event) {
	counter++;
	console.log("count", counter);
	console.log(event.type);
	console.log(event.target.innerHTML);
}