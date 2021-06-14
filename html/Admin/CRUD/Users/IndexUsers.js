async function queryForTakeUsers() {
    response = await apiFetch('Users', {
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
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        let tdForLink = document.createElement('td');
        let a1 = document.createElement('a');
        let a2 = document.createElement('a');

        a1.href = "#";
        a1.innerText = "Edit | ";
        a1.addEventListener("click", function() {
            setCookie('idUserFor', json[i].userId, { 'max-age': 3600, samesite: 'strict' });
            document.location.href = "Update.html";
        }, false);

        a2.href = "#";
        a2.innerText = "Delete";
        a2.addEventListener("click", function() {
            setCookie('idUserFor', json[i].userId, { 'max-age': 3600, samesite: 'strict' });
            document.location.href = "Delete.html";
        }, false);

        tdForLink.appendChild(a1);
        tdForLink.appendChild(a2);

        td1.innerText = json[i].userId;
        td2.innerText = json[i].firstName;
        td3.innerText = json[i].secondName;
        td4.innerText = json[i].email;
        td5.innerText = json[i].phone;
        td8.innerText = json[i].password;
        td6.innerText = json[i].roleId;
        td7.innerText = json[i].positionId;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td8);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(tdForLink);
        parent.appendChild(tr);
    }
}