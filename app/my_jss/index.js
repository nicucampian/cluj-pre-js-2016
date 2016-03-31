import { PlaylistView } from './music/Songs/PlaylistView.js';
import { PlaylistModel } from './music/Songs/PlaylistModel.js';

function loginFunction(){
  window.location.href = 'landing_page.html';
}

function startRenderPlaylist(data) {
  const modelP = new PlaylistModel();
  modelP.set(data[0]);
  const playlistView = new PlaylistView({
    el: document.getElementById('playlistAbsolut'),
    model: modelP,
  });

  playlistView.render();
}

$.ajax( "http://localhost:3000/playlists")
  .done(function(data) {

  // startRenderPlaylistsContainer(data);
    startRenderPlaylist(data);
  })
  .fail(function() {
  });
 function startRenderPlaylistsContainer(data) {
  const model = new PlaylistsContainerModel();
  model.data = data;

  var containerPlaylistsView = new containerPlaylistsView({
    el : document.getElementsByClassName('section-absolute')[0],
    model : model
  });

  containerPlaylistsView.render();
// will be called on click and send data
 }
