describe('AccountService tests', function(){
  var accountService = new AccountService();

  describe('--> SignUp tests', function(){
    it('--> SignUp false', function(){
      expect(accountService.signUp("ion","iotiriac@gmail.com","alabala")).toEqual(false);
    });
    it('--> SignUp true', function(){
      expect(accountService.signUp("combs","kathycombs@quailcom.com","alabala")).toEqual(true);
    });
  });

  describe('--> signIn tests', function(){
    it('--> signIn false', function(){
      expect(accountService.signIn("iotiriac@gmail.com","alabala")).toEqual(false);
    });
    it('--> signIn true', function(){
      expect(accountService.signIn("kathycombs@quailcom.com","orkman5951")).toEqual(true);
    });
  });


});
