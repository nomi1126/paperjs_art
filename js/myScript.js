var mousePoint = view.center;
var amount = 25;
var colors = [new Color({
            hue:Math.random() * 360,
            saturation:1,
            brightness:1
}),
    new Color({
            hue:Math.random() * 360,
            saturation:1,
            brightness:1
}),
new Color({
            hue:Math.random() * 360,
            saturation:1,
            brightness:1
}),
new Color({
            hue:Math.random() * 360,
            saturation:1,
            brightness:1
}),
new Color({
            hue:Math.random() * 360,
            saturation:1,
            brightness:1
})];



for (var i = 0; i < amount; i++) {
    var rect = new Rectangle([0, 0], [100, 100]);
    rect.center = mousePoint;
    var path = new Path.Rectangle(rect, 8);
    path.fillColor = colors[i % colors.length];
    var scale = (1 - i / amount) * 20;
    path.scale(scale);
}

function onMouseMove(event) {
    mousePoint = event.point;
}

var children = project.activeLayer.children;
function onFrame(event) {
    for (var i = 0, l = children.length; i < l; i++) {
        var item = children[i];
        var delta = (mousePoint - item.position) / (i + 5);
        var velocity = Math.sin(Math.floor(event.time * 10)) > 0 ? 1.02 : 0.98;
        item.rotate(Math.sin((event.count + i) / 10) * 7);
        item.scale(velocity);
        if (delta.length > 0.1)
            item.position += delta;
    }
}
