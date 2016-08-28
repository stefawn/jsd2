// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');
var dateTemplate = document.querySelector("#date-template");
var gameTemplate = document.querySelector("#game-template");

// Templates
// ------------------------------------------

var template = Handlebars.compile(dateTemplate.innerHTML);
date.innerHTML = template(mockdata);


var templateNew = Handlebars.compile(gameTemplate.innerHTML);
games.innerHTML = templateNew(mockdata.games);