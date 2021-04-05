async function queryForPositions() {
  response = await fetch('http://localhost:5000/api/Positions', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
  });
  positions = (await response.json());
  return positions;
}

AddedTable();
async function AddedTable() {
  jsonTable = (await queryForPositions());

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
      setCookie('idPositionFor', json[i].positionId, { 'max-age': 3600, samesite: 'strict' });
      document.location.href = "Update.html";
    }, false);

    a2.href = "#";
    a2.innerText = "Delete";
    a2.addEventListener("click", function () {
      setCookie('idPositionFor', json[i].positionId, { 'max-age': 3600, samesite: 'strict' });
      document.location.href = "Delete.html";
    }, false);

    tdForLink.appendChild(a1);
    tdForLink.appendChild(a2);

    td1.innerText = json[i].positionId;
    td2.innerText = json[i].namePosition;
    td3.innerText = json[i].salary;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(tdForLink);
    parent.appendChild(tr);
  }
}

