DromMenuForEdit();
async function DromMenuForEdit() {

    idRoom = takeCookie("idRoomFor");
    response = await fetch('http://localhost:5000/api/Rooms/' + idRoom, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    room = (await response.json());


    companies = await queryForCompanies();
    let company = "";
    for (let i = 0; i < companies.length; i++) {
        if (room.companyId == companies[i].companyId) {
            company = companies[i].nameCompany;
        }
    }
    document.getElementById('NameRoomU').value = room.nameRoom;
    document.getElementById('CoordinatesRoomU').value = room.coordinatesRoom;
    document.getElementById('dropdownMenuButtonU').innerText = company;
    
    companyMenu = document.getElementById('dropMenuCreateU');
    for (let i = 0; i < companies.length; i++) {

        let a_Menu = document.createElement('a');
        a_Menu.innerText = companies[i].nameCompany;
        a_Menu.href = "#";
        a_Menu.addEventListener("click", function () {
            document.getElementById('dropdownMenuButtonU').innerText = companies[i].nameCompany;
        }
            , false);
        a_Menu.classList.add("dropdown-item");
        companyMenu.appendChild(a_Menu);
    }
}
async function queryForCompanies() {
    response = await fetch('http://localhost:5000/api/Companies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    Compies = (await response.json());
    return Compies;
}

async function EditRoom() {
    _company = document.getElementById('dropdownMenuButtonU').innerText;
    _nameRoom = document.getElementById('NameRoomU').value;
    _CoordinatesRoom = document.getElementById('CoordinatesRoomU').value;

    companies = await queryForCompanies();

    let compId = "";
    for (let i = 0; i < companies.length; i++) {
        if (_company == companies[i].nameCompany) {
            compId = companies[i].companyId;
        }
    }
    var data = {
        RoomId: takeCookie("idRoomFor"),
        NameRoom: _nameRoom,
        CompanyId: compId,
        CoordinatesRoom: _CoordinatesRoom
    };

    console.log(JSON.stringify(data));
    response = await fetch('http://localhost:5000/api/Rooms', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
    location.href = "Index.html";
}