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

    dt1.classList.add("col-sm-2");
    dt2.classList.add("col-sm-2");
    dt3.classList.add("col-sm-2");

    dt1.innerText = "newsId";
    dt2.innerText = "heading";
    dt3.innerText = "body";

    let dd1 = document.createElement('dd');
    let dd2 = document.createElement('dd');
    let dd3 = document.createElement('dd');

    dd1.classList.add("col-sm-10");
    dd2.classList.add("col-sm-10");
    dd3.classList.add("col-sm-10");

    dd1.innerText = jsonTable.newsId;
    dd2.innerText = jsonTable.heading;
    dd3.innerText = jsonTable.body;



    elem.appendChild(dt1);
    elem.appendChild(dd1);

    elem.appendChild(dt2);
    elem.appendChild(dd2);

    elem.appendChild(dt3);
    elem.appendChild(dd3);


}

async function deleteFunc() {
    response = await apiFetch('News/' + takeCookie("idNewsFor"), {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    location.href = "Index.html";
}

async function queryForTakeCompany() {
    response = await apiFetch('News/' + takeCookie("idNewsFor"), {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    news = (await response.json());
    return news;
}