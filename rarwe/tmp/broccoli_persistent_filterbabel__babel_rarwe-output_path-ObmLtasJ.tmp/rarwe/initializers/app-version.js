define('rarwe/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'rarwe/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _rarweConfigEnvironment) {
  var _config$APP = _rarweConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});