var SongsTableView = Backbone.View.extend({
  className: "songs-table",
  tagName: "table",
  _nestedSongs: [],
  template : function(){
    var templateText = document.querySelector('script#'+ this.className).innerText;
    var compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  _renderNestedView: function(view, el){
    this._nestedSongs.push(view);
    this.$el.append(view.el.innerHTML);
  },
  render : function() {
      this.$el.html(this.template());
      var that = this;

      this.collection.models.forEach(function(model) {
        var songView = new SongListItemView({
          model: model,
        });

      songView.render();
      that._renderNestedView(songView,document.querySelector("tbody"));
        });

   return this;
  }
});
