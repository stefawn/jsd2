// Elements
// ------------------------------------------
var date  = document.querySelector('.date');
var games = document.querySelector('.games');


// Templates
// ------------------------------------------
var dateTemplate = document.querySelector('#date-template');
var gameTemplate = document.querySelector('#game-template');




// Date template
// ------------------------------------------

// Compile the template's html source (a string)
// into a template function (a function) 
// by using Handlebars.compile()
var templateFunction = Handlebars.compile(dateTemplate.innerHTML);

// Get the final HTML by calling the new template function 
// and pass it JSON data as an argument
var html = templateFunction(mockdata);

// Insert the new HTML into the appropriate Element in the DOM
date.innerHTML = html;



// Games Template
// (reusing variables from the date template)
// ------------------------------------------
templateFunction = Handlebars.compile(gameTemplate.innerHTML);
html = templateFunction(mockdata);
games.innerHTML = html;
