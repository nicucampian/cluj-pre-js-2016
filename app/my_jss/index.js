
import { IndividualPlaylistCollection } from './music/Playlists/IndividualPlaylistCollection.js';
import { AllPlaylistsView } from './music/Playlists/AllPlaylistsView.js';
import { AccountView } from './accounts/AccountsComponent/AccountView.js';

renderTopSection() {
 // question: Search functionality should be in playlist component ? (because data is there, and to not make another request ?);
  const accountView = new AccountView({
    el: document.getElementById('id')('account-section');
  });
  accountView.render();
}
renderTopSection();

//
// renderBottomSection(){
//   const creditsSection = new CreditsView({
//     el: document.getElementById('credits-section');
//   });

  creditsSection.render();
}

$.ajax( "http://localhost:3000/playlists")
  .done(function(data) {

   startRenderPlaylistsContainer(data);
  })
  .fail(function() {
  });

// allPlaylists
 function startRenderPlaylistsContainer(data) {

   var playlistCollection = new IndividualPlaylistCollection();
   playlistCollection.set(data);

  var allPlaylistsView = new AllPlaylistsView({
    el : document.getElementsByClassName('section-absolute')[0],
    collection : playlistCollection,
  });

  allPlaylistsView.render();
 }
