async function CreateNewSensor() {
    _user = document.getElementById('dropdownMenuButton').innerText;
    _NameSensor = document.getElementById('NameSensor').value;
    _Coordinates = document.getElementById('Coordinates').value;

    users = await queryForUsers();
    
    let userId = "";
    for (let i = 0; i < users.length; i++) {
        if (_user == users[i].firstName) {
            userId = users[i].userId;
        }
    }
    var data = {
        NameSensor: _NameSensor,
        UserId: userId,
        Coordinates: _Coordinates
    };
    console.log(_NameSensor);
    console.log(userId);
    console.log(_Coordinates);

    console.log(JSON.stringify(data));
    response = await fetch('http://localhost:5000/api/Sensors', {
        method: 'POST',
        headers: {
            "Authorization" : "Bearer "+ takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    response = (await response.json());
    location.href = "Index.html";
}

async function queryForUsers() {
    response = await fetch('http://localhost:5000/api/Users', {
        method: 'GET',
        headers: {
            "Authorization" : "Bearer "+ takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    users = (await response.json());
    return users;
}

DromMenuForCreate();
async function DromMenuForCreate() {
    users = await queryForUsers();
    console.log(users);
    sensorMenu = document.getElementById('dropMenuCreate');
    for (let i = 0; i < users.length; i++) {

        let a_Menu = document.createElement('a');
        a_Menu.innerText = users[i].firstName;
        a_Menu.href = "#";
        a_Menu.addEventListener("click", function () {
            document.getElementById('dropdownMenuButton').innerText = users[i].firstName;
        }
            , false);
        a_Menu.classList.add("dropdown-item");
        sensorMenu.appendChild(a_Menu);
    }
}


