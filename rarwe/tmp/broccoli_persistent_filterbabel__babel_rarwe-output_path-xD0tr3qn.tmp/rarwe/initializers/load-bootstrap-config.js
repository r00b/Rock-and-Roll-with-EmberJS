define('rarwe/initializers/load-bootstrap-config', ['exports', 'rarwe/config/environment', 'ember-bootstrap/config'], function (exports, _rarweConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_rarweConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});