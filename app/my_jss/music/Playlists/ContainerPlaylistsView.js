var PlaylistsContainerView = Backbone.View.extend({
  cassName : "",
  template : function(){
    var templateText = document.querySelector('script#'+ this.className).innerText;
    var compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  render : function(){

   this.$el.html(this.template(this.model.attributes));

  }
});
