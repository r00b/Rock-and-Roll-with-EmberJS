define('rarwe/tests/test-helper', ['exports', 'rarwe/tests/helpers/resolver', 'ember-qunit'], function (exports, _rarweTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_rarweTestsHelpersResolver['default']);
});