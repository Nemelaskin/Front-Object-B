async function CreateNewUser() {
    _position = document.getElementById('dropdownMenuButton').innerText;
    _role = document.getElementById('dropdownMenuButton2').innerText;
    _FirstName = document.getElementById('FirstName').value;
    _SecondName = document.getElementById('SecondName').value;
    _Email = document.getElementById('Email').value;
    _Phone = document.getElementById('Phone').value;
    _Password = document.getElementById('Password').value;

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
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    response = (await response.json());
    location.href = "Index.html";
}

DromMenuForCreate();
async function DromMenuForCreate() {
    positions = await queryForPositions();
    roles = await queryForRoles();

    sensorMenu = document.getElementById('dropMenuCreate');
    for (let i = 0; i < positions.length; i++) {

        let a_Menu = document.createElement('a');
        a_Menu.innerText = positions[i].namePosition;
        a_Menu.href = "#";
        a_Menu.addEventListener("click", function () {
            document.getElementById('dropdownMenuButton').innerText = positions[i].namePosition;
        }
            , false);
        a_Menu.classList.add("dropdown-item");
        sensorMenu.appendChild(a_Menu);
    }

    sensorMenu2 = document.getElementById('dropMenuCreate2');
    for (let i = 0; i < roles.length; i++) {

        let a_Menu = document.createElement('a');
        a_Menu.innerText = roles[i].nameRole;
        a_Menu.href = "#";
        a_Menu.addEventListener("click", function () {
            document.getElementById('dropdownMenuButton2').innerText = roles[i].nameRole;
        }
            , false);
        a_Menu.classList.add("dropdown-item");
        sensorMenu2.appendChild(a_Menu);
    }
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

