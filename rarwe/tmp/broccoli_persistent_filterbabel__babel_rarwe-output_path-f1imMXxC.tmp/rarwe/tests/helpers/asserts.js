define('rarwe/tests/helpers/asserts', ['exports', 'ember'], function (exports, _ember) {

  function assertTrimmedText(app, assert, selector, text, errorMessage) {
    var element = findWithAssert(selector);
    var elementText = element.text().trim();
    assert.equal(elementText, text, errorMessage);
  }

  function assertLength(app, assert, selector, length, errorMessage) {
    assert.equal(find(selector).length, length, errorMessage);
  }

  function assertElement(app, assert, selector, errorMessage) {
    assert.equal(find(selector).length, 1, errorMessage);
  }

  _ember['default'].Test.registerHelper('assertTrimmedText', assertTrimmedText);
  _ember['default'].Test.registerHelper('assertLength', assertLength);
  _ember['default'].Test.registerHelper('assertElement', assertElement);
});