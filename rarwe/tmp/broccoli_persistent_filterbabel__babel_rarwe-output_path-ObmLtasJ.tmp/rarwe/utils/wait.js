define('rarwe/utils/wait', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = wait;

  function wait(value, delay) {
    var promise = value.then && typeof value.then === 'function' ? value : _ember['default'].RSVP.resolve(value);

    return new _ember['default'].RSVP.Promise(function (resolve) {
      setTimeout(function () {
        promise.then(function (result) {
          resolve(result);
        });
      }, delay);
    });
  }
});