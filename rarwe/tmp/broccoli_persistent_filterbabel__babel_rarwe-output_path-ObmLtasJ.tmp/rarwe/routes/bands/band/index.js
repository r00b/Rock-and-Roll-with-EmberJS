define('rarwe/routes/bands/band/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    afterModel: function afterModel(band) {
      var description = band.get('description');
      if (_ember['default'].isEmpty(description)) {
        this.transitionTo('bands.band.songs');
      } else {
        this.transitionTo('bands.band.details');
      }
    }
  });
});