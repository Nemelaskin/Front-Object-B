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

AddedTable();
async function AddedTable() {
    jsonTable = (await queryForTakeRooms());

    let elem = document.getElementById('indexTable');
    CreateTableForIndex(elem, jsonTable);

}

function CreateTableForIndex(parent, json) {

    for (let i = 0; i < json.length; i++) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let tdForLink = document.createElement('td');
        let a1 = document.createElement('a');
        let a2 = document.createElement('a');

        a1.href = "#";
        a1.innerText = "Edit | ";
        a1.addEventListener("click", function() {
            setCookie('idRoomFor', json[i].roomId, { 'max-age': 3600, samesite: 'strict' });
            document.location.href = "Update.html";
        }, false);

        a2.href = "#";
        a2.innerText = "Delete";
        a2.addEventListener("click", function() {
            setCookie('idRoomFor', json[i].roomId, { 'max-age': 3600, samesite: 'strict' });
            document.location.href = "Delete.html";
        }, false);

        tdForLink.appendChild(a1);
        tdForLink.appendChild(a2);

        td1.innerText = json[i].roomId;
        td2.innerText = json[i].nameRoom;
        td3.innerText = json[i].companyId;
        td4.innerText = json[i].coordinatesRoom;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(tdForLink);
        parent.appendChild(tr);
    }
}