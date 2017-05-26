define('ember-bootstrap/components/base/bs-accordion/item/title', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-accordion/title'], function (exports, _ember, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    layout: _title.default,
    ariaRole: 'tab',
    classNameBindings: ['collapsed:collapsed:expanded'],

    /**
     * @property collapsed
     * @type boolean
     * @public
     */
    collapsed: null,

    /**
     * @event onClick
     * @public
     */
    onClick: function onClick() {},
    click: function click() {
      this.get('onClick')();
    }
  });
});