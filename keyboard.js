var key = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var x = 150;
var y = 150;

document.addEventListener("keydown", wormPath);

function DrawLine(canvasId, color, width, join, cap, xStart, yStart, xFinal, yFinal) {
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

function wormPath(whichKeyIsPressing) {
	// console.log (whichKeyIsPressing.keyCode);
	var advance = 1;
	var name  = "myCanvas";
	var color = "red";
	var width = 2.5;
	var join = "round";
	var cap = "round";

	switch (whichKeyIsPressing.keyCode) {
		case key.UP:
		DrawLine(name, width, color, join, cap, x, y, x, y - advance);
		x = x;
		y = y - advance;
		break;
		case key.DOWN:
		DrawLine(name, width, color, join, cap, x, y, x, y + advance);
		x = x
		y = y + advance;
		break;
		case key.LEFT:
		DrawLine(name, width, color, join, cap, x, y, x - advance, y);
		x = x - advance;
		y = y
		break;
		case key.RIGHT:
		DrawLine(name, width, color, join, cap, x, y, x + advance, y);
		x = x + advance;
		y = y;
		break;
		default:
		break;
	}
}
