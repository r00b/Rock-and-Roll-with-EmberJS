define('rarwe/models/band', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    description: _emberData['default'].attr(),
    songs: _emberData['default'].hasMany('song')
  });
});