var PlaylistHeaderView = Backbone.View.extend({
  className: 'playlist-header',
  template : function(){
    var templateText = document.querySelector('script#'+ this.className).innerText;
    var compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  events : {
      "click .playlist-top" : "removePlaylist"
  },
  removePlaylist : function(){
     this.destroy();
  },
  render : function(){
    this.$el.html(this.template(this.model.attributes));
  }
});
