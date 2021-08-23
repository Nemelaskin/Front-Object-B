let canv = document.getElementById('cl');
let ctxx = canvas.getContext('2d');

checkCoordinates();
async function checkCoordinates() {
    let rooms = await queryForTakeRooms();
    let testRoom = rooms[0].CoordinatesRoom;

}


canv.onmousedown = function(e) {
    var loc = windowToCanvas(canv, e.clientX, e.clientY);
    console.log(loc.x + " " + loc.y);

};


function windowToCanvas(canv, x, y) {
    var bbox = canv.getBoundingClientRect();
    return {
        x: x - bbox.left * (canv.width / bbox.width),
        y: y - bbox.top * (canv.height / bbox.height)
    };
}


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