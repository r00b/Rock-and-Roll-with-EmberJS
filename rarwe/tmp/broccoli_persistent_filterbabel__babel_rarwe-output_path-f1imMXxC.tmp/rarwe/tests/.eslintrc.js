define("rarwe/tests/.eslintrc", ["exports"], function (exports) {
  module.exports = {
    env: {
      embertest: true
    },
    globals: {
      assertTrimmedText: false,
      assertLength: false,
      assertElement: false,
      selectBand: false,
      submit: false
    }
  };
});