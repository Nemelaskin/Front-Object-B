async function CreateNewUser() {
    _position = "worker";
    _role = "user";
    _FirstName = document.getElementById('FirstName').value;
    _SecondName = document.getElementById('SecondName').value;
    _Email = document.getElementById('Email').value;
    _Phone = document.getElementById('Phone').value;
    _Password = document.getElementById('Password').value;
    _RPassword = document.getElementById('Password2').value;

    positions = await queryForPositions();
    roles = await queryForRoles();

    let positionId = "";
    for (let i = 0; i < positions.length; i++) {
        if (_position == positions[i].namePosition) {
            positionId = positions[i].positionId;
        }
    }

    let roleId = "";
    for (let i = 0; i < roles.length; i++) {
        if (_role == roles[i].nameRole) {
            roleId = roles[i].roleId;
        }
    }
    if (_Password == _RPassword && _FirstName != "" && _SecondName != "" && _Email != "" &&
        _Phone != "" && _Password != "") {
        var data = {
            FirstName: _FirstName,
            SecondName: _SecondName,
            Email: _Email,
            Phone: _Phone,
            Password: _Password,
            PositionId: positionId,
            RoleId: roleId
        };
        console.log(JSON.stringify(data));
        response = await apiFetch('Users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        response = (await response.json());
        location.href = "../Login.html";
    } else {
        alert("inccorect input!");
        document.getElementById('FirstName').value = "";
        document.getElementById('SecondName').value = "";
        document.getElementById('Email').value = "";
        document.getElementById('Phone').value = "";
        document.getElementById('Password').value = "";
        document.getElementById('Password2').value = "";

    }
}


async function queryForPositions() {
    response = await apiFetch('Positions', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    position = (await response.json());
    return position;
}

async function queryForRoles() {
    response = await apiFetch('Roles', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    roles = (await response.json());
    return roles;
}