var jsonUsers = JSON.parse(usersJSON);

function Users(){

 this.allUsers = this.getAllUsers();
};

//set user state ////

Users.prototype.setUserState(email,state) {

  var localUsers = this.allUsers;

  for(var i=0; i < localUsers.length; i++){

      if(localUsers.email === email)
      {
         localUsers.setLoginState(state);
      }
    }
}
// returns boolean
Users.prototype.checkedByType = function(type,objectKey){


  var localUsers = this.allUsers;
   for(var i=0; i < localUsers.length; i++){

      var user = localUsers[i];

     if(user[type] === objectKey)
      return true;
   }
 return false;
};

// returns array of all users//
Users.prototype.getAllUsers = function () {
  var localUsers = [];
  for (var i=0; i < jsonUsers.length;i++)
  {
      var person = jsonUsers[i];
      localUsers.push(this.createUser(person.userName,person.email,person.password));
  };
    return localUsers;
}

/// create object of type user/////
Users.prototype.createUser = function (name,email,password){

return new User(name,email,password);

};

// push new user in all users;
Users.prototype.addNewUser = function (name,email,password) {

    this.allUsers.push(this.createUser(name,email,password));
};


// returns boolean
Users.prototype.checkedByEmail = function(email){

  return this.checkedByType("email",email);
};
// returns boolean
Users.prototype.checkedByPassword = function(password){

  return this.checkedByType("password",password);
};

var usersClass = new Users();
