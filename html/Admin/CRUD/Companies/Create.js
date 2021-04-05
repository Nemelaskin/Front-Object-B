async function CreateNewCompanies() {
    _NameCompanies = document.getElementById('NameCompanies').value;
    _MapLink = document.getElementById('MapLink').value;
    _Owner = document.getElementById('Owner').value;

    
    var data = {
        MapLink: _MapLink,
        NameCompany: _NameCompanies,
        Owner: _Owner
    };

    console.log(JSON.stringify(data));
    response = await fetch('http://localhost:5000/api/Companies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    response = (await response.json());
    location.href = "Index.html";
}