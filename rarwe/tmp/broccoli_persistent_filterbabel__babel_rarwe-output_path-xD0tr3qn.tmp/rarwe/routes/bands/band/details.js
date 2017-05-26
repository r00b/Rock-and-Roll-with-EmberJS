define('rarwe/routes/bands/band/details', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      save: function save() {
        var controller = this.get('controller'),
            band = controller.get('model');
        return band.save();
      },

      willTransition: function willTransition(transition) {
        var controller = this.get('controller'),
            leave;
        if (controller.get('isEditing')) {
          leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
          if (leave) {
            controller.set('isEditing', false);
          } else {
            transition.abort();
          }
        }
      },

      didTransition: function didTransition() {
        var band = this.modelFor('bands.band');
        document.title = band.get('name') + ' details - Rock & Roll';
      }
    }
  });
});