var jsonUsers = JSON.parse(usersJSON);


function AccountService() {
  this.users = AccountService.returnUsers();
}

AccountService.createUser = function(){

  return new User(name,email,password)
}

AccountService.returnUsers = function(){
  var arrayObj=[];
  for (var i=0; i < jsonUsers.length;i++)
  {

    var user = new User(jsonUsers[i].userName,jsonUsers[i].email,jsonUsers[i].password);
    arrayObj.push(user);
  }

  return arrayObj;
}

AccountService.prototype.checkEmail = function(email){

  var bool = true;

  for(var i=0; i < this.users.length ; i++)
  {

        if(this.users[i].email === email)
        {
         bool = false;
         break;
        }
  }
  return bool;

}
AccountService.prototype.signUP = function(name,email,password){

  if(AccountService.checkEmail()){


  }
}

AccountService.prototype.signIn = function (email,password){

    var bool=false;

    for(var i=0; i < this.users.length; i++)
    {

            if(this.users[i].email === email && this.users[i].password === password)
            {
              bool = true;
              break;
            }
    }
    return bool;
}

var accountS = new AccountService();
