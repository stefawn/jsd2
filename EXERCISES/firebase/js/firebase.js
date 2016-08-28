// Setup
// -----


// Establish a connection with Firebase

var firebaseReference = new Firebase("https://jsd2-9a8d8.firebaseio.com/");

//Elements
var button = document.querySelector("button");

//Events
window.addEventListener("load", restoreChanges);
button.addEventListener("click", saveChanges);


function restoreChanges(e) {
	firebaseReference.on("value", changeColor)
}


function saveChanges(e) {
	console.log("saveChanges");

	var theme = {
		color: "blue"
	}

	console.log(theme);

	// save data to firebase
	firebaseReference.set(theme);

}

function changeColor(snapshot) {
	console.log("change color");
		
	var theme = snapshot.val();
	console.log(theme);


}