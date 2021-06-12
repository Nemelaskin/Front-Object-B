
AddedTable();

async function AddedTable(){
    response = await fetch('http://localhost:5000/api/RatingTable/index', {
        method: 'GET',
        headers: {
          "Authorization" : "Bearer "+ takeCookie("JWT"),
          'Content-Type': 'application/json;charset=utf-8'
        },
      });
    jsonTable = (await response.json());

    console.log(jsonTable);
    
    let elem = document.getElementById('testing');
    CreateTable(elem, jsonTable);
      
}

function CreateTable(parent, json){

  for(let i = 0; i < json.length; i++){
    let tr = document.createElement('tr');

      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');

      td1.innerText = json[i].position;
      td2.innerText = json[i].name;
      td3.innerText = json[i].surName;
      td4.innerText = json[i].email;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

    parent.appendChild(tr);
  }
}