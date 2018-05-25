//console.log("Everything is OK");
var key = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

document.addEventListener("keyup", wormPath);

function DrawLine(canvasId, width, color, cap, xStart, yStart, xFinal, yFinal) {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(xStart, yStart);
    context.lineTo(xFinal, yFinal);
    context.stroke();
    context.closePath();
}

function wormPath(whichKeyIsPressing) {
	switch (whichKeyIsPressing.keyCode) {
		case key.UP:
		// Code here
		break;
		case key.DOWN:
		// Code here
		break;
		case key.LEFT:
		// Code here
		break;
		case key.RIGHT:
		// Code here
		break;
		default:
		break;
	}
}
