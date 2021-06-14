fillRole();
async function fillRole() {
    position = await (queryForTakeRole());

    document.getElementById('NameRoleU').value = position.nameRole;
}

async function EditRole() {
    _nameRole = document.getElementById('NameRoleU').value;

    var data = {
        RoleId: takeCookie("idRoleFor"),
        NameRole: _nameRole,
    };

    console.log(JSON.stringify(data));
    response = await apiFetch('Roles', {
        method: 'PUT',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    location.href = "Index.html";
}


async function queryForTakeRole() {
    response = await apiFetch('Roles/' + takeCookie("idRoleFor"), {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    position = (await response.json());
    return position;
}