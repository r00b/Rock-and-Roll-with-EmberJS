define('rarwe/controllers/bands', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    name: '',

    isAddButtonDisabled: _ember['default'].computed('name', function () {
      return _ember['default'].isEmpty(this.get('name'));
    })
  });
});