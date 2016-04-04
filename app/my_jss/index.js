
import { IndividualPlaylistCollection } from './music/Playlists/IndividualPlaylistCollection.js';
import { AllPlaylistsView } from './music/Playlists/AllPlaylistsView.js';
import { CreditsView } from './CreditsSection/CreditsView.js';
import { TopView } from './TopSection/TopView.js';
import { LoginView } from './LoginFunctionality/LoginView.js';
import { SignUpView } from './LoginFunctionality/SignUpView.js';

function startRenderPlaylistsContainer() {
  const playlistCollection = new IndividualPlaylistCollection();

  playlistCollection.fetch().done(function(){
    const allPlaylistsView = new AllPlaylistsView({
      el: document.getElementsByClassName('section-absolute')[0],
      collection: playlistCollection,
    });
    allPlaylistsView.render();
  });
}

function startRenderCreditsSection() {
  const creditsView = new CreditsView({
    el: document.getElementById('credits-section'),
  });
  creditsView.render();
}
function startRenderTopSection() {
  const topView = new TopView({
    el: document.getElementById('top-section'),
  });
  topView.render();
}

function startRenderLoginSection() {
  const loginView = new LoginView({
    el: document.getElementById('login-section'),
  });
  loginView.render();
}

function startRenderSignUpSection() {
  const signUpView = new SignUpView({
    el: document.getElementById('signup-page'),
  });
  signUpView.render();
}

startRenderSignUpSection();
startRenderLoginSection();
startRenderTopSection();
startRenderPlaylistsContainer();
startRenderCreditsSection();
