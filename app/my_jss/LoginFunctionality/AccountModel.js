const AccountModel = Backbone.Model.extend({
  _instance: null,
  getInstance() {
    if (this._instance === null) {
      this._instance = new AccountModel();
    }
    return this._instance;
  },
  events: {
  },
  setToken(result) {
    this.model.set(JSON.parse(result));
    console.log(this.model);
    this.trigger('token-real');
  },
});

export { AccountModel };
