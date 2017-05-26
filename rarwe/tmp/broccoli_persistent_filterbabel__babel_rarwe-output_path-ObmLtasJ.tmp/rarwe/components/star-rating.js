define('rarwe/components/star-rating', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['rating-panel'],
    rating: 0,
    maxRating: 5,
    item: null,
    "on-click": null,

    stars: _ember['default'].computed('rating', 'maxRating', function () {
      var fullStars = this.starRange(1, this.get('rating'), 'full');
      var emptyStars = this.starRange(this.get('rating') + 1, this.get('maxRating'), 'empty');
      return fullStars.concat(emptyStars);
    }),

    starRange: function starRange(start, end, type) {
      var starsData = [];
      for (var i = start; i <= end; i++) {
        starsData.push({ rating: i, full: type === 'full' });
      }
      return starsData;
    },

    actions: {
      setRating: function setRating(newRating) {
        this.get('on-click')({
          item: this.get('item'),
          rating: newRating
        });
      }
    }
  });
});