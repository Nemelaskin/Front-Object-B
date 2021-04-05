AddedTable();

async function AddedTable() {
    jsonTable = (await queryForTakeUser());
    let elem = document.getElementById('tableDelete');
    CreateTableDelete(elem, jsonTable);
}

function CreateTableDelete(elem, jsonTable) {

    let dt1 = document.createElement('dt');
    let dt2 = document.createElement('dt');
    let dt3 = document.createElement('dt');
    let dt4 = document.createElement('dt');
    let dt5 = document.createElement('dt');
    let dt6 = document.createElement('dt');
    let dt7 = document.createElement('dt');
    let dt8 = document.createElement('dt');

    dt1.classList.add("col-sm-2");
    dt2.classList.add("col-sm-2");
    dt3.classList.add("col-sm-2");
    dt4.classList.add("col-sm-2");
    dt5.classList.add("col-sm-2");
    dt6.classList.add("col-sm-2");
    dt7.classList.add("col-sm-2");
    dt8.classList.add("col-sm-2");

    dt1.innerText = "userId";
    dt2.innerText = "firstName";
    dt3.innerText = "secondName";
    dt4.innerText = "email";
    dt5.innerText = "phone";
    dt6.innerText = "password";
    dt7.innerText = "roleId";
    dt8.innerText = "positionId";

    let dd1 = document.createElement('dd');
    let dd2 = document.createElement('dd');
    let dd3 = document.createElement('dd');
    let dd4 = document.createElement('dd');
    let dd5 = document.createElement('dd');
    let dd6 = document.createElement('dd');
    let dd7 = document.createElement('dd');
    let dd8 = document.createElement('dd');

    dd1.classList.add("col-sm-10");
    dd2.classList.add("col-sm-10");
    dd3.classList.add("col-sm-10");
    dd4.classList.add("col-sm-10");
    dd5.classList.add("col-sm-10");
    dd6.classList.add("col-sm-10");
    dd7.classList.add("col-sm-10");
    dd8.classList.add("col-sm-10");

    dd1.innerText = jsonTable.userId;
    dd2.innerText = jsonTable.firstName;
    dd3.innerText = jsonTable.secondName;
    dd4.innerText = jsonTable.email;
    dd5.innerText = jsonTable.phone;
    dd6.innerText = jsonTable.password;
    dd7.innerText = jsonTable.roleId;
    dd8.innerText = jsonTable.positionId;

    elem.appendChild(dt1);
    elem.appendChild(dd1);

    elem.appendChild(dt2);
    elem.appendChild(dd2);

    elem.appendChild(dt3);
    elem.appendChild(dd3);

    elem.appendChild(dt4);
    elem.appendChild(dd4);

    elem.appendChild(dt5);
    elem.appendChild(dd5);

    elem.appendChild(dt6);
    elem.appendChild(dd6);

    elem.appendChild(dt7);
    elem.appendChild(dd7);

    elem.appendChild(dt8);
    elem.appendChild(dd8);
}

async function deleteFunc() {
    response = await fetch('http://localhost:5000/api/Users/' + takeCookie("idUserFor"), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    location.href = "Index.html";
}

async function queryForTakeUser() {
    response = await fetch('http://localhost:5000/api/Users/' + takeCookie("idUserFor"), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    sensor = (await response.json());
    return sensor;
}