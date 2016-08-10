// Setup
// ----------------------------------------------


// Structure
// ----------------------------------------------
var form = document.querySelector("form");
var titleSearch = document.querySelector("form .search");
var button = document.querySelector("button");

var details = document.querySelector(".details");
var detailsImage = document.querySelector("img");
var detailsTitle = document.querySelector(".title");
var detailsPlot = document.querySelector(".plot");
var detailsLink = document.getElementById("myLink");

var ul = document.querySelector(".results");


// Events
// ----------------------------------------------
form.addEventListener("submit", movieSearch);
button.addEventListener("click", movieSearch);

ul.addEventListener("click", showDetail);

// Event handlers
// ----------------------------------------------
function movieSearch(e) {
	event.preventDefault();
	var search = titleSearch.value;
	console.log(search);

	var dataUrl = "http://www.omdbapi.com/?s=" + search;
	$.getJSON(dataUrl, updateList);
}


// Update page
// ----------------------------------------------

function updateList(json) {
	console.log("updateList", json);
	ul.innerHTML = "";
	detailsTitle.innerHTML = "";
	detailsPlot.innerHTML = "";
	detailsLink.innerHTML = "";

	detailsImage.src = "";
	json.Search.forEach(moviesList);
}

function showDetail(movie) {
	var target = movie.target;
	
	if (target.tagName === "LI") {
		var movieSearchId = target.getAttribute("id");
	}

	var detailUrl = "http://www.omdbapi.com/?i=" + movieSearchId + "&plot=full&r=json";
	$.getJSON(detailUrl, setDetail);
	
	var dataUrl = "http://www.omdbapi.com/?i=" + movieSearchId + "&plot=full&r=json";
	$.getJSON(dataUrl, setPoster);

	detailsLink.href = "http://www.imdb.com/title/" + movieSearchId;
}

function setDetail(e) {
	detailsTitle.textContent = e.Title;
	detailsPlot.textContent = e.Plot;
}

function setPoster(e) {
	detailsImage.src = e.Poster;
	console.log(e.Poster);
}

//Add function that updates classes for elements

function moviesList(movie) {
	var li = document.createElement("li");
	var p = document.createElement("p");
	var img = document.createElement("img");

	img.src = movie.Poster //need to update this with JSON object
	p.textContent = movie.Title;

	ul.appendChild(li);
	li.appendChild(img);
	li.appendChild(p);

	li.id = movie.imdbID;

}



//Class exercise to do event bubbling
// var li = document.querySelector("li");

// li.addEventListener("click", testing);

// function testing(e) {
// 	console.log(e.target);
	
// 	var target = e.target;

// 	if (target.tagName != "LI") {  //case sensitive, the return was in caps for tagName
// 		console.log("got child, finding parent..")
// 		target = target.parentElement; //on chrome and safari you can use target.closest("li";)
// 	}
// 	console.log(target);
// }