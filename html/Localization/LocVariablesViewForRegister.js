let lang = takeCookie("Language");
changeViewHeaderVariables();

function changeViewHeaderVariables() {
    if (lang == "EN") {
        document.getElementById('firstName1').innerText = "FirstName:";
        document.getElementById('secondName1').innerText = "SecondName:";
        document.getElementById('email1').innerText = "Email:";
        document.getElementById('phone1').innerText = "Phone:";
        document.getElementById('password1').innerText = "Password:";
        document.getElementById('repeatPassword1').innerText = "Repeat Password:";
        document.getElementById('h1Register').innerText = "Register";
        document.getElementById('backTologin').innerText = "Back to login";
        document.getElementById('btnCreate').value = "Create";
    }
    if (lang == "UA") {
        document.getElementById('firstName1').innerText = "Ім'я:";
        document.getElementById('secondName1').innerText = "Прізвище:";
        document.getElementById('email1').innerText = "Електронна пошта:";
        document.getElementById('phone1').innerText = "Телефон:";
        document.getElementById('password1').innerText = "Пароль:";
        document.getElementById('repeatPassword1').innerText = "Повторіть пароль:";
        document.getElementById('h1Register').innerText = "Реєстрація";
        document.getElementById('backTologin').innerText = "Назад до входу";
        document.getElementById('btnCreate').value = "Створити";

    }
}