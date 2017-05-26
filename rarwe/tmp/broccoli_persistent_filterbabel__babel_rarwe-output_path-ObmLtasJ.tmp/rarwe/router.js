define('rarwe/router', ['exports', 'ember', 'rarwe/config/environment'], function (exports, _ember, _rarweConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _rarweConfigEnvironment['default'].locationType,
    rootURL: _rarweConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('bands', function () {
      this.route('band', { path: ':id' }, function () {
        this.route('songs');
        this.route('details');
      });
    });
  });

  exports['default'] = Router;
});