"use strict";



define('rarwe/app', ['exports', 'ember', 'rarwe/resolver', 'ember-load-initializers', 'rarwe/config/environment'], function (exports, _ember, _rarweResolver, _emberLoadInitializers, _rarweConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _rarweConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _rarweConfigEnvironment['default'].podModulePrefix,
    Resolver: _rarweResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _rarweConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("rarwe/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _liquidFireComponentsLfGetOutletState) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfGetOutletState["default"];
    }
  });
});
define('rarwe/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('rarwe/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('rarwe/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _emberBootstrapComponentsBsAccordionItemBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItemBody['default'];
    }
  });
});
define('rarwe/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _emberBootstrapComponentsBsAccordionItemTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItemTitle['default'];
    }
  });
});
define('rarwe/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('rarwe/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroup['default'];
    }
  });
});
define('rarwe/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _emberBootstrapComponentsBsButtonGroupButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroupButton['default'];
    }
  });
});
define('rarwe/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButton['default'];
    }
  });
});
define('rarwe/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('rarwe/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('rarwe/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('rarwe/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('rarwe/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _emberBootstrapComponentsBsDropdownMenuDivider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuDivider['default'];
    }
  });
});
define('rarwe/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _emberBootstrapComponentsBsDropdownMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuItem['default'];
    }
  });
});
define('rarwe/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('rarwe/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('rarwe/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('rarwe/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _emberBootstrapComponentsBsFormElementControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControl['default'];
    }
  });
});
define('rarwe/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementControlCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlCheckbox['default'];
    }
  });
});
define('rarwe/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _emberBootstrapComponentsBsFormElementControlInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlInput['default'];
    }
  });
});
define('rarwe/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _emberBootstrapComponentsBsFormElementControlTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlTextarea['default'];
    }
  });
});
define('rarwe/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _emberBootstrapComponentsBsFormElementErrors) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementErrors['default'];
    }
  });
});
define('rarwe/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _emberBootstrapComponentsBsFormElementFeedbackIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementFeedbackIcon['default'];
    }
  });
});
define('rarwe/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _emberBootstrapComponentsBsFormElementHelpText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementHelpText['default'];
    }
  });
});
define('rarwe/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _emberBootstrapComponentsBsFormElementLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLabel['default'];
    }
  });
});
define('rarwe/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontal['default'];
    }
  });
});
define('rarwe/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox['default'];
    }
  });
});
define('rarwe/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInline['default'];
    }
  });
});
define('rarwe/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox['default'];
    }
  });
});
define('rarwe/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVertical) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVertical['default'];
    }
  });
});
define('rarwe/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox['default'];
    }
  });
});
define('rarwe/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('rarwe/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _emberBootstrapComponentsBsModalSimple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalSimple['default'];
    }
  });
});
define('rarwe/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('rarwe/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('rarwe/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('rarwe/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('rarwe/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('rarwe/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _emberBootstrapComponentsBsModalHeaderClose) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderClose['default'];
    }
  });
});
define('rarwe/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _emberBootstrapComponentsBsModalHeaderTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderTitle['default'];
    }
  });
});
define('rarwe/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('rarwe/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('rarwe/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _emberBootstrapComponentsBsNavLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavLinkTo['default'];
    }
  });
});
define('rarwe/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('rarwe/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('rarwe/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('rarwe/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('rarwe/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('rarwe/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('rarwe/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('rarwe/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('rarwe/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('rarwe/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('rarwe/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('rarwe/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define('rarwe/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define("rarwe/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define("rarwe/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("rarwe/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("rarwe/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("rarwe/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("rarwe/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("rarwe/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("rarwe/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('rarwe/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("rarwe/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("rarwe/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
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
define('rarwe/controllers/bands', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    name: '',

    isAddButtonDisabled: _ember['default'].computed('name', function () {
      return _ember['default'].isEmpty(this.get('name'));
    })
  });
});
define('rarwe/controllers/bands/band/details', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    isEditing: false,

    actions: {
      edit: function edit() {
        this.set('isEditing', true);
      },
      save: function save() {
        this.set('isEditing', false);
        return true;
      }
    }
  });
});
define('rarwe/controllers/bands/band/songs', ['exports', 'ember', 'rarwe/helpers/capitalize'], function (exports, _ember, _rarweHelpersCapitalize) {
  exports['default'] = _ember['default'].Controller.extend({

    queryParams: {
      sortBy: 'sort',
      searchTerm: 's'
    },

    searchTerm: '',
    matchingSongs: _ember['default'].computed('model.songs.@each.title', 'searchTerm', function () {
      var searchTerm = this.get('searchTerm').toLowerCase();
      return this.get('model.songs').filter(function (song) {
        return song.get('title').toLowerCase().indexOf(searchTerm) !== -1;
      });
    }),

    sortBy: 'ratingDesc',
    sortProperties: _ember['default'].computed('sortBy', function () {
      var options = {
        'ratingDesc': 'rating:desc,title:asc',
        'ratingAsc': 'rating:asc,title:asc',
        'titleDesc': 'title:desc,rating:desc',
        'titleAsc': 'title:asc,rating:desc'
      };
      return options[this.get('sortBy')].split(',');
    }),
    sortedSongs: _ember['default'].computed.sort('matchingSongs', 'sortProperties'),
    // sortedSongs: Ember.computed.alias('matchingSongs'),

    songCreationStarted: false,

    newSongPlaceholder: _ember['default'].computed('model.name', function () {
      var bandName = this.get('model.name');
      return 'New ' + (0, _rarweHelpersCapitalize.capitalize)(bandName) + ' song';
    }),

    canCreateSong: _ember['default'].computed('songCreationStarted', 'model.songs.length', function () {
      return this.get('songCreationStarted') || this.get('model.songs.length');
    }),

    isAddButtonDisabled: _ember['default'].computed('title', function () {
      return _ember['default'].isEmpty(this.get('title'));
    }),

    actions: {
      // setSorting: function(option) {
      //   this.set('sortBy', option);
      // },

      enableSongCreation: function enableSongCreation() {
        this.set('songCreationStarted', true);
      },

      updateRating: function updateRating(params) {
        var song = params.item,
            rating = params.rating;
        if (song.get('rating') === rating) {
          rating = 0;
        }
        song.set('rating', rating);
        return song.save();
      }
    }
  });
});
define('rarwe/helpers/app-version', ['exports', 'ember', 'rarwe/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _rarweConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _rarweConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('rarwe/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('rarwe/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('rarwe/helpers/capitalize', ['exports', 'ember'], function (exports, _ember) {
  exports.capitalize = capitalize;

  function capitalize(input) {
    var words = input.toString().split(/\s+/).map(function (word) {
      return word.toLowerCase().capitalize();
    });
    return words.join(' ');
  }

  exports['default'] = _ember['default'].Helper.helper(capitalize);
});
define('rarwe/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _liquidFireHelpersLfLockModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel['default'];
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel.lfLockModel;
    }
  });
});
define('rarwe/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _liquidFireHelpersLfOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr['default'];
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr.lfOr;
    }
  });
});
define('rarwe/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('rarwe/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('rarwe/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'rarwe/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _rarweConfigEnvironment) {
  var _config$APP = _rarweConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('rarwe/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('rarwe/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('rarwe/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _emberDataSetupContainer, _emberDataIndex) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('rarwe/initializers/export-application-global', ['exports', 'ember', 'rarwe/config/environment'], function (exports, _ember, _rarweConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_rarweConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _rarweConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_rarweConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('rarwe/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("rarwe/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {

  (0, _liquidFireEmberInternals.initialize)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define('rarwe/initializers/load-bootstrap-config', ['exports', 'rarwe/config/environment', 'ember-bootstrap/config'], function (exports, _rarweConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_rarweConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('rarwe/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('rarwe/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("rarwe/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('rarwe/models/band', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    description: _emberData['default'].attr(),
    songs: _emberData['default'].hasMany('song')
  });
});
define('rarwe/models/song', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    rating: _emberData['default'].attr('number'),
    band: _emberData['default'].belongsTo('band')
  });
});
define('rarwe/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('rarwe/router', ['exports', 'ember', 'rarwe/config/environment'], function (exports, _ember, _rarweConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _rarweConfigEnvironment['default'].locationType,
    rootURL: _rarweConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('bands', function () {
      this.route('band', { path: ':id' }, function () {
        this.route('songs');
        this.route('details');
      });
    });
  });

  exports['default'] = Router;
});
define('rarwe/routes/bands', ['exports', 'ember'], function (exports, _ember) {
  //import wait from './../utils/wait';

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('band');
      // var bands = this.store.findAll('band');
      // return wait(bands, 3 * 1000);
    },

    actions: {
      didTransition: function didTransition() {
        document.title = 'Bands - Rock & Roll';
      },

      createBand: function createBand() {
        var route = this,
            controller = this.get('controller');
        var band = this.store.createRecord('band', controller.getProperties('name'));
        band.save().then(function () {
          controller.set('name', '');
          route.transitionTo('bands.band.songs', band);
        });
      }
    }
  });
});
define('rarwe/routes/bands/band', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('band', params.id);
    }

  });
});
// afterModel: function(band) {
//   var description = band.get('description');
//   if (Ember.isEmpty(description)) {
//     this.transitionTo('bands.band.songs');
//   } else {
//     this.transitionTo('bands.band.details');
//   }
// }
define('rarwe/routes/bands/band/details', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      save: function save() {
        var controller = this.get('controller'),
            band = controller.get('model');
        return band.save();
      },

      willTransition: function willTransition(transition) {
        var controller = this.get('controller'),
            leave;
        if (controller.get('isEditing')) {
          leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
          if (leave) {
            controller.set('isEditing', false);
          } else {
            transition.abort();
          }
        }
      },

      didTransition: function didTransition() {
        var band = this.modelFor('bands.band');
        document.title = band.get('name') + ' details - Rock & Roll';
      }
    }
  });
});
define('rarwe/routes/bands/band/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    afterModel: function afterModel(band) {
      var description = band.get('description');
      if (_ember['default'].isEmpty(description)) {
        this.transitionTo('bands.band.songs');
      } else {
        this.transitionTo('bands.band.details');
      }
    }
  });
});
define('rarwe/routes/bands/band/songs', ['exports', 'ember', 'rarwe/helpers/capitalize'], function (exports, _ember, _rarweHelpersCapitalize) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.modelFor('bands.band');
      // return wait(this.modelFor('bands.band'), 3000);
      // return Ember.RSVP.reject(this.modelFor('bands.band'));
    },

    resetController: function resetController(controller) {
      controller.set('songCreationStarted', false);
    },

    actions: {
      didTransition: function didTransition() {
        var band = this.modelFor('bands.band');
        var name = (0, _rarweHelpersCapitalize.capitalize)(band.get('name'));
        document.title = name + ' songs - Rock & Roll';
      },

      createSong: function createSong() {
        var controller = this.get('controller');
        var band = this.modelFor('bands.band');
        var song = this.store.createRecord('song', {
          title: controller.get('title'),
          band: band
        });
        song.save().then(function () {
          controller.set('title', '');
        });
      }
    }
  });
});

