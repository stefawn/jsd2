var food = "mac n cheese";

//var food = prompt("whats your favorite food?");

switch (food) {
	case "donuts":
		console.log("I like donuts");
		break;
	case "mac n cheese":
		console.log("I like mac n cheese");
		break;
	case "bananas":
		console.log("i like bananas");
		break;
	default:
		console.log("yum, "+ food);
}

//var grade = "C";
var grade = prompt("what's your grade?");

if (grade === "A") {
	console.log("Awesome job!");
} else if (grade === "B") {
	console.log("Good job!");
} else if (grade === "C") {
	console.log("C's get degrees");
} else if (grade === "D") {
	console.log("Not so good");
} else if (grade === "F") {
	console.log("Failing grade")
} else {
	console.log("Unexpected grade. SYSTEM ERROR!");
}

// or, you can do a switch statement

switch (grade) {
	case "A":
		console.log("Awesome job!");
		break;
	case "B":
		console.log("Good job!");
		break;
	case "C":
		console.log("C's get degrees");
		break;
	case "D":
		console.log("Not so good");
		break;
	case "F":
		console.log("Failing grade");
		break;
	default:
		console.log("Unexpected grade. SYSTEM ERROR");
}

switch (grade) {
	case "A":
	case "B":
	case "C":
		console.log("Pass!");
		break;
	case "D":
	case "F":
		console.log("Bitch slap");
		break
	default:
		console.log("ERROR");
}
