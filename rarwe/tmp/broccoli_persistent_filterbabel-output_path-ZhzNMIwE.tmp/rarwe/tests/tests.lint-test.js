define('rarwe/tests/tests.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/bands-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/bands-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/asserts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/asserts.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/async-helpers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/async-helpers.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/http-stubs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/http-stubs.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/star-rating-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/star-rating-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/bands/band/songs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/bands/band/songs-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/capitalize-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/capitalize-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/bands/band-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bands/band-test.js should pass ESLint\n\n');
  });
});