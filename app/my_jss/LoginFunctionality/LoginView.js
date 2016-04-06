import  { UserModel } from './UserModel.js';

const LoginView = Backbone.View.extend({
  className: 'login-template',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  events: {
    'submit #formSubmit': '_Login',
  },
  _Login(event) {
    const account = {
      username: document.getElementById('email_signIn').value,
      password: document.getElementById('password_signIn').value,
    };
    this.model._authentication(account);
    event.preventDefault();
  },
  render() {
    this.$el.html(this.template());
  },
});


export { LoginView };
