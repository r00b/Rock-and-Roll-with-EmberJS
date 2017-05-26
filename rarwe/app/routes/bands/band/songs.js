import Ember from 'ember';
//import wait from './../../../utils/wait';
import { capitalize as capitalizeWords } from '../../../helpers/capitalize';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('bands.band');
    // return wait(this.modelFor('bands.band'), 3000);
    // return Ember.RSVP.reject(this.modelFor('bands.band'));
  },

  resetController: function(controller) {
    controller.set('songCreationStarted', false);
  },

  actions: {
    didTransition: function() {
      var band = this.modelFor('bands.band');
      var name = capitalizeWords(band.get('name'));
      document.title = `${name} songs - Rock & Roll`;
    },

    createSong: function() {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      var song = this.store.createRecord('song', {
        title: controller.get('title'),
        band: band
      });
      song.save().then(function() {
        controller.set('title', '');
      });
    },
  }
});
