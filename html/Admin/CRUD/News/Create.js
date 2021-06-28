async function CreateNewCompanies() {
    _MapLink = document.getElementById('heading').value;
    _Owner = document.getElementById('body').value;


    var data = {
        Heading: _MapLink,
        Body: _Owner
    };

    console.log(JSON.stringify(data));
    response = await apiFetch('News', {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    response = (await response.json());
    location.href = "Index.html";
}