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