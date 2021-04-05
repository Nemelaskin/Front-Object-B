DromMenuForEdit();
async function DromMenuForEdit() {

    idUser = takeCookie("idUserFor");
    response = await fetch('http://localhost:5000/api/Users/' + idUser, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    user = (await response.json());


    positions = await queryForPositions();
    roles = await queryForRoles();
    let position = "";
    let role = "";


    for (let i = 0; i < positions.length; i++) {
        if (user.positionId == positions[i].positionId) {
            position = positions[i].namePosition;
        }
    }

    for (let i = 0; i < roles.length; i++) {
        if (user.roleId == roles[i].roleId) {
            role = roles[i].nameRole;
        }
    }

    document.getElementById('FirstNameU').value = user.firstName;
    document.getElementById('SecondNameU').value = user.secondName;
    document.getElementById('EmailU').value = user.email;
    document.getElementById('PhoneU').value = user.phone;
    document.getElementById('PasswordU').value = user.password;

    document.getElementById('dropdownMenuButtonU').innerText = position;
    document.getElementById('dropdownMenuButtonU2').innerText = role;

    sensorMenu = document.getElementById('dropMenuCreateU');
    for (let i = 0; i < positions.length; i++) {

        let a_Menu = document.createElement('a');
        a_Menu.innerText = positions[i].namePosition;
        a_Menu.href = "#";
        a_Menu.addEventListener("click", function () {
            document.getElementById('dropdownMenuButtonU').innerText = positions[i].namePosition;
        }
            , false);
        a_Menu.classList.add("dropdown-item");
        sensorMenu.appendChild(a_Menu);
    }

    sensorMenu2 = document.getElementById('dropMenuCreateU2');
    for (let i = 0; i < roles.length; i++) {

        let a_Menu = document.createElement('a');
        a_Menu.innerText = roles[i].nameRole;
        a_Menu.href = "#";
        a_Menu.addEventListener("click", function () {
            document.getElementById('dropdownMenuButtonU2').innerText = roles[i].nameRole;
        }
            , false);
        a_Menu.classList.add("dropdown-item");
        sensorMenu2.appendChild(a_Menu);
    }
}


async function EditUser() {
    _FirstName = document.getElementById('FirstNameU').value;
    _SecondName = document.getElementById('SecondNameU').value;
    _Email = document.getElementById('EmailU').value;
    _Phone = document.getElementById('PhoneU').value;
    _Password = document.getElementById('PasswordU').value;

    _position = document.getElementById('dropdownMenuButtonU').innerText;
    _role = document.getElementById('dropdownMenuButtonU2').innerText;

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

    var data = {
        UserId: takeCookie("idUserFor"),
        FirstName: _FirstName,
        SecondName: _SecondName,
        Email: _Email,
        Phone: _Phone,
        Password: _Password,
        PositionId: positionId,
        RoleId: roleId
    };

    console.log(JSON.stringify(data));
    response = await fetch('http://localhost:5000/api/Users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    location.href = "Index.html";
}

async function queryForPositions() {
    response = await fetch('http://localhost:5000/api/Positions', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    position = (await response.json());
    return position;
}

async function queryForRoles() {
    response = await fetch('http://localhost:5000/api/Roles', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    roles = (await response.json());
    return roles;
}