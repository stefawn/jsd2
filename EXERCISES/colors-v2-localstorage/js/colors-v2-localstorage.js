//Elements
var body = document.querySelector('body');
var ul = document.querySelector('ul');

//Events
ul.addEventListener('click', clickColor);
window.addEventListener('load', restoreColor);


//Event Handler
function clickColor(e) {
	//console.log('clickColor', e.target);

	//Event delegation
	//Return Early if an li element was no
	if (e.target.tagName != "LI") {
		return; //this makes sure we're only gtting the element we want
	}

	change(e.target.dataset.color);	
	
	//save color to local storage
	var scheme = {
		color: e.target.dataset.color
	};

	scheme = JSON.stringify(scheme);

	localStorage.setItem("scheme", scheme);
};

//Function to change color
function change(color){
	console.log('change', color);
	body.className = color;
};


// TODO: on window load, get color from local storage
function restoreColor(e) {
	//get color from local storage
	var scheme = localStorage.getItem("scheme");
	
	if (scheme == null) {
		return;
	}
	console.log(scheme);
	scheme =	 JSON.parse(scheme);
	//call change
	console.log(scheme);
	change(scheme.color);

};

