import Ember from 'ember';
import { capitalize } from '../../../helpers/capitalize';
// const { Controller, computed, isEmpty } = Ember;
const { Controller, computed } = Ember;

// export default Ember.Controller.extend({
export default Controller.extend({ // destructure

  queryParams: {
    sortBy: 'sort',
    searchTerm: 's',
  },

  searchTerm: '',
  matchingSongs: Ember.computed('model.songs.@each.title','searchTerm', function() {
    return this.get('model.songs').filter((song) => {
      let searchTerm = this.get('searchTerm').toLowerCase();
      return song.get('title').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),

  sortBy: 'ratingDesc',
  sortProperties: Ember.computed('sortBy', function() {
    var options = {
      'ratingDesc': 'rating:desc,title:asc',
      'ratingAsc': 'rating:asc,title:asc',
      'titleDesc': 'title:desc,rating:desc',
      'titleAsc': 'title:asc,rating:desc',
    };
    return options[this.get('sortBy')].split(',');
  }),
  sortedSongs: Ember.computed.sort('matchingSongs','sortProperties'),
  // sortedSongs: Ember.computed.alias('matchingSongs'),

  songCreationStarted: false,

  newSongPlaceholder: Ember.computed('model.name', function() {
    var bandName = this.get('model.name');
    return `New ${capitalize(bandName)} song`;
  }),

  // canCreateSong: Ember.computed('songCreationStarted', 'model.songs.length', function() {
  //   return this.get('songCreationStarted') ||
  //   this.get('model.songs.length');
  // }),
  hasSongs: computed.bool('model.songs.length'),
  canCreateSong: computed.or('songCreationStarted', 'hasSongs'),

  // isAddButtonDisabled: computed('title', function() {
  //   return isEmpty(this.get('title'));
  // }),
  isAddButtonDisabled: Ember.computed.empty('title'),

  actions: {
    // setSorting: function(option) {
    //   this.set('sortBy', option);
    // },

    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },

    // updateRating: function(song, rating) {
    updateRating: function(params) {
      // let song = params.item,
      // rating = params.rating;
      let { item: song, rating } = params;
      if (song.get('rating') === rating) {
        rating = 0;
      }
      song.set('rating', rating);
      return song.save();
    }
  }
});
