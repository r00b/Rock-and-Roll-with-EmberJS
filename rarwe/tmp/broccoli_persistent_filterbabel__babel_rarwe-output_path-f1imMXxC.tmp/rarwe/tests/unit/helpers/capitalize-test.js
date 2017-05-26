define('rarwe/tests/unit/helpers/capitalize-test', ['exports', 'rarwe/helpers/capitalize', 'qunit'], function (exports, _rarweHelpersCapitalize, _qunit) {

  (0, _qunit.module)('Unit | Helper | capitalize');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _rarweHelpersCapitalize.capitalize)([42]);
    assert.ok(result);
  });
});