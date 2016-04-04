
const IndividualPlaylistView = Backbone.View.extend({
  className: 'playlists-container',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  _handlePlaylistOpen() {
    this.trigger('playlist:open');
  },
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  events: {
    'click .individual-playlist-button': '_handlePlaylistOpen',
  },
});

export { IndividualPlaylistView };
