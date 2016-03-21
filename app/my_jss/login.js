var domEmail = document.getElementById('email-signIn');
var domPass = document.getElementById('password-signIn')


function checkForUser(){

  if(accountS.signIN(domEmail,domPass)){
    var message = document.getElementById('message');
    message.innerHTML = "You are loged in";
    message.style.color = "green";
  }
return false;
};

//console.log(accountS.signUP());
