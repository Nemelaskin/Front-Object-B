

function createTable(){
    response = await fetch('http://localhost:5000/api/RatingTable/index', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      jsonTable = (await response.json());

      //table = document.getElementById('ratingTable').innerHTML = `<table class ="table table-sm table-striped table-bordered"></table>`;
      
      
}

let elem = document.querySelector('#elem');
      
testCreate(elem,3,3);

function testCreate(parent,colms,rows){

  let table = document.createElement('table');

  for(let i = 0; i < rows; i++){
    let tr = document.createElement('tr');

    for(let j = 0; j< colms; j++){
      let td = document.createElement('td');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  parent.appendChild(table);
}