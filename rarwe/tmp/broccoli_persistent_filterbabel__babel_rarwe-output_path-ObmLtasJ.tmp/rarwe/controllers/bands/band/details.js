define('rarwe/controllers/bands/band/details', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    isEditing: false,

    actions: {
      edit: function edit() {
        this.set('isEditing', true);
      },
      save: function save() {
        this.set('isEditing', false);
        return true;
      }
    }
  });
});