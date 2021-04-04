fillDropmenuCompany();
fillDropmenuRooms();


if (document.cookie == null) {
    STATUS = "develop";
    setCookie('STATUS', STATUS, { 'max-age': 3600, samesite: 'strict' });
}

var STATUS = takeCookie("STATUS");

let number = 1;
for (var i = 0; i < 52 * 30; i++) { //52 ряд
    CreateBlock(number);
    number++;
}

function CreateBlock(id) {
    var content = document.querySelector("#places")
    var node = document.createElement("p");
    node.id = id;
    node.style.width = "20px";
    node.style.background = "RED";
    node.style.height = "20px";
    node.style.float = "left";
    node.style.marginBottom = "0px";
    node.setAttribute("ordered", 0);
    node.addEventListener('click', SwitchState);
    content.appendChild(node);
}
let num = 0;
//Закрашивание квадратов
function SwitchState() {
    if (this.getAttribute("ordered") == 2) return;
    if (this.getAttribute("ordered") == 1) {
        this.setAttribute("ordered", 0);
        this.style.background = "RED"
        num--;
    } else {
        let ids = Number(this.id);
        let leftItem = document.getElementById(String(ids - 1));
        let rightItem = document.getElementById(String(ids + 1));
        let upItem = document.getElementById(String(ids - 52));
        let downItem = document.getElementById(String(ids + 52));
        if (num == 0 && STATUS == "develop") {
            this.style.background = "Blue"
            this.setAttribute("ordered", 1);
            num++;
        }
        if ((rightItem.getAttribute("ordered") == 0 && leftItem.getAttribute("ordered") == 1
            || rightItem.getAttribute("ordered") == 1 && leftItem.getAttribute("ordered") == 0)
            || upItem.getAttribute("ordered") == 1 || downItem.getAttribute("ordered") == 1) {
            this.style.background = "Blue"
            this.setAttribute("ordered", 1);
            num++;
        }
        else {

            return;
        }

    }

}

let newRoom = "";
function newTestButt() {
    var places = $('[ordered = 1]');
    if (places != undefined && places.length > 0) {

        for (var i = 0; i < places.length; i++) {
            newRoom += places[i].getAttribute("id") + " ";

            places[i].style.background = "Green";
            places[i].setAttribute("ordered", 2);
            num = 0;
            location.href = location.href;
        }

        postData(newRoom);
    }
}

postData(newRoom);

async function postData(newRoom) {
    let actualRoom;
    tempAllRooms = await queryForRooms();
    tempCompies = await queryForCompanies();
    let compId="";
    for(let i = 0; i < tempCompies.length; i++){
        if(document.getElementById('CompanyNow').innerText == tempCompies[i].nameCompany ){
            compId = tempCompies[i].companyId;
        }
    }
    
    for(let i = 0; i < tempAllRooms.length; i++){
        if(tempAllRooms[i].nameRoom == document.getElementById('roomNow').innerText && tempAllRooms[i].companyId == compId){
            actualRoom = tempAllRooms[i].roomId;
        }
    }

    fetch("http://localhost:5000/MapComp/CreateRoom?selectRoomId=" + actualRoom + "&newRoom=" + newRoom)
        .then(response => {

            return response.json();
        }).then(data => {
            countRooms(data);
            SelectRoom(data);
        });
}

async function SelectRoom(data) {
    let actualRoom;
    tempAllRooms = await queryForRooms();
    tempCompies = await queryForCompanies();
    let compId="";
    for(let i = 0; i < tempCompies.length; i++){
        if(document.getElementById('CompanyNow').innerText == tempCompies[i].nameCompany ){
            compId = tempCompies[i].companyId;
        }
    }
    
    for(let i = 0; i < tempAllRooms.length; i++){
        if(tempAllRooms[i].nameRoom == document.getElementById('roomNow').innerText && tempAllRooms[i].companyId == compId){
            actualRoom = tempAllRooms[i].roomId;
        }
    }
    console.log(actualRoom);
    let room = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i]['RoomId'] == actualRoom) {
            room = data[i]['CoordinatesRoom'];
        }
    }
    if (room != "") {
        room = room.split(" ");
        //console.log("room: " + room);
        if (STATUS == "develop") {
            var places = $('[ordered = 2]');
            for (var i = 0; i < places.length; i++) {
                for (var j = 0; j < room.length; j++) {
                    if (places[i].getAttribute("id") == room[j]) {
                        places[i].style.background = "Blue";
                        places[i].setAttribute("ordered", 1);
                        num++;
                    }
                }
            }
        }

    }
}

