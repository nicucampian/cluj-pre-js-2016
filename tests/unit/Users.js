describe('All users test -->',function(){

 var allUsersTest = new Users();

    describe('CheckByType',function(){

      it('Check by type true ',function(){
        var apel = allUsersTest.checkedByType("email","kathycombs@quailcom.com");

        expect(apel).toEqual(true);
      });

        it('Check by type false ',function(){
          var apel = allUsersTest.checkedByType("email","kawadawdambs@quailcom.com");
          expect(apel).toBe(false);
        });

        it('Check by type false ',function(){
          expect(allUsersTest.checkedByType("password","kathycombs@quailcom.com")).toEqual(false);
        });

        it('Check by type true ',function(){
          expect(allUsersTest.checkedByType("password","orkman5951")).toEqual(true);
        });
    });

  describe('addNewUser',function(){

      it('addNewUser increment', function(){
        var count = allUsersTest.allUsers.length;
        allUsersTest.addNewUser("ion","ioncampian@gmail.com","blablabla");
        expect(allUsersTest.allUsers.length).toEqual(count + 1);
      });
  });

  describe('checkedByEmail',function(){
      it('checkedByEmail true', function(){
      expect(allUsersTest.checkedByEmail("kathycombs@quailcom.com")).toEqual(true);
      });
      it('checkedByEmail false', function(){
      expect(allUsersTest.checkedByEmail("notexistinarray@quailcom.com")).toEqual(false);
      });
  });
  describe('checkedByPassword',function(){
      it('checkedByEmail true', function(){
        expect(allUsersTest.checkedByPassword("orkman5951")).toEqual(true);
        });
        it('checkedByEmail false', function(){
          expect(allUsersTest.checkedByPassword("asdwadwad")).toEqual(false);
          });
   });
   describe('setUserState',function(){
     it('set user state good',function(){
       var user = allUsersTest.createUser("Pop","popdoe@gmail.com","popdoe12");
       allUsersTest.addNewUser(user);
       allUsersTest.setUserState("popdoe@gmail.com",true);
        expect(user.logged).toEqual(true);
     });
   });
});
