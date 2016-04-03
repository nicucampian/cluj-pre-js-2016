import { IndividualPlaylistModel } from './IndividualPlaylistModel.js';

const IndividualPlaylistCollection = Backbone.Collection.extend({
  model: IndividualPlaylistModel,
});

export { IndividualPlaylistCollection };
