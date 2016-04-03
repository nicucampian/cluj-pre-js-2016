
const IndividualPlaylistView = Backbone.View.extend({
  className : "playlists-container",
  template : function(){
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  events: {
    'click .individual-playlist-button': 'openSongPlaylist',
  },
  openSongPlaylist(){
    this.trigger('openPlaylist');
  },
  render(){
   this.$el.html(this.template(this.model.attributes));
  }
  return this;
});

export { IndividualPlaylistView };
