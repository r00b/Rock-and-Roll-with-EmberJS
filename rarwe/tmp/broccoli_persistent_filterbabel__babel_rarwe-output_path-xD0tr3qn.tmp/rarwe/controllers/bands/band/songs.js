define('rarwe/controllers/bands/band/songs', ['exports', 'ember', 'rarwe/helpers/capitalize'], function (exports, _ember, _rarweHelpersCapitalize) {
  exports['default'] = _ember['default'].Controller.extend({

    queryParams: {
      sortBy: 'sort',
      searchTerm: 's'
    },

    searchTerm: '',
    matchingSongs: _ember['default'].computed('model.songs.@each.title', 'searchTerm', function () {
      var searchTerm = this.get('searchTerm').toLowerCase();
      return this.get('model.songs').filter(function (song) {
        return song.get('title').toLowerCase().indexOf(searchTerm) !== -1;
      });
    }),

    sortBy: 'ratingDesc',
    sortProperties: _ember['default'].computed('sortBy', function () {
      var options = {
        'ratingDesc': 'rating:desc,title:asc',
        'ratingAsc': 'rating:asc,title:asc',
        'titleDesc': 'title:desc,rating:desc',
        'titleAsc': 'title:asc,rating:desc'
      };
      return options[this.get('sortBy')].split(',');
    }),
    sortedSongs: _ember['default'].computed.sort('matchingSongs', 'sortProperties'),
    // sortedSongs: Ember.computed.alias('matchingSongs'),

    songCreationStarted: false,

    newSongPlaceholder: _ember['default'].computed('model.name', function () {
      var bandName = this.get('model.name');
      return 'New ' + (0, _rarweHelpersCapitalize.capitalize)(bandName) + ' song';
    }),

    canCreateSong: _ember['default'].computed('songCreationStarted', 'model.songs.length', function () {
      return this.get('songCreationStarted') || this.get('model.songs.length');
    }),

    isAddButtonDisabled: _ember['default'].computed('title', function () {
      return _ember['default'].isEmpty(this.get('title'));
    }),

    actions: {
      // setSorting: function(option) {
      //   this.set('sortBy', option);
      // },

      enableSongCreation: function enableSongCreation() {
        this.set('songCreationStarted', true);
      },

      updateRating: function updateRating(params) {
        var song = params.item,
            rating = params.rating;
        if (song.get('rating') === rating) {
          rating = 0;
        }
        song.set('rating', rating);
        return song.save();
      }
    }
  });
});