import { IndividualPlaylistModel } from './IndividualPlaylistModel.js';

const IndividualPlaylistCollection = Backbone.Collection.extend({
  model: IndividualPlaylistModel,
  url: 'http://localhost:3000/playlists',
  parse(response) {
    return response;
  },
});

export { IndividualPlaylistCollection };
