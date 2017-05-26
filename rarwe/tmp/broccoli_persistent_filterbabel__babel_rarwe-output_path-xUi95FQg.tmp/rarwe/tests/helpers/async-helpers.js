define('rarwe/tests/helpers/async-helpers', ['exports', 'ember'], function (exports, _ember) {

  function selectBand(app, name) {
    visit('/').click('.band-link:contains("' + name + '")');
    return app.testHelpers.wait();
  }

  function submit(app, selector) {
    return triggerEvent(selector, 'submit');
  }

  _ember['default'].Test.registerAsyncHelper('selectBand', selectBand);
  _ember['default'].Test.registerAsyncHelper('submit', submit);
});