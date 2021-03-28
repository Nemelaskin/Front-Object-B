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

var test;
async function postAuth(){
    
    var data = {
        Email : Email.value,
        Password : Password.value
    }

    var response;
    response = await fetch('http://localhost:5000/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      test = (await response.json()).access_token;
      
      console.log(test);
}

function authOkey(token){
    setCookie('JWT', token, { 'max-age': 3600, samesite: 'strict' });
    location.href = "../html/User/home.html";
}
