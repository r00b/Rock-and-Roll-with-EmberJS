define('rarwe/routes/bands/band', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('band', params.id);
    }

  });
});
// afterModel: function(band) {
//   var description = band.get('description');
//   if (Ember.isEmpty(description)) {
//     this.transitionTo('bands.band.songs');
//   } else {
//     this.transitionTo('bands.band.details');
//   }
// }