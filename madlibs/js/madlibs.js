// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest','Uber'];
var startupIdea;
var favorites = [];


// Structure
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');
		

// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);


// Event Listeners <--why are these called event listeners? Aren't these event handlers
// ------------------------------------------
function generateStartup() {
	var randomX = startupX[generateRandomInt(0,startupX.length - 1)];
	var randomY = startupY[generateRandomInt(0,startupY.length - 1)];
	startupIdea = 'A startup that is ' + randomX + ', but for ' + randomY;
	startup.innerHTML = startupIdea;
}

function saveFavorite() {
	if (!favorites.includes(startupIdea)) {
	// @NOTE if (favorites.includes(startupIdea) === false) {
		favorites.push(startupIdea)
	} else {
		console.log('dupe: ' + favorites);
	}
}

function printFavorites() {
	var favoritesText = '';
	// clear out favorites element
	list.innerHTML = '';

	// TODO: concatenate all the favorites into one string
	// - hint: loop through all the favorites
	// - this should be stored in a variable named favoritesText
	// - each favorite should have an html br element between it (EG: "<br>")
	favorites.forEach(printOutput);

	function printOutput(fav) {
		// add a <br> to each string in the array
		favWithBr = fav + '<br>';
		// push the new string to favoritesText
		favoritesText += favWithBr; 
		// @NOTE the shmancy way of favoritesText = favwithBr + favoritesText
		}
	// update the list element with the new concatenated string
	list.innerHTML = favoritesText;
}

// Helper
// ------------------------------------------
function generateRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}


// Init
// ------------------------------------------
generateStartup();

