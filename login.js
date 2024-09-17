var em=document.getElementById("exampleInputEmail1");
var pwd=document.getElementById("exampleInputPassword1");
var form=document.getElementById("form");

function login(){
    window.location.href = "home.html";
}

function validate(em, pwd, callback){
    if(em.value == "admin" && pwd.value == "12345"){
        callback();
    }
    else{
        alert("Invalid login credentials");
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    validate(em, pwd, login);
});