//import wait from './../../../utils/wait';
define('rarwe/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      this.transitionTo('bands');
    }
  });
});
define('rarwe/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("rarwe/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define("rarwe/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Qx5ZjI+I", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"page-header\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Rock & Roll\"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\" with Ember.js\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/application.hbs" } });
});
define("rarwe/templates/bands", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "f8EBNTt4", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"list-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"createBand\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"new-band\",\"New band\",[\"get\",[\"name\"]]]]],false],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary btn-sm new-band-button\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"isAddButtonDisabled\"]],null],[\"flush-element\"],[\"text\",\"Add\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"capitalize\"],[[\"get\",[\"band\",\"name\"]]],null],false],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pointer glyphicon glyphicon-chevron-right\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"bands.band\",[\"get\",[\"band\"]]],[[\"class\"],[\"list-group-item band-link\"]],0]],\"locals\":[\"band\"]}],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/bands.hbs" } });
});
define("rarwe/templates/bands/band", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZkTfsyv6", "block": "{\"statements\":[[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav nav-tabs\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"bands.band.details\",[\"get\",[\"model\"]]],null,1],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"bands.band.songs\",[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"band-info\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"liquid-outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Songs\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Details\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/bands/band.hbs" } });
});
define("rarwe/templates/bands/band/details", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "CsI2W7Gb", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default band-panel\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"panel-title band-description-header pull-left\"],[\"flush-element\"],[\"text\",\"Description\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isEditing\"]]],null,3,2],[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"clearfix\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"liquid-if\"],[[\"get\",[\"isEditing\"]]],[[\"class\"],[\"band-description\"]],1,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"value\"],[\"form-control\",[\"get\",[\"model\",\"description\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary pull-right\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"edit\"]],[\"flush-element\"],[\"text\",\"Edit\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary pull-right\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/bands/band/details.hbs" } });
});
define("rarwe/templates/bands/band/error", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "haL4A/SV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"error-pane\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"error-message\"],[\"flush-element\"],[\"text\",\"\\n    Something went wrong while fetching data for the band.\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/bands/band/error.hbs" } });
});
define("rarwe/templates/bands/band/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5b61PGUJ", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loading-pane\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loading-message\"],[\"flush-element\"],[\"text\",\"\\n    Fetching band data\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/bands/band/loading.hbs" } });
});
define("rarwe/templates/bands/band/songs", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0AljPgH/", "block": "{\"statements\":[[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"list-group songs\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"canCreateSong\"]]],null,6],[\"block\",[\"each\"],[[\"get\",[\"sortedSongs\"]]],null,1],[\"block\",[\"unless\"],[[\"get\",[\"canCreateSong\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item empty-list\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"empty-message\"],[\"flush-element\"],[\"text\",\"\\n      There are no songs yet. Why don't you \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"enableSongCreation\"]],[\"flush-element\"],[\"text\",\"create one?\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item song\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"capitalize\"],[[\"get\",[\"song\",\"title\"]]],null],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"star-rating\"],null,[[\"rating\",\"item\",\"on-click\"],[[\"get\",[\"song\",\"rating\"]],[\"get\",[\"song\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"updateRating\"],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"song\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default sort-title-asc sorting-button\"],[\"flush-element\"],[\"text\",\"Title\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-arrow-up\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default sort-title-desc sorting-button\"],[\"flush-element\"],[\"text\",\"Title\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-arrow-down\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default sort-rating-asc sorting-button\"],[\"flush-element\"],[\"text\",\"Rating\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-arrow-up\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"comment\",\" not necessary to pass route if destination of route is the current one \"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-default sort-rating-desc sorting-button\"],[\"flush-element\"],[\"text\",\"Rating\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-arrow-down\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"new-song-form\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"createSong\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"new-song\",[\"get\",[\"newSongPlaceholder\"]],[\"get\",[\"title\"]]]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-sm new-song-button\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"isAddButtonDisabled\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"createSong\"]],[\"flush-element\"],[\"text\",\"Add\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"btn-group song-filter-search-panel\"],[\"static-attr\",\"role\",\"group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sorting-panel\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"sortBy\"],[\"ratingDesc\"]]]],[[\"class\"],[\"sorting-link\"]],5],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"sortBy\"],[\"ratingAsc\"]]]],[[\"class\"],[\"sorting-link\"]],4],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"sortBy\"],[\"titleDesc\"]]]],[[\"class\"],[\"sorting-link\"]],3],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"sortBy\"],[\"titleAsc\"]]]],[[\"class\"],[\"sorting-link\"]],2],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"search-panel\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Start typing\",[\"get\",[\"searchTerm\"]],\"search-field\"]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group-btn\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default search-button\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-search\"],[\"static-attr\",\"aria-label\",\"search\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"clearfix\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/bands/band/songs.hbs" } });
});
define("rarwe/templates/bands/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nCXeVlg4", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"list-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"list-group-item empty-list\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"empty-message\"],[\"flush-element\"],[\"text\",\"\\n      Select a band.\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/bands/index.hbs" } });
});
define("rarwe/templates/components/star-rating", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "srm/pyx8", "block": "{\"statements\":[[\"block\",[\"liquid-bind\"],[[\"get\",[\"stars\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"dynamic-attr\",\"class\",[\"concat\",[\"star-rating glyphicon \",[\"helper\",[\"if\"],[[\"get\",[\"star\",\"full\"]],\"glyphicon-star\",\"glyphicon-star-empty\"],null]]]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"setRating\",[\"get\",[\"star\",\"rating\"]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"star\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"liquidStars\"]]],null,0]],\"locals\":[\"liquidStars\"]}],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/components/star-rating.hbs" } });
});
define("rarwe/templates/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wzBeGu9H", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loading-pane\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"loading-message\"],[\"flush-element\"],[\"text\",\"\\n    Loading data\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"spinner\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/loading.hbs" } });
});
define("rarwe/templates/songs", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SYXBaE44", "block": "{\"statements\":[[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"list-group songs\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"new-song\",\"New song\",[\"get\",[\"title\"]]]]],false],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-sm new-song-button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"createSong\"]],[\"flush-element\"],[\"text\",\"Add\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"song\",\"title\"]],false],[\"text\",\" by \"],[\"open-element\",\"em\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"song\",\"band\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"rating pull-right\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"song\",\"rating\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"song\"]}],\"hasPartials\":false}", "meta": { "moduleName": "rarwe/templates/songs.hbs" } });
});
define('rarwe/transitions', ['exports'], function (exports) {
  exports['default'] = function () {
    this.transition(this.fromRoute('bands.band.songs'), this.toRoute('bands.band.details'), this.use('toRight'), this.reverse('toLeft'));

    this.transition(this.hasClass('band-description'), this.toValue(false), this.use('fade', { duration: 500 }));

    // this.transition(
    //   this.inHelper('liquid-bind'),
    //   this.use('scale')
    // );
  };
});

// this.debug()
define('rarwe/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('rarwe/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('rarwe/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('rarwe/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('rarwe/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('rarwe/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('rarwe/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('rarwe/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('rarwe/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define("rarwe/transitions/slight-scale", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  exports["default"] = scale;

  function scale() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var transition = this;
    return (0, _liquidFire.animate)(transition.oldElement, { scale: [0.9, 1] }, opts).then(function () {
      return (0, _liquidFire.animate)(transition.newElement, { scale: [1, 0.9] }, opts);
    });
  }
});
define('rarwe/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('rarwe/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('rarwe/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('rarwe/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('rarwe/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
define('rarwe/utils/wait', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = wait;

  function wait(value, delay) {
    var promise = value.then && typeof value.then === 'function' ? value : _ember['default'].RSVP.resolve(value);

    return new _ember['default'].RSVP.Promise(function (resolve) {
      setTimeout(function () {
        promise.then(function (result) {
          resolve(result);
        });
      }, delay);
    });
  }
});


define('rarwe/config/environment', ['ember'], function(Ember) {
  var prefix = 'rarwe';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("rarwe/app")["default"].create({"name":"rarwe","version":"0.0.0+6d28ae86"});
}
//# sourceMappingURL=rarwe.map
