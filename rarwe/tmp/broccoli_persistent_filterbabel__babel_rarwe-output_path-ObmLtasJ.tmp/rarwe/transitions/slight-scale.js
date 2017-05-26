define("rarwe/transitions/slight-scale", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  exports["default"] = scale;

  function scale() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var transition = this;
    return (0, _liquidFire.animate)(transition.oldElement, { scale: [0.9, 1] }, opts).then(function () {
      return (0, _liquidFire.animate)(transition.newElement, { scale: [1, 0.9] }, opts);
    });
  }
});