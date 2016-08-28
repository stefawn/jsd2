

function boom () {
	console.log("boom!");
}

var bomb = window.setTimeout(boom, 5000);

// setup

function  defuseBomb() {
	clearTimeout(bomb);
}



var i = 0;

function count() {
	i++;
	console.log("Count:", i);
}

// infinitely repeats function
var counter = window.setInterval(count, 2000);

// stops the infinite repeat
function stop() {
	window.clearTimeout(counter);
}
