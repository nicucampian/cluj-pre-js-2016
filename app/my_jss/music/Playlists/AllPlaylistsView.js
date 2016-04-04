import { IndividualPlaylistView } from './IndividualPlaylistView';
import { PlaylistView } from '../Songs/PlaylistView.js';
import { PlaylistModel } from '../Songs/PlaylistModel.js';

const AllPlaylistsView = Backbone.View.extend({
  _renderNestedView(view, el) {
    this.$el.append(view.el.innerHTML);
  },
  _renderPlaylistView(data) {
    const modelP = new PlaylistModel();
    modelP.set(data);
    const playlistViewBig = new PlaylistView({
      el: document.getElementById('playlistAbsolut'),
      model: modelP,
    });

    playlistViewBig.render();
  },
  render() {
    this.collection.models.forEach((playlistModel) => {
      const playlistViewSmall = new IndividualPlaylistView({
        model: playlistModel,
      });

      playlistViewSmall.render();
      this._renderNestedView(playlistViewSmall, this.$el);

      this.listenTo(playlistViewSmall, 'playlist:open', () => {
      });
    });

    return this;
  },
});
export { AllPlaylistsView };
