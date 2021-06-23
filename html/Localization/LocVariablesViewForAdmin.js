let path = "http://127.0.0.1:5500/";
let lang = takeCookie("Language");


if (location.href == path + "html/Admin/AdminMain.html") {
    changeViewHeaderVariables();
} else {
    changeViewHeaderCRUDVariables();
}

function changeViewHeaderVariables() {
    if (lang == "EN") {
        document.getElementById('createMap').innerText = "Create Map";
        document.getElementById('selectMap').innerText = "Select Map";
    }
    if (lang == "UA") {
        document.getElementById('createMap').innerText = "Створити карту";
        document.getElementById('selectMap').innerText = "Обрати Карту";
    }
}
changeViewBlockVariables();

function changeViewBlockVariables() {
    if (lang == "EN") {
        document.getElementById('companies').innerText = "Companies";
        document.getElementById('roles').innerText = "Roles";
        document.getElementById('positions').innerText = "Positions";
        document.getElementById('rooms').innerText = "Rooms";
        document.getElementById('sensors').innerText = "Sensors";
        document.getElementById('users').innerText = "Users";
        document.getElementById('visits').innerText = "Visits";
    }
    if (lang == "UA") {
        document.getElementById('companies').innerText = "Компанії";
        document.getElementById('roles').innerText = "Ролі";
        document.getElementById('positions').innerText = "Позиції";
        document.getElementById('rooms').innerText = " Кімнати";
        document.getElementById('sensors').innerText = "Датчики";
        document.getElementById('users').innerText = "Користувачі";
        document.getElementById('visits').innerText = "Відвідування";
    }
}

function changeViewHeaderCRUDVariables() {
    if (lang == "EN") {
        document.getElementById('backToMainMenu').innerText = "Admin main menu";
    }
    if (lang == "UA") {
        document.getElementById('backToMainMenu').innerText = "Головне меню адміністратора ";
    }
}