// Elements
var button = document.querySelector("button");
var container = document.querySelector(".container");
var boxColor = document.querySelector(".box-color");
var boxNote = document.querySelector(".box-note");




window.addEventListener("load", function() {

	// init the sticky note count
	var noteCount = 1;

	button.addEventListener("click", function() {

		//Get data from user
		var color =	boxColor.value;
		var note = boxNote.value;

		//Create Elements
		var box = document.createElement("div");

		//Add content / attributes
		box.className = "box";
		box.innerHTML = noteCount + ". " + note;
		box.style.backgroundColor = color;

		//Append to DOM
		container.appendChild(box);

		noteCount++;

	});
});

// Function
