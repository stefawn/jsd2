// Sources 
 var sources =  [
	{
			name: "Techcrunch",
			code: "techcrunch"
	},
	{
		    name: "ESPN",
			code: "espn"
	},
	{
			name: "Engadget",
			code: "engadget"
	}
];

var newsKey = "ad44048f73594da9be05e195bd80a94f";
var newsSource = "engadget";
var sourceJson;
var homeArticles = [];

//Elements
var	popUp = document.querySelector("#popUp"),
	closePopUp = document.querySelector(".closePopUp"),
	articles = document.querySelector("#main"),
	articleTitle = document.querySelector(".articleContent a"),
	feedTemplate = document.querySelector("#feed-template"),
	articlePreviewTitle = document.querySelector("#popUp h1"),
	articlePreviewDesc = document.querySelector("#popUp p"),
	articlePreviewLink = document.querySelector("#popUp .popUpAction"),
	currentSource = document.querySelector(".current-source"),
	search = document.querySelector("#search"),
	sourcesDropdown = document.querySelector(".news-sources"),
	home = document.querySelector(".home");

//Events
window.addEventListener("load", loadHome);
closePopUp.addEventListener("click", closeOut);
articles.addEventListener("click", articlePreview);
sourcesDropdown.addEventListener("click", selectSource);
home.addEventListener("click", showDefaultSource);
search.addEventListener("click", toggleSearch);

//API access
function getArticles(newsSource) {
	var url = "https://newsapi.org/v1/articles?source=" + newsSource + "&apiKey=" + newsKey;
	$.getJSON(url, updateArticles).fail(failedPull);
};

// Update view

function updateArticles(json){
	main.innerHTML = "";

	var template = Handlebars.compile(feedTemplate.innerHTML);
	main.innerHTML = template(json.articles);

	popUp.classList.add("hidden");
	
	sourceJson = json;
};

function selectSource(e) {
	e.preventDefault();
	var target = e.target.closest("li");
	var i = 0;

	while (target = target.previousElementSibling) {
		i++;
	}

	newsSource = sources[i].code;
	currentSource.innerHTML = sources[i].name;
	popUp.classList.remove("hidden");
	popUp.classList.add("loader");
	getArticles(newsSource);	
};

function showDefaultSource(e) {
	e.preventDefault();
	newsSource = sources[2].code;
	currentSource.innerHTML = sources[2].name;
	getArticles(newsSource);
};

function toggleSearch(e) {
	e.preventDefault();
	var target = e.target;

	if (target.tagName == "IMG"){
		search.classList.toggle("active");
	};
};

// Popup functions

function articlePreview(e) {
	e.preventDefault();
	popUp.classList.remove("loader");
	popUp.classList.remove("hidden");
	articleDetail(e);
};

function articleDetail(e) {
	e.preventDefault();
	var target = e.target.closest("article");
	var i = 0;

	while (target = target.previousElementSibling) {
		i++;
	}

	articlePreviewTitle.innerHTML = sourceJson.articles[i].title;
	articlePreviewDesc.innerHTML = sourceJson.articles[i].description;
	articlePreviewLink.setAttribute("href", sourceJson.articles[i].url);
};

function closeOut(e) {
	e.preventDefault();
	popUp.classList.add("hidden");
	articlePreviewLink.classList.remove("hidden");
};

//Error
function failedPull() {
	popUp.classList.remove("loader");
	articlePreviewTitle.innerHTML = "oops.."
	articlePreviewDesc.classList.add("error");
 	articlePreviewDesc.innerHTML = "sorry";
	articlePreviewLink.classList.add("hidden");

};

//Home
function loadArticles(newsSource) {
	var url = "https://newsapi.org/v1/articles?source=" + newsSource + "&apiKey=" + newsKey;
	$.getJSON(url, displayArticles);
};

function displayArticles(json) {
	console.log("displayArticles", json.articles);
	homeArticles.push(json.articles);
	homeArticles = [].concat.apply([], homeArticles);
};

function loadHome() {
	getArticles(newsSource);
	sources.forEach(getSource);

	function getSource(i) {
		var loadAll = loadArticles(i.code);
		console.log(i.code);
	}
};
