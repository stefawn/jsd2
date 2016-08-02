
// Structure
var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");
var trafficLight = document.querySelector("#traffic-light");
var runButton = document.querySelector(".run-button");


// Event Listeners
stopButton.addEventListener("click", stop);
slowButton.addEventListener("click", slow);
goButton.addEventListener("click", go);
cautionButton.addEventListener("click", caution);
runButton.addEventListener("click", run);


// Functions
function stop(e) {
  trafficLight.classList.add("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.remove("go");
  console.log('red');
}

function slow(e) {
  trafficLight.classList.remove("stop");
  trafficLight.classList.add("slow");
  trafficLight.classList.remove("go");
  console.log('yellow');

}

function go(e) {
  trafficLight.classList.remove("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.add("go");
  console.log('green');
}

function caution(e) {
  slow(e);
  setInterval(function() {
    trafficLight.classList.toggle("slow");
  }, 1000);
}

function run(e) {
  interval(e);
  clearTimeout(interval(e));
}

function interval(e) {  //needs work..
  setInterval(stop, 1000);
  setInterval(slow, 2000);
  setInterval(go, 3000);
}

