'use strict';

define('rarwe/tests/acceptance/bands-test', ['exports', 'qunit', 'rarwe/tests/helpers/module-for-acceptance', 'pretender', 'rarwe/tests/helpers/http-stubs'], function (exports, _qunit, _rarweTestsHelpersModuleForAcceptance, _pretender, _rarweTestsHelpersHttpStubs) {

  (0, _rarweTestsHelpersModuleForAcceptance['default'])('Acceptance | bands', {
    afterEach: function afterEach() {
      server.shutdown();
    }
  });

  var server;

  (0, _qunit.test)('List bands', function (assert) {
    server = new _pretender['default'](function () {
      _rarweTestsHelpersHttpStubs['default'].stubBands(this, [{
        id: 1,
        type: 'bands',
        attributes: {
          name: 'Radiohead'
        }
      }, {
        id: 2,
        type: 'bands',
        attributes: {
          name: 'Long Distance Calling'
        }
      }]);
      // this.get('/bands', function() {
      //   var response = {
      //     data: [
      //       {
      //         id: 1,
      //         type: 'bands',
      //         attributes: {
      //           name: 'Radiohead'
      //         }
      //       },
      //       {
      //         id: 2,
      //         type: 'bands',
      //         attributes: {
      //           name: 'Long Distance Calling'
      //         }
      //       },
      //     ]
      //   };
      //   return [200, { 'Content-Type': 'application/vnd.api+json' },
      //   JSON.stringify(response)];
      // });
    });

    visit('/bands');

    andThen(function () {
      assertLength(assert, '.band-link', 2, 'All band links are rendered');
      assertLength(assert, '.band-link:contains("Radiohead")', 1, 'First band link contains the band name');
      assertLength(assert, '.band-link:contains("Long Distance Calling")', 1, 'The other band link contains the band name');
    });
  });

  (0, _qunit.test)('Create a new band', function (assert) {
    server = new _pretender['default'](function () {
      _rarweTestsHelpersHttpStubs['default'].stubBands(this, [{
        id: 1,
        attributes: {
          name: 'Radiohead'
        }
      }]);
      _rarweTestsHelpersHttpStubs['default'].stubCreateBand(this, 2);
      _rarweTestsHelpersHttpStubs['default'].stubSongs(this, 2, []);
    });

    visit('/bands');
    fillIn('.new-band', 'Long Distance Calling');
    click('.new-band-button');

    andThen(function () {
      assertLength(assert, '.band-link', 2, 'All band links are rendered');
      assertTrimmedText(assert, '.band-link:last', 'Long Distance Calling', 'Created band appears at the end of the list');
      assertElement(assert, '.nav a.active:contains("Songs")', 'The Songs tab is active');
    });
  });

  (0, _qunit.test)('Create a new song in two steps', function (assert) {
    server = new _pretender['default'](function () {
      _rarweTestsHelpersHttpStubs['default'].stubBands(this, [{
        id: 1,
        type: 'bands',
        attributes: {
          name: 'Radiohead'
        }
      }]);
      // this.get('/bands', function() {
      //   var response = {
      //     data: [
      //       {
      //         id: 1,
      //         type: 'bands',
      //         attributes: {
      //           name: 'Radiohead'
      //         }
      //       }
      //     ]
      //   };
      //   return [200, { 'Content-Type': 'application/vnd.api+json' },
      //   JSON.stringify(response)];
      // });
      //
      // this.get('/bands/1', function() {
      //   var response = {
      //     data: {
      //       id: 1,
      //       type: 'bands',
      //       attributes: {
      //         name: 'Radiohead'
      //       }
      //     }
      //   };
      //   return [200, { 'Content-Type': 'application/vnd.api+json' },
      //   JSON.stringify(response)];
      // });

      // httpStubs.stubCreateSong(this,1);
      // httpStubs.stubSongs(this, 1, [
      //   {
      //     id: 1,
      //     type: 'songs',
      //     attributes: {
      //       name: 'Killer Cars'
      //     }
      //   }
      // ]);

      this.post('/songs', function () {
        var response = {
          data: {
            id: 1,
            type: 'songs',
            attributes: {
              name: 'Killer Cars'
            }
          }
        };
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify(response)];
      });

      this.get('/bands/1/songs', function () {
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: [] })];
      });
    });

    selectBand('Radiohead');
    click('a:contains("create one")');
    fillIn('.new-song', 'Killer Cars');
    submit('.new-song-form');

    andThen(function () {
      assertElement(assert, '.songs .song:contains("Killer Cars")', 'Creates the song and displays it in the list');
    });
  });

  (0, _qunit.test)('Sort songs in various ways', function (assert) {
    server = new _pretender['default'](function () {
      _rarweTestsHelpersHttpStubs['default'].stubBands(this, [{
        id: 1,
        attributes: {
          name: 'Them Crooked Vultures'
        }
      }]);
      _rarweTestsHelpersHttpStubs['default'].stubSongs(this, 1, [{
        id: 1,
        attributes: {
          title: 'Elephants',
          rating: 5
        }
      }, {
        id: 2,
        attributes: {
          title: 'New Fang',
          rating: 4
        }
      }, {
        id: 3,
        attributes: {
          title: 'Mind Eraser, No Chaser',
          rating: 4
        }
      }, {
        id: 4,
        attributes: {
          title: 'Spinning in Daffodils',
          rating: 5
        }
      }]);
    });

    selectBand('Them Crooked Vultures');

    andThen(function () {
      assert.equal(currentURL(), '/bands/1/songs');
      assertTrimmedText(assert, '.song:first', 'Elephants', 'The first song is the highest ranked, first in the alphabet');
      assertTrimmedText(assert, '.song:last', 'New Fang', 'The last song is the lowest ranked, last in the alphabet');
    });

    click('button.sort-title-desc');

    andThen(function () {
      assert.equal(currentURL(), '/bands/1/songs?sort=titleDesc');
      assertTrimmedText(assert, '.song:first', 'Spinning In Daffodils', 'The first song is the one that is the last in the alphabet');
      assertTrimmedText(assert, '.song:last', 'Elephants', 'The last song is the one that is the first in the alphabet');
    });

    click('button.sort-rating-asc');

    andThen(function () {
      assert.equal(currentURL(), '/bands/1/songs?sort=ratingAsc');
      assertTrimmedText(assert, '.song:first', 'Mind Eraser, No Chaser', 'The first song is the lowest ranked, first in the alphabet');
      assertTrimmedText(assert, '.song:last', 'Spinning In Daffodils', 'The last song is the highest ranked, last in the alphabet');
    });
  });

  (0, _qunit.test)('Search songs', function (assert) {
    server = new _pretender['default'](function () {
      _rarweTestsHelpersHttpStubs['default'].stubBands(this, [{
        id: 1,
        attributes: {
          name: 'Them Crooked Vultures'
        }
      }]);

      _rarweTestsHelpersHttpStubs['default'].stubSongs(this, 1, [{
        id: 1,
        attributes: {
          title: 'Elephants',
          rating: 5
        }
      }, {
        id: 2,
        attributes: {
          title: 'New Fang',
          rating: 4
        }
      }, {
        id: 3,
        attributes: {
          title: 'Mind Eraser, No Chaser',
          rating: 4
        }
      }, {
        id: 4,
        attributes: {
          title: 'Spinning in Daffodils',
          rating: 5
        }
      }, {
        id: 5,
        attributes: {
          title: 'No One Loves Me & Neither Do I',
          rating: 5
        }
      }]);
    });

    visit('/bands/1');
    fillIn('.search-field', 'no');
    andThen(function () {
      assertLength(assert, '.song', 2, 'The songs matching the search term are displayed');
    });
    click('button.sort-title-desc');
    andThen(function () {
      assertTrimmedText(assert, '.song:first', 'No One Loves Me & Neither Do I', 'A matching song that comes later in the alphabet appears on top');
      assertTrimmedText(assert, '.song:last', 'Mind Eraser, No Chaser', 'A matching song that comes sooner in the alphabet appears at the bottom ');
    });
  });
});
define('rarwe/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/star-rating.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/star-rating.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/bands.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bands.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/bands/band/details.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bands/band/details.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/bands/band/songs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bands/band/songs.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/capitalize.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/capitalize.js should pass ESLint\n\n');
  });

  QUnit.test('models/band.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/band.js should pass ESLint\n\n');
  });

  QUnit.test('models/song.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/song.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bands.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bands.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bands/band.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bands/band.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bands/band/details.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bands/band/details.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bands/band/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bands/band/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/bands/band/songs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bands/band/songs.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass ESLint\n\n');
  });

  QUnit.test('transitions/slight-scale.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions/slight-scale.js should pass ESLint\n\n');
  });

  QUnit.test('utils/wait.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/wait.js should pass ESLint\n\n');
  });
});
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
define('rarwe/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('rarwe/tests/helpers/http-stubs', ['exports'], function (exports) {
  function songsUrlForBand(id) {
    return '/bands/' + id + '/songs';
  }

  function responseItemForBand(data, id) {
    var bandId = id || data.id;
    return {
      id: bandId,
      type: 'bands',
      attributes: data.attributes,
      relationships: {
        songs: {
          links: {
            related: songsUrlForBand(bandId)
          }
        }
      }
    };
  }

  function responseItemForSong(data, id) {
    var songId = id || data.id;
    return {
      id: songId,
      type: "songs",
      attributes: data.attributes
    };
  }

  exports['default'] = {
    stubBands: function stubBands(pretender, data) {
      var responseForBands = [];
      data.forEach(function (band) {
        var responseForBand = responseItemForBand(band);
        pretender.get('/bands/' + responseForBand.id, function () {
          return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: responseForBand })];
        });
        responseForBands.push(responseForBand);
      });
      pretender.get('/bands', function () {
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: responseForBands })];
      });
    },

    stubSongs: function stubSongs(pretender, bandId, data) {
      var response = data.map(function (song) {
        return responseItemForSong(song);
      });
      pretender.get(songsUrlForBand(bandId), function () {
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: response })];
      });
    },

    stubCreateBand: function stubCreateBand(pretender, newId) {
      pretender.post('/bands', function (request) {
        var response = responseItemForBand(JSON.parse(request.requestBody).data, newId);
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: response })];
      });
    },

    stubCreateSong: function stubCreateSong(pretender, newId) {
      pretender.post('/songs', function (request) {
        var response = responseItemForSong(JSON.parse(request.requestBody).data, newId);
        return [200, { 'Content-Type': 'application/vnd.api+json' }, JSON.stringify({ data: response })];
      });
    }
  };
});
define('rarwe/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'rarwe/tests/helpers/start-app', 'rarwe/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _rarweTestsHelpersStartApp, _rarweTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _rarweTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _rarweTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('rarwe/tests/helpers/resolver', ['exports', 'rarwe/resolver', 'rarwe/config/environment'], function (exports, _rarweResolver, _rarweConfigEnvironment) {

  var resolver = _rarweResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _rarweConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _rarweConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
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
define('rarwe/tests/integration/components/star-rating-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('star-rating', 'Integration | Component | star-rating', {
    integration: true
  });

  (0, _emberQunit.test)('Renders the full and empty stars correctly', function (assert) {
    assert.expect(6);

    var song = _ember['default'].Object.create({ rating: 4 });
    this.set('song', song);
    this.set('maxRating', 5);

    this.render(_ember['default'].HTMLBars.template({
      'id': 'eebYrjqK',
      'block': '{"statements":[["append",["helper",["star-rating"],null,[["item","rating","maxRating"],[["get",["song"]],["get",["song","rating"]],["get",["maxRating"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$('.glyphicon-star').length, 4, 'The right amount of full stars is rendered');
    assert.equal(this.$('.glyphicon-star-empty').length, 1, 'The right amount of empty stars is rendered');

    this.set('maxRating', 10);

    assert.equal(this.$('.glyphicon-star').length, 4, 'The right amount of full stars is rendered after changing maxRating');
    assert.equal(this.$('.glyphicon-star-empty').length, 6, 'The right amount of empty stars is rendered after changing maxRating');

    this.set('song.rating', 2);

    assert.equal(this.$('.glyphicon-star').length, 2, 'The right amount of full stars is rendered after changing rating');
    assert.equal(this.$('.glyphicon-star-empty').length, 8, 'The right amount of empty stars is rendered after changing rating');
  });
});
define('rarwe/tests/test-helper', ['exports', 'rarwe/tests/helpers/resolver', 'ember-qunit'], function (exports, _rarweTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_rarweTestsHelpersResolver['default']);
});
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
define('rarwe/tests/unit/controllers/bands/band/songs-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:bands/band/songs', 'Unit | Controller | bands/ band/songs', {});

  (0, _emberQunit.test)('canCreateSong', function (assert) {
    assert.expect(3);

    var controller = this.subject();
    var band = _ember['default'].Object.create();
    controller.set('model', band);

    controller.set('songCreationStarted', false);

    assert.ok(!controller.get('canCreateSong'), "Can't create song if process has not started and no songs yet");

    controller.set('songCreationStarted', true);

    assert.ok(controller.get('canCreateSong'), 'Can create song if process has started');

    controller.set('songCreationStarted', false);
    var songs = [_ember['default'].Object.create({ id: 1, title: 'Elephants', rating: 5 })];

    band.set('songs', songs);
    assert.ok(controller.get('canCreateSong'), 'Can create song if process has not started but there are already songs');
  });
});
define('rarwe/tests/unit/helpers/capitalize-test', ['exports', 'rarwe/helpers/capitalize', 'qunit'], function (exports, _rarweHelpersCapitalize, _qunit) {

  (0, _qunit.module)('Unit | Helper | capitalize');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _rarweHelpersCapitalize.capitalize)([42]);
    assert.ok(result);
  });
});
define('rarwe/tests/unit/routes/bands/band-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bands/band', 'Unit | Route | bands/band', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('rarwe/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
