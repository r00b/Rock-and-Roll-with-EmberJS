define('rarwe/routes/bands/band/songs', ['exports', 'ember', 'rarwe/helpers/capitalize'], function (exports, _ember, _rarweHelpersCapitalize) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.modelFor('bands.band');
      // return wait(this.modelFor('bands.band'), 3000);
      // return Ember.RSVP.reject(this.modelFor('bands.band'));
    },

    resetController: function resetController(controller) {
      controller.set('songCreationStarted', false);
    },

    actions: {
      didTransition: function didTransition() {
        var band = this.modelFor('bands.band');
        var name = (0, _rarweHelpersCapitalize.capitalize)(band.get('name'));
        document.title = name + ' songs - Rock & Roll';
      },

      createSong: function createSong() {
        var controller = this.get('controller');
        var band = this.modelFor('bands.band');
        var song = this.store.createRecord('song', {
          title: controller.get('title'),
          band: band
        });
        song.save().then(function () {
          controller.set('title', '');
        });
      }
    }
  });
});

//import wait from './../../../utils/wait';