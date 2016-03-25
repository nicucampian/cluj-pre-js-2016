describe('User tests', function(){

  var userObj = new User("John","johndoe@gmail.com","johndoe12");

it('set user state true',function (){
  userObj.setLoginState(true);
  expect(userObj.logged).toEqual(true);
});
it('set user state false',function (){
  userObj.setLoginState(false);
expect(userObj.logged).toEqual(false);
});

it('set user state something Else',function (){
  userObj.setLoginState({});
expect(userObj.logged).toEqual(false);
});

it('get user state', function(){
  userObj.logged = true;
  expect(userObj.getLoginState()).toEqual(true);
});
//
it('get user state 2', function(){
    userObj.logged = false;
  expect(userObj.getLoginState()).toEqual(false);
});
});
