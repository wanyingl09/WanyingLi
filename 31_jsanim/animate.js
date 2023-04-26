// Team TBD :: James Yu, Wanying Li
// SoftDev pd8
// K31 -- canvas based JS animation
// 2023-04-25t

var c = document.getElementById("playground"); // get canvas
var dotButton = document.getElementById("buttonCircle"); // get dot button
var stopButton = document.getElementById("buttonStop"); // get stop button

var ctx = c.getContext("2d");
ctx.fillStyle = "cyan";
ctx.strokeStyle = "black";

var requestID;

var clear = (e) => {
    // console.log("clear invoked...");
    ctx.clearRect(0, 0, c.width, c.height); //clears the entire canvas rectangle
}

var radius = 0;
var growing = true;

var drawDot = () => {
    // console.log(requestID); // requestID keeps increasing

    //stops the Animaniac button from speeding up the circle
    window.cancelAnimationFrame(requestID); // the cancellation uses the last requestId
    clear();
    // start drawing circle 
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // console.log(radius); // radius is bounded between [0, 250]

    // if the radius touches the edge of the canvas...stop growing
    if (radius == c.width/2) {
        growing = false;
    }
    // if the radius decreases to 0...start growing + prevent negative radius
    if (radius == 0) {
        growing = true;
    }

    if (growing) {
        radius++;
    } else {
        radius--;
    }

    //pass in the function you want to animate
    // to update the requestID each time drawDot is called
    requestID = window.requestAnimationFrame(drawDot);  // this line can be place anywhere in the function as long as it's after canacelAnimationFrame
};

var stopIt = () => {
    console.log("stopIt invoked...");
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);