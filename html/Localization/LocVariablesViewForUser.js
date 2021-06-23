changeViewHeaderVariables();

function changeViewHeaderVariables() {
    lang = takeCookie("Language");
    var jwt = takeCookie("JWT");

    if (jwt != null && jwt != "NotFound" && jwt != "") {
        if (lang == "EN")
            document.getElementById("loginString").innerText = "Logout";
        if (lang == "UA")
            document.getElementById("loginString").innerText = "Вийти";
    } else {
        if (lang == "EN")
            document.getElementById("loginString").innerText = "Login";
        if (lang == "UA")
            document.getElementById("loginString").innerText = "Увійти";

    }

    if (lang == "UA") {
        document.getElementById('news').innerText = "Новини";
        document.getElementById('rating').innerText = "Рейтинг";
        document.getElementById('privacy').innerText = "Конфіденційність";
        document.getElementById('map').innerText = "Карта";
    }
    if (lang == "EN") {
        document.getElementById('news').innerText = "News";
        document.getElementById('rating').innerText = "Rating";
        document.getElementById('privacy').innerText = "Privacy";
        document.getElementById('map').innerText = "Map";
    }
}