deleteCookie("JWT");
async function postAuth(){
    
    var data = {
        Email : Email.value,
        Password : Password.value
    }

     var response = await fetch('http://localhost:5000/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      Key = (await response.json()).access_token;
      
      if(Key != null){
        console.log(Key);
        authOkey(Key);
      }
}

function authOkey(token){
    setCookie('JWT', token, { 'max-age': 3600, samesite: 'strict' });
    document.location.href = "../html/User/home.html";
}
