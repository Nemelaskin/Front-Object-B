fillRole();
async function fillRole(){
    position = await (queryForTakeRole());

    document.getElementById('NameRoleU').value = position.nameRole;
}

async function EditRole() {
    _nameRole = document.getElementById('NameRoleU').value;

    var data = {
        RoleId:  takeCookie("idRoleFor"),
        NameRole: _nameRole,
    };

    console.log(JSON.stringify(data));
    response = await fetch('http://localhost:5000/api/Roles', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    location.href = "Index.html";
}


async function queryForTakeRole() {
    response = await fetch('http://localhost:5000/api/Roles/' + takeCookie("idRoleFor"), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    position = (await response.json());
    return position;
}