//Structure
var list = document.querySelector(".message-board");
var message = document.querySelector("#message");
var li = document.querySelector(".post");

//Establish Firebase connection 
var firebaseReference = new Firebase("https://fanpage-b074d.firebaseio.com/");

//Setup
var messageBoard = {
	"comments": []
};

// Events (rename all)
window.addEventListener("load", getComments);
form.addEventListener("submit", addItem);

// Event handler (rename all)

function addItem(event){
	event.preventDefault();

	//create JSON for new item
	var item = {
		post: message.value,
	};
	//function that creates comment
	createPost(item);
};


function createPost(item){
	var li = document.createElement("li");

	message.textContent = item.post;

	list.appendChild(li);
};


function changeData(e) {
	if (e.val() === null) {
		return
	}

	list.innerHTML = "";

	//function to 
};

function getComments() {
	firebaseReference.on("value", changeData);
};