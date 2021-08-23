let canvas = document.getElementById('cl');
let ctx = canvas.getContext('2d');

let w;
let h;
let scale;

ChangeExtention();
ChangeScale();


canvas.width = w;
canvas.height = h;


ctx.beginPath();
ctx.fillStyle = "#C0C0C0";
ctx.rect(0, 0, w, h);
ctx.stroke();
ctx.fill();


let firstPoint = null;
let arrayRect = "";


canvas.onmousedown = function(e) {
    var loc = windowToCanvas(canvas, e.clientX, e.clientY);
    arrayRect += Math.trunc(loc.x);
    arrayRect += " ";
    arrayRect += Math.trunc(loc.y);
    arrayRect += " ";
    console.log(loc.x / scale + " " + loc.y / scale);
    if (firstPoint == null) {
        firstPoint = loc.x + " " + loc.y;
    } else {
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        firstPoint = firstPoint.split(' ');
        ctx.rect(Math.trunc(firstPoint[0]) - 5, Math.trunc(firstPoint[1]) - 5,
            Math.trunc(loc.x) - Math.trunc(firstPoint[0]), Math.trunc(loc.y) - Math.trunc(firstPoint[1]));
        ctx.fill();
        firstPoint = null;
    }
};



async function queryForTakeRooms() {
    response = await apiFetch('Rooms', {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    rooms = (await response.json());
    return rooms;
}

function windowToCanvas(canvas, x, y) {
    var bbox = canvas.getBoundingClientRect();
    return {
        x: x - bbox.left * (canvas.width / bbox.width),
        y: y - bbox.top * (canvas.height / bbox.height)
    };
}

function setCookieExtention(extn) {
    setCookie('WH', extn, { 'max-age': 3600, samesite: 'strict' });
    location.reload();
}

function setCookieScale(newScale) {
    setCookie('Scale', newScale, { 'max-age': 3600, samesite: 'strict' });
    location.reload();
}

function ChangeExtention() {
    let WH = takeCookie('WH');
    if (WH != "NotFound") {
        WH = WH.split(':');
        h = WH[1];
        w = WH[0];
    } else {
        w = 720;
        h = 1080;
        setCookie('WH', "1040:600", { 'max-age': 3600, samesite: 'strict' });
    }
}

function ChangeScale() {
    let newScale = takeCookie('Scale');
    if (newScale != "NotFound") {
        scale = newScale;
    } else {
        scale = 1;
        setCookie('Scale', scale, { 'max-age': 3600, samesite: 'strict' });
    }
}