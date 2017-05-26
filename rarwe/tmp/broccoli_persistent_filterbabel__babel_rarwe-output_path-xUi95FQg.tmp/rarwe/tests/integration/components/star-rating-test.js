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