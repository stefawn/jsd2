// Setup
// ----------------------------------------------



// Structure
// ----------------------------------------------
var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");
var trafficLight = document.querySelector("#traffic-light");

var runButton = document.querySelector(".run-button");


// Events
// ----------------------------------------------
stopButton.addEventListener("click", stop);
slowButton.addEventListener("click", slow);
goButton.addEventListener("click", go);
cautionButton.addEventListener("click", caution);

runButton.addEventListener("click", run);


// Event handlers
// ----------------------------------------------
function stop(e) {
  trafficLight.classList.add("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.remove("go");
}

function slow(e) {
  trafficLight.classList.remove("stop");
  trafficLight.classList.add("slow");
  trafficLight.classList.remove("go");
}

function go(e) {
  trafficLight.classList.remove("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.add("go");

}

function caution(e) {
  slow(e);
  setInterval(function() {
    trafficLight.classList.toggle("slow");
  }, 1000);
}

function run(e) {
  var runRed = setInterval(stop, 1000);
  var runYellow = setInterval(slow, 2000);
  var runGreen = setInterval(go, 3000);
}


// Update page functions
// ----------------------------------------------


// var light = {
//   "state": null,
//   "time": 2
// }

// /*add it*/
// function changeStop () {
//   stop.classList.add("current");
//   slow.classList.remove("current");
//   go.classList.remove("current");
//   // save state to localStorage
//   light.state = "stop";
//   localStorage.setItem("light", JSON.stringify(light));
// }

// function changeSlow () {
//   slow.classList.add("current");
//   stop.classList.remove("current");
//   go.classList.remove("current");
//   // save state to localStorage
//   light.state = "slow";
//   localStorage.setItem("light", JSON.stringify(light));
// }

// function changeGo () {
//   go.classList.add("current");
//   stop.classList.remove("current");
//   slow.classList.remove("current");
//   // save state to localStorage
//   light.state = "go";
//   localStorage.setItem("light", JSON.stringify(light));
// }

// stopButton.addEventListener("click", changeStop);
// slowButton.addEventListener("click", changeSlow);
// goButton.addEventListener("click", changeGo);


// var lastLight = JSON.parse(localStorage.getItem("light"));

// if (lastLight.state == "slow") {
//   changeSlow();
// } else if (lastLight.state == "stop") {
//   changeStop();
// } else if (lastLight.state == "go") {
//   changeGo();
// }

