export default Ember.HTMLBars.template({"id":"0AljPgH/","block":"{\"statements\":[[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"list-group songs\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"canCreateSong\"]]],null,6],[\"block\",[\"each\"],[[\"get\",[\"sortedSongs\"]]],null,1],[\"block\",[\"unless\"],[[\"get\",[\"canCreateSong\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item empty-list\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"empty-message\"],[\"flush-element\"],[\"text\",\"\\n      There are no songs yet. Why don't you \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"enableSongCreation\"]],[\"flush-element\"],[\"text\",\"create one?\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item song\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"capitalize\"],[[\"get\",[\"song\",\"title\"]]],null],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"star-rating\"],null,[[\"rating\",\"item\",\"on-click\"],[[\"get\",[\"song\",\"rating\"]],[\"get\",[\"song\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"updateRating\"],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"song\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default sort-title-asc sorting-button\"],[\"flush-element\"],[\"text\",\"Title\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-arrow-up\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default sort-title-desc sorting-button\"],[\"flush-element\"],[\"text\",\"Title\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-arrow-down\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default sort-rating-asc sorting-button\"],[\"flush-element\"],[\"text\",\"Rating\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-arrow-up\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"comment\",\" not necessary to pass route if destination of route is the current one \"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default sort-rating-desc sorting-button\"],[\"flush-element\"],[\"text\",\"Rating\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-arrow-down\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"new-song-form\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"createSong\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"new-song\",[\"get\",[\"newSongPlaceholder\"]],[\"get\",[\"title\"]]]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-sm new-song-button\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"isAddButtonDisabled\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"createSong\"]],[\"flush-element\"],[\"text\",\"Add\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"btn-group song-filter-search-panel\"],[\"static-attr\",\"role\",\"group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sorting-panel\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"sortBy\"],[\"ratingDesc\"]]]],[[\"class\"],[\"sorting-link\"]],5],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"sortBy\"],[\"ratingAsc\"]]]],[[\"class\"],[\"sorting-link\"]],4],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"sortBy\"],[\"titleDesc\"]]]],[[\"class\"],[\"sorting-link\"]],3],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"sortBy\"],[\"titleAsc\"]]]],[[\"class\"],[\"sorting-link\"]],2],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"search-panel\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Start typing\",[\"get\",[\"searchTerm\"]],\"search-field\"]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group-btn\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default search-button\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-search\"],[\"static-attr\",\"aria-label\",\"search\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"clearfix\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}","meta":{"moduleName":"rarwe/templates/bands/band/songs.hbs"}});