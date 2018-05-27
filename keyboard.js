var canvasId = "myCanvas";
var element = document.getElementById(canvasId);
var color = "brown";
var width = 5;
var join = "miter";
var cap = "round";
var xStart;
var yStart;
var xFinal;
var yFinal;
var x;
var y;

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

function draw() {
    drawLine(canvasId, color, width, join, cap, xStart, yStart, xFinal, yFinal)
    xStart = xFinal;
    yStart = yFinal;
}

function gettingCoords(whereMouseIsClicking) {
    x = whereMouseIsClicking.layerX;
    y = whereMouseIsClicking.layerY;
}

function pencilDown() {
    xStart = x;
    yStart = y;
    element.addEventListener("mousemove", gettingCoords);
    element.addEventListener("mousemove", function() { xFinal = x;
        yFinal = y; });
    element.addEventListener("mousemove", draw);
}

function pencilUp() {
    element.removeEventListener("mousemove", gettingCoords);
}

element.addEventListener("mousedown", gettingCoords);
element.addEventListener("mousedown", pencilDown);
element.addEventListener("mouseup", pencilUp);