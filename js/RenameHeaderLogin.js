var jwt = takeCookie("JWT");
if(jwt!= null && jwt != "NotFound" && jwt != ""){
    document.getElementById("loginString").innerText = "Logout";
}else{
    document.getElementById("loginString").innerText = "Login";
}