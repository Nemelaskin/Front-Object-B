AddedTable();

async function AddedTable() {
    jsonTable = (await queryForTakeRole());
    let elem = document.getElementById('tableDelete');
    CreateTableDelete(elem, jsonTable);
}

function CreateTableDelete(elem, jsonTable) {

    let dt1 = document.createElement('dt');
    let dt2 = document.createElement('dt');

    dt1.classList.add("col-sm-2");
    dt2.classList.add("col-sm-2");

    dt1.innerText = "roleId";
    dt2.innerText = "nameRole";

    let dd1 = document.createElement('dd');
    let dd2 = document.createElement('dd');

    dd1.classList.add("col-sm-10");
    dd2.classList.add("col-sm-10");

    dd1.innerText = jsonTable.roleId;
    dd2.innerText = jsonTable.nameRole;



    elem.appendChild(dt1);
    elem.appendChild(dd1);

    elem.appendChild(dt2);
    elem.appendChild(dd2);


}

async function deleteFunc() {
    response = await apiFetch('Roles/' + takeCookie("idRoleFor"), {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    location.href = "Index.html";
}

async function queryForTakeRole() {
    response = await apiFetch('Roles/' + takeCookie("idRoleFor"), {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    position = (await response.json());
    return position;
}