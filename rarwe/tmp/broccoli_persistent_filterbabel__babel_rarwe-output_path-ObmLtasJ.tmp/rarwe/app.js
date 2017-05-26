define('rarwe/app', ['exports', 'ember', 'rarwe/resolver', 'ember-load-initializers', 'rarwe/config/environment'], function (exports, _ember, _rarweResolver, _emberLoadInitializers, _rarweConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _rarweConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _rarweConfigEnvironment['default'].podModulePrefix,
    Resolver: _rarweResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _rarweConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});