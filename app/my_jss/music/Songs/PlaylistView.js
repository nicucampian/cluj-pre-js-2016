var PlaylistView = Backbone.View.extend({
  className: 'template-playlist',
  template : function() {
    var templateText = document.querySelector('script#'+ this.className).innerText;
    var compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  render : function() {

    this.$el.html(this.template(this.model.attributes));

    var playlistHeaderModel = new PlaylistHeaderModel();

    playlistHeaderModel.set({
      imageSmall : this.model.data.imageSmall ,
      title : this.model.data.title
    });

    var playlistHeaderView = new PlaylistHeaderView({
      model : playlistHeaderModel
    });

    playlistHeaderView.render();
    this.$el.append(playlistHeaderView.el);

    var songsC = new SongCollection();
    songsC.set(this.model.data.songs);

    var songsTable = new SongsTableView({
      collection: songsC
    });

    songsTable.render();
    this.$el.append(songsTable.el);

    this.listenTo(this,'distroy');

  }
});
