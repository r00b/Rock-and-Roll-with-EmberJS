define('rarwe/models/song', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    rating: _emberData['default'].attr('number'),
    band: _emberData['default'].belongsTo('band')
  });
});