define('rarwe/tests/helpers/resolver', ['exports', 'rarwe/resolver', 'rarwe/config/environment'], function (exports, _rarweResolver, _rarweConfigEnvironment) {

  var resolver = _rarweResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _rarweConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _rarweConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});