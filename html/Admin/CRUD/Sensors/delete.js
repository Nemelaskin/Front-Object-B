AddedTable();

async function AddedTable() {
    jsonTable = (await queryForTakeSensor());
    let elem = document.getElementById('tableDelete');
    CreateTableDelete(elem, jsonTable);
}

function CreateTableDelete(elem, jsonTable) {

    let dt1 = document.createElement('dt');
    let dt2 = document.createElement('dt');
    let dt3 = document.createElement('dt');

    dt1.classList.add("col-sm-2");
    dt2.classList.add("col-sm-2");
    dt3.classList.add("col-sm-2");

    dt1.innerText = "sensorId";
    dt2.innerText = "nameSensor";
    dt3.innerText = "userId";

    let dd1 = document.createElement('dd');
    let dd2 = document.createElement('dd');
    let dd3 = document.createElement('dd');

    dd1.classList.add("col-sm-10");
    dd2.classList.add("col-sm-10");
    dd3.classList.add("col-sm-10");

    dd1.innerText = jsonTable.sensorId;
    dd2.innerText = jsonTable.nameSensor;
    dd3.innerText = jsonTable.userId;

    elem.appendChild(dt1);
    elem.appendChild(dd1);

    elem.appendChild(dt2);
    elem.appendChild(dd2);

    elem.appendChild(dt3);
    elem.appendChild(dd3);

}

async function deleteFunc() {
    response = await fetch('http://localhost:5000/api/Sensors/' + takeCookie("idSensorFor"), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    location.href = "Index.html";
}

async function queryForTakeSensor() {
    response = await fetch('http://localhost:5000/api/Sensors/' + takeCookie("idSensorFor"), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    sensor = (await response.json());
    return sensor;
}