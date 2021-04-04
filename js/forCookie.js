function takeCookie(nameCookie){
    let cookie = document.cookie;
    let massCookie;
    let result = "";
    massTemp = cookie.split(';');
    for(var i = 0; i < massTemp.length; i++){
        massCookie = massTemp[i].split('=');
        if((massCookie[0] == " "+nameCookie||massCookie[0] == nameCookie) && massCookie[1]!= ""){
            result = massCookie[1];
        }
        
    }
    if(result){
        return result;
    }
    else{
        console.log("failed take cookie");
        return "NotFound";
    }
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