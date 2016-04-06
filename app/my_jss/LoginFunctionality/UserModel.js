const UserModel = Backbone.Model.extend({
  initialize() {
  },
  events: {
  },
  _authentication(account) {
    const self = this;
    $.ajax( {
      url: 'http://localhost:3000/auth',
      type: 'POST',
      data: JSON.stringify(account),
      contentType: 'application/json',
    }).done(function(result){
      document.getElementById('message').innerHTML = 'You are logged in';
      self._createModelByToken(result);
    })
    .fail(function() {
      document.getElementById('message').innerHTML = 'The user does not exist, Join Now !';
    });
  },
  _createModelByToken(token) {

    const self = this;
    $.ajax( {
      url: 'http://localhost:3000/preferences',
      headers: {
        'X-Token': token,
      },
    }).done(function(result){
      self.currentUser = JSON.parse(result);
      window.location.href = '';
      });
  },
});

export { UserModel };
