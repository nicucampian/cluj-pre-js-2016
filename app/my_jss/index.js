
function loginFunction(){
  window.location.href = "landing_page.html";
}
$.ajax( "http://192.168.28.109:3000/playlists")
  .done(function(data) {

    startRenderPlaylistsContainer(data);

  })
  .fail(function() {
    console.log( "error" );
  });
function startRenderPlaylistsContainer(data){

  var model = new PlaylistsContainerModel();
  model.data = data;

  var containerPlaylistsView = new containerPlaylistsView({
    el : document.getElementsByClassName('section-absolute')[0],
    model : model
  });

  containerPlaylistsView.render();


  ///will be called on click and send data
    startRenderPlaylist(data);
}
function startRenderPlaylist(data){

  var model = new PlaylistModel();

  //todo: change from array to object;

  model.data = data[0];

  var playlistView = new PlaylistView({
    el : document.getElementById('playlistAbsolut'),
    model : model,

  });

  playlistView.render();
}
