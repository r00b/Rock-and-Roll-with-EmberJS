define("rarwe/templates/components/star-rating", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "srm/pyx8", "block": "{\"statements\":[[\"block\",[\"liquid-bind\"],[[\"get\",[\"stars\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"dynamic-attr\",\"class\",[\"concat\",[\"star-rating glyphicon \",[\"helper\",[\"if\"],[[\"get\",[\"star\",\"full\"]],\"glyphicon-star\",\"glyphicon-star-empty\"],null]]]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"setRating\",[\"get\",[\"star\",\"rating\"]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"star\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"liquidStars\"]]],null,0]],\"locals\":[\"liquidStars\"]}],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/components/star-rating.hbs" } });
});