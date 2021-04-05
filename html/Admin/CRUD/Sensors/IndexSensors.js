async function queryForTakeSensors() {
  response = await fetch('http://localhost:5000/api/Sensors', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  });
  sensors = (await response.json());
  return sensors;
}

AddedTable();
async function AddedTable() {
  jsonTable = (await queryForTakeSensors());

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
    a1.addEventListener("click", function () {
      setCookie('idSensorFor', json[i].sensorId, { 'max-age': 3600, samesite: 'strict' });
      document.location.href = "Update.html";
    }, false);

    a2.href = "#";
    a2.innerText = "Delete";
    a2.addEventListener("click", function () {
      setCookie('idSensorFor', json[i].sensorId, { 'max-age': 3600, samesite: 'strict' });
      document.location.href = "Delete.html";
    }, false);

    tdForLink.appendChild(a1);
    tdForLink.appendChild(a2);

    console.log(json);

    td1.innerText = json[i].sensorId;
    td2.innerText = json[i].nameSensor;
    td3.innerText = json[i].userId;
    td4.innerText = json[i].coordinates;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(tdForLink);
    parent.appendChild(tr);
  }
}

