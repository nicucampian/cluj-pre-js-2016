import { IndividualPlaylistView } from './IndividualPlaylistView';
import { PlaylistView } from '../Songs/PlaylistView.js';
import { PlaylistModel } from '../Songs/PlaylistModel.js';

const AllPlaylistsView = Backbone.View.extend({
  _renderNestedView(view,el) => {
  this.$el.append(view.el.innerHTML);
  },
  _renderPlaylistView(data){
    const modelP = new PlaylistModel();
    modelP.set(data);

    const playlistViewBig = new playlistViewBig({
      el: document.getElementById('playlistAbsolut'),
      model: modelP,
    });

    playlistViewBig.render();
  },
  render() {

    const self = this;
    this.collection.models.forEach(function renderIndividualPlaylist(playlistModel){
    const playlistViewSmall = new IndividualPlaylistView({
          model : playlistModel,
        });

    playlistViewSmall.render();
    self._renderNestedView(playlistViewSmall,self.$el);

    this.listenTo(playlistViewSmall,'openPlaylist', _renderPlaylistView(playlistViewSmall));
   });

   return this;
 },
});

export { AllPlaylistsView };
