var mousePos,
    mouseDelta;

function onMouseMove(event) {
      mousePos = event.middlePoint;
      mouseDelta = event.delta.length / 2;
}

function onFrame(event) {
    var circle = new Path.Circle({
        center : mousePos,
        radius : mouseDelta
    });
    circle.strokeColor = "black";
    circle.fillColoe   = "white";
}
