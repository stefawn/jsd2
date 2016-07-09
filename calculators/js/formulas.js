
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

function calcFahrenheitToCelcius(tempF) {
	var tempC = (tempF - 32)*5/9;
	return tempC;
}

function calcCelciusToFarenheit(tempC) {
	var tempF = tempC * (9/5) + 32;
	return tempF;
}

function calcCircumference(r) {
	var c = 2 * Math.PI * r;
	return c;
}

function calcLongestSide(pyA, pyB) {
	var pyC = Math.sqrt((pyA*pyA)+(pyB*pyB));
	return pyC;
}