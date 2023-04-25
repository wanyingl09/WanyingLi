var c = document.getElementById("playground"); 
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

var ctx = c.getContext("2d");

ctx.fillStyle = "cyan";

var requestID;

var clear = (e) => {
    ctx.clearRect(0, 0, c.width, c.height); //clears the entire canvas rectangle
}

var radius = 0;
var growing = true;

var drawDot = () => {
    clear();
    window.requestAnimationFrame(1000);

}

dotButton.addEventListener("click", drawDot);