function countRooms(data) {
    var nowCompany = document.getElementById("CompanyNow").innerText;
    let allRooms = ""; 
    for (var i = 0; i < data.length; i++) {
        if (data[i]['Company']['NameCompany'] == nowCompany) {
            allRooms += data[i]['CoordinatesRoom'] + " ";
        }
    }
    blockRooms(allRooms);
}

function blockRooms(allRooms) {
    allRooms = allRooms.split(' ');
    var places = $('[ordered = 0]');

    if (places != undefined && places.length > 0) {

        for (var i = 0; i < places.length; i++) {
            for (var j = 0; j < allRooms.length; j++) {
                if (places[i].getAttribute("id") == allRooms[j]) {
                    places[i].style.background = "Green";
                    places[i].setAttribute("ordered", 2);

                }
            }
        }
    }
}

function statusFunc() {
    if (STATUS == "develop")
        STATUS = "save";
    else
        STATUS = "develop";
    setCookie('STATUS', STATUS, { 'max-age': 3600, samesite: 'strict' });
    location.reload();
}

async function fillDropmenuCompany(){

    
    let companies = (await queryForCompanies());
    
    if( takeCookie("company")!= "NotFound"){
        document.getElementById('CompanyNow').innerText = takeCookie("company");
    }else{
        setCookie('company', companies[0].nameCompany, { 'max-age': 3600, samesite: 'strict' });
        document.getElementById('CompanyNow').innerText = takeCookie("company");
    }

    companyMenu = document.getElementById('choices');
    for(let i =0; i < companies.length; i++){
        let li = document.createElement('li');
        let callFunc = document.createElement('a');
        callFunc.addEventListener("click", function(){setCookie('company', companies[i].nameCompany, { 'max-age': 3600, samesite: 'strict' });
        location.reload();
    }
        , false);
        callFunc.innerText = companies[i].nameCompany;
        li.appendChild(callFunc);
        companyMenu.appendChild(li);
    }
}


async function fillDropmenuRooms(){
    let rooms = (await queryForRooms());
    let tempCompies = (await queryForCompanies());

    if( takeCookie("rooms")!= "NotFound")
    {
        document.getElementById('roomNow').innerText = takeCookie("rooms");
    }
    else
    {
        setCookie('rooms', rooms[0].nameRoom, { 'max-age': 3600, samesite: 'strict' });
        document.getElementById('roomNow').innerText = takeCookie("rooms");
    }
    roomsMenu = document.getElementById('choices2');
    let compId="";
    for(let i = 0; i < tempCompies.length; i++){
        if(document.getElementById('CompanyNow').innerText == tempCompies[i].nameCompany){
            compId = tempCompies[i].companyId;
        }
    }
    
    for(let i =0; i < rooms.length; i++){
        let li = document.createElement('li');
        let callFunc = document.createElement('a');
        callFunc.addEventListener("click", function(){setCookie('rooms', rooms[i].nameRoom, { 'max-age': 3600, samesite: 'strict' });
        location.reload();
    }
        , false);
        
        if(rooms[i].companyId == compId){
            callFunc.innerText = rooms[i].nameRoom;
            li.appendChild(callFunc);
        }
        roomsMenu.appendChild(li);
    }
}


async function queryForCompanies(){
    response = await fetch('http://localhost:5000/api/Companies', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        });
        Compies = (await response.json());
    return Compies;
}

async function queryForRooms(){
    response = await fetch('http://localhost:5000/api/Rooms', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      });
      rooms = (await response.json());
    return rooms;
}