let canvas = document.getElementById('cl');
let ctx = canvas.getContext('2d');



function drawPoint(data) {
    ctx.clearRect(0, 0, 2000, 2100);
    var convertedData = JSON.parse(data);
    var pi = Math.PI;

    for (var i = 0; i < convertedData.length; i++) {
        var coords = "";

        coords += convertedData[i]['Coordinates'];
        coords = coords.split('.');
        for (var j = 0; j < 2; j++) {
            ctx.beginPath();
            ctx.lineWidth = "4px";
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.arc(coords[0], coords[1], 5, 0, 2 * pi, false);
            ctx.stroke();
            ctx.fill();
        }
    }
}