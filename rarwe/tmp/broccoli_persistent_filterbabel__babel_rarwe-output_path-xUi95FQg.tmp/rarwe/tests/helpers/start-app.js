define('rarwe/tests/helpers/start-app', ['exports', 'ember', 'rarwe/app', 'rarwe/config/environment', 'rarwe/tests/helpers/asserts', 'rarwe/tests/helpers/async-helpers'], function (exports, _ember, _rarweApp, _rarweConfigEnvironment, _rarweTestsHelpersAsserts, _rarweTestsHelpersAsyncHelpers) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _rarweConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _rarweApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});