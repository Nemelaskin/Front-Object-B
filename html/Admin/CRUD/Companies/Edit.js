fillCompany();
async function fillCompany(){
    company = await (queryForTakeCompany());

    document.getElementById('NameCompaniesU').value = company.nameCompany;
    document.getElementById('MapLinkU').value = company.mapLink;
    document.getElementById('OwnerU').value = company.owner;
}

async function EditCompany() {
    _nameCompany = document.getElementById('NameCompaniesU').value;
    _mapLink = document.getElementById('MapLinkU').value;
    _owner = document.getElementById('OwnerU').value;

    var data = {
        CompanyId: takeCookie("idCompaniesFor"),
        MapLink: _mapLink,
        NameCompany: _nameCompany,
        Owner: _owner
    };

    console.log(JSON.stringify(data));
    response = await fetch('http://localhost:5000/api/Companies', {
        method: 'PUT',
        headers: {
            "Authorization" : "Bearer "+ takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
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