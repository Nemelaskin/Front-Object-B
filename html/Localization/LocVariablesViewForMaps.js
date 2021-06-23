console.log(document.URL);

let path = "http://127.0.0.1:5500/";
let lang = takeCookie("Language");


if (location.href == path + "html/Admin/MapSelect.html") {
    changeViewVariablesSelectMap();
}
if (location.href == path + "html/Admin/CreateMap.html") {
    changeViewVariablesCreateMap();
}

function changeViewVariablesSelectMap() {
    if (lang == "EN") {
        document.getElementById('Download').innerText = "Download";
        document.getElementById('backToMain').innerText = "Main admin menu";
    }
    if (lang == "UA") {
        document.getElementById('Download').innerText = "Загрузити";
        document.getElementById('backToMain').innerText = "Головне меню адміністратора";
    }
}

function changeViewVariablesCreateMap() {
    if (lang == "EN") {
        document.getElementById('backToMenu').innerText = "Main admin menu";
        document.getElementById('textToSelect').innerText = "Select Room to add coordinates:";
        document.getElementById('send').innerText = "Send!";
        document.getElementById('mode').innerText = "Change mode";
    }
    if (lang == "UA") {
        document.getElementById('backToMenu').innerText = "Головне меню адміністратора";
        document.getElementById('textToSelect').innerText = "Виберіть Кімнату, щоб додати координати:";
        document.getElementById('send').innerText = "Надіслати!";
        document.getElementById('mode').innerText = "Змінити режим";
    }
}