import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('bands.band');
  },

  actions: {
    didTransition: function() {
      var band = this.modelFor('bands.band');
      document.title = `${band.get('name')} details - Rock & Roll`;
    }
  }
});
