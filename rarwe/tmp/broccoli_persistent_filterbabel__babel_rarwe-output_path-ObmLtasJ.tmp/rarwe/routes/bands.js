define('rarwe/routes/bands', ['exports', 'ember'], function (exports, _ember) {
  //import wait from './../utils/wait';

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('band');
      // var bands = this.store.findAll('band');
      // return wait(bands, 3 * 1000);
    },

    actions: {
      didTransition: function didTransition() {
        document.title = 'Bands - Rock & Roll';
      },

      createBand: function createBand() {
        var route = this,
            controller = this.get('controller');
        var band = this.store.createRecord('band', controller.getProperties('name'));
        band.save().then(function () {
          controller.set('name', '');
          route.transitionTo('bands.band.songs', band);
        });
      }
    }
  });
});