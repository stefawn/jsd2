//Elements

var body = document.querySelector('body');
var ul = document.querySelector('ul');

//Events
ul.addEventListener('click', clickColor);

//Event Handler
function clickColor(e) {
	//console.log('clickColor', e.target);

	//Event delegation
	//Return Early if an li element was no
	if (e.target.tagName != "LI") {
		return; //this makes sure we're only gtting the element we want
	}

	console.log(e.target.dataset.color);

	change(e.target.dataset.color);	
}

//Function to change color
function change(color){
	console.log('change', color);
	body.className = color;
}

