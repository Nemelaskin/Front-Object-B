async function CreateNewSensor() {
    let _user = document.getElementById('dropdownMenuButton').innerText;
    let _NameSensor = document.getElementById('NameSensor').value;
    let _X = document.getElementById('X').value;
    let _Y = document.getElementById('Y').value;

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
        X: _X,
        Y: _Y
    };

    response = await apiFetch('Sensors', {
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

async function queryForUsers() {
    response = await apiFetch('Users', {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + takeCookie("JWT"),
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
        a_Menu.addEventListener("click", function() {
            document.getElementById('dropdownMenuButton').innerText = users[i].firstName;
        }, false);
        a_Menu.classList.add("dropdown-item");
        sensorMenu.appendChild(a_Menu);
    }
}