DromMenuForEdit();
async function DromMenuForEdit() {

    idSensor = takeCookie("idSensorFor");
    response = await fetch('http://localhost:5000/api/Sensors/' + idSensor, {
        method: 'GET',
        headers: {
            "Authorization" : "Bearer "+ takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    sensor = (await response.json());


    users = await queryForUsers();
    let user = "";
    for (let i = 0; i < users.length; i++) {
        if (sensor.userId == users[i].userId) {
            user = users[i].firstName;
        }
    }
    document.getElementById('NameSensorU').value = sensor.nameSensor;
    document.getElementById('CoordinatesU').value = sensor.coordinates;
    document.getElementById('dropdownMenuButtonU').innerText = user;
    
    sensorMenu = document.getElementById('dropMenuCreateU');
    for (let i = 0; i < users.length; i++) {

        let a_Menu = document.createElement('a');
        a_Menu.innerText = users[i].firstName;
        a_Menu.href = "#";
        a_Menu.addEventListener("click", function () {
            document.getElementById('dropdownMenuButtonU').innerText = users[i].firstName;
        }
            , false);
        a_Menu.classList.add("dropdown-item");
        sensorMenu.appendChild(a_Menu);
    }
}


async function EditSensor() {
    _user = document.getElementById('dropdownMenuButtonU').innerText;
    _NameSensor = document.getElementById('NameSensorU').value;
    _Coordinates = document.getElementById('CoordinatesU').value;

    users = await queryForUsers();
    
    let userId = "";
    for (let i = 0; i < users.length; i++) {
        if (_user == users[i].firstName) {
            userId = users[i].userId;
        }
    }
    var data = {
        SensorId: takeCookie("idSensorFor"),
        NameSensor: _NameSensor,
        UserId: userId,
        Coordinates: _Coordinates
    };

    console.log(JSON.stringify(data));
    response = await fetch('http://localhost:5000/api/Sensors', {
        method: 'PUT',
        headers: {
            "Authorization" : "Bearer "+ takeCookie("JWT"),
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
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