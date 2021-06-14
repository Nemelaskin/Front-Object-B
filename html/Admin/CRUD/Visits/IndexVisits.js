async function queryForTakeUsers() {
    response = await apiFetch('Visits', {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    users = (await response.json());
    return users;
}

AddedTable();
async function AddedTable() {
    jsonTable = (await queryForTakeUsers());

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

        td1.innerText = json[i].visitId;
        td2.innerText = json[i].userId;
        td3.innerText = json[i].visitTime;
        td4.innerText = json[i].roomId;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(tdForLink);
        parent.appendChild(tr);
    }
}