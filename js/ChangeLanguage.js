let language = document.getElementById('viewLang').innerText = takeCookie("Language");
if (language == "" || language == "NotFound") {
    document.getElementById('viewLang').innerText = "EN";
    setCookie('Language', "EN", { 'max-age': 3600, samesite: 'strict' });

}

function ChangeLanguage(lang) {
    setCookie('Language', lang, { 'max-age': 3600, samesite: 'strict' });
    document.getElementById('viewLang').innerText = lang;
    location.reload();
}