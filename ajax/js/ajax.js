// structure
var p = document.querySelector("body p"); //calls paragraph with no id or class
var ul = document.querySelector(".concepts");

// create path to ajax request
var url = "https://api.consumerfinance.gov/data/hmda.json";

// setup ajax request
var jqxhr = $.getJSON(url, handleData);

// callback function for ajax request
// ajax callbacks expect the JSON data
function handleData(json) {
	console.log(json);

	var description = json["description"];

	p.innerHTML = description;
	// debugger //chrome dev tools pauses on line where it says debugger

	//if json gets too long, save to variable
	json["_embedded"]["concepts"].forEach(createConcept);
	//forEach requires a function
	function createConcept(item) {
//you need to pass it something, in for loop its 'i', here it's 'item'
		var li = document.createElement("li");
		li.textContent = item["description"];
		ul.appendChild(li); //last step is to append

	}
}