var canvasId  = "myCanvas";
var element = document.getElementById(canvasId);
var color = "red";
var width = 1;
var join = "round";
var cap = "round";
var xStart;
var yStart;
var xFinal;
var yFinal;

function drawLine(canvasId, color, width, join, cap, xStart, yStart, xFinal, yFinal) {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = width;
    context.lineJoin = join;
    context.lineCap = cap;
    context.moveTo(xStart, yStart);
    context.lineTo(xFinal, yFinal);
    context.stroke();
    context.closePath();
}

function gettingX(whereMouseIsClicking) {
	var xOffset = element.offsetLeft;
	var xClient = whereMouseIsClicking.clientX;
	var x = xClient - xOffset;
	console.log(x);
}

function gettingY(whereMouseIsClicking) {
	var yOffset = element.offsetTop;
	var yClient = whereMouseIsClicking.clientY
	var y = yClient - yOffset;
	console.log(y);
}

function wormPath(whereMouseIsClicking) {
	drawLine(canvasId, color, width, join, cap, xStart, yStart, xFinal, yFinal)
}

function pencilDown() {
	element.addEventListener("mousemove", gettingX);
	element.addEventListener("mousemove", gettingY);
}

function pencilUp() {
	element.removeEventListener("mousemove", gettingX);
	element.removeEventListener("mousemove", gettingY);
}

document.addEventListener("mousedown", pencilDown);
document.addEventListener("mouseup", pencilUp);