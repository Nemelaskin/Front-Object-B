function takeCookie(nameCookie){
    let cookie = document.cookie;
    let massJTW;
    let JWT = "";
    massTemp = cookie.split(';');
    for(var i = 0; i < massTemp.length; i++){
        massJTW = massTemp[i].split('=');
        if(massJTW[0] == nameCookie && massJTW[1]!= ""){
            JWT = massJTW[1];
        }
        else{
            console.log("failed take cookie");
        }
    }
    console.log(JWT);
}

function deleteCookie(nameCookie){
    setCookie(nameCookie, "", { 'max-age': 3600, samesite: 'strict' });
    console.log("Cookie deleted!");
}

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = name + "=" + value;

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}