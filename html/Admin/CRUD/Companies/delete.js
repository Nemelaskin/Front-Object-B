AddedTable();

async function AddedTable() {
    jsonTable = (await queryForTakeCompany());
    let elem = document.getElementById('tableDelete');
    CreateTableDelete(elem, jsonTable);
}

function CreateTableDelete(elem, jsonTable) {

    let dt1 = document.createElement('dt');
    let dt2 = document.createElement('dt');
    let dt3 = document.createElement('dt');
    let dt4 = document.createElement('dt');

    dt1.classList.add("col-sm-2");
    dt2.classList.add("col-sm-2");
    dt3.classList.add("col-sm-2");
    dt4.classList.add("col-sm-2");

    dt1.innerText = "companyId";
    dt2.innerText = "mapLink";
    dt3.innerText = "nameCompany";
    dt4.innerText = "owner";

    let dd1 = document.createElement('dd');
    let dd2 = document.createElement('dd');
    let dd3 = document.createElement('dd');
    let dd4 = document.createElement('dd');

    dd1.classList.add("col-sm-10");
    dd2.classList.add("col-sm-10");
    dd3.classList.add("col-sm-10");
    dd4.classList.add("col-sm-10");

    dd1.innerText = jsonTable.companyId;
    dd2.innerText = jsonTable.mapLink;
    dd3.innerText = jsonTable.nameCompany;
    dd4.innerText = jsonTable.owner;



    elem.appendChild(dt1);
    elem.appendChild(dd1);

    elem.appendChild(dt2);
    elem.appendChild(dd2);

    elem.appendChild(dt3);
    elem.appendChild(dd3);

    elem.appendChild(dt4);
    elem.appendChild(dd4);

}

async function deleteFunc() {
    response = await fetch('http://localhost:5000/api/Companies/' + takeCookie("idCompaniesFor"), {
        method: 'DELETE',
        headers: {
            "Authorization" : "Bearer "+ takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    location.href = "Index.html";
}

async function queryForTakeCompany() {
    response = await fetch('http://localhost:5000/api/Companies/' + takeCookie("idCompaniesFor"), {
        method: 'GET',
        headers: {
            "Authorization" : "Bearer "+ takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    room = (await response.json());
    return room;
}