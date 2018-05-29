var canvasId = "myCanvas";
var color = "#ffffff";
var width = 1;
var join = "round";
var cap = "round";
var xStart;
var yStart;
var xFinal;
var yFinal;
var x;
var y;

var element = document.getElementById(canvasId);
var colorText = document.getElementById("txtColor");
var lineWidthText = document.getElementById("txtLineWidth");
var bevelRadio = document.getElementById("radBevel");
var roundRadioA = document.getElementById("radRoundA");
var miterRadio = document.getElementById("radMiter");
var buttRadio = document.getElementById("radButt");
var roundRadioB = document.getElementById("radRoundB");
var squareRadio = document.getElementById("radSquare");
var applyButton = document.getElementById("btnApply");
var clearButton = document.getElementById("btnClear");

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
    element.addEventListener("mousemove", function() {
        xFinal = x;
        yFinal = y;
    });
    element.addEventListener("mousemove", draw);
}

function pencilUp() {
    element.removeEventListener("mousemove", gettingCoords);
}

function clear() {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;
    context.clearRect(0, 0, w, h);
}

function apply() {
    color = colorText.value;
    width = lineWidthText.value;
    if (bevelRadio.checked == true) {
        join = "bevel";
    } else if (roundRadioA.checked == true) {
        join = "round";
    } else {
        join = "miter";
    }
    if (buttRadio.checked == true) {
        cap = "butt";
    } else if (roundRadioB.checked == true) {
        cap = "round";
    } else {
        cap = "square";
    }
}

clearButton.addEventListener("click", clear);
element.addEventListener("mousedown", gettingCoords);
element.addEventListener("mousedown", apply);
element.addEventListener("mousedown", pencilDown);
element.addEventListener("mouseup", pencilUp);