async function CreateNewPosition() {
    _nameRoles = document.getElementById('nameRole').value;

    var data = {
        NameRole: _nameRoles,
    };

    console.log(JSON.stringify(data));
    response = await apiFetch('Roles', {
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