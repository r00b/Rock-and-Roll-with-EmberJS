define('ember-bootstrap/components/base/bs-modal', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal', 'ember-bootstrap/mixins/transition-support', 'ember-bootstrap/utils/listen-to-cp'], function (exports, _ember, _bsModal, _transitionSupport, _listenToCp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      get = _ember.default.get,
      getOwner = _ember.default.getOwner,
      observer = _ember.default.observer;
  exports.default = _ember.default.Component.extend(_transitionSupport.default, {
    layout: _bsModal.default,

    /**
     * Visibility of the modal. Toggle to to show/hide with CSS transitions.
     *
     * When the modal is closed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onHide` action
     *
     * @property open
     * @type boolean
     * @default true
     * @public
     */
    open: true,

    /**
     * @property isOpen
     * @private
     */
    isOpen: (0, _listenToCp.default)('open'),

    /**
     * @property _isOpen
     * @private
     */
    _isOpen: false,

    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: computed.not('isFastBoot'),

    /**
     * @property notFade
     * @type boolean
     * @private
     */
    notFade: computed.not('fade'),

    /**
     * Used to apply Bootstrap's visibility classes.
     *
     * @property showModal
     * @type boolean
     * @default false
     * @private
     */
    showModal: false,

    /**
     * Use a semi-transparent modal background to hide the rest of the page.
     *
     * @property backdrop
     * @type boolean
     * @default true
     * @public
     */
    backdrop: true,

    /**
     * @property showBackdrop
     * @type boolean
     * @default false
     * @private
     */
    showBackdrop: false,

    /**
     * Closes the modal when escape key is pressed.
     *
     * @property keyboard
     * @type boolean
     * @default true
     * @public
     */
    keyboard: true,

    /**
     * The id of the `.modal` element.
     *
     * @property modalId
     * @type string
     * @readonly
     * @private
     */
    modalId: computed('elementId', function () {
      return this.get('elementId') + '-modal';
    }),

    /**
     * The jQuery object of the `.modal` element.
     *
     * @property modalElement
     * @type object
     * @readonly
     * @private
     */
    modalElement: computed('modalId', function () {
      return _ember.default.$('#' + this.get('modalId'));
    }).volatile(),

    /**
     * The id of the backdrop element.
     *
     * @property backdropId
     * @type string
     * @readonly
     * @private
     */
    backdropId: computed('elementId', function () {
      return this.get('elementId') + '-backdrop';
    }),

    /**
     * The jQuery object of the backdrop element.
     *
     * @property backdropElement
     * @type object
     * @readonly
     * @private
     */
    backdropElement: computed('backdropId', function () {
      return _ember.default.$('#' + this.get('backdropId'));
    }).volatile(),

    /**
     * Property for size styling, set to null (default), 'lg' or 'sm'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/javascript/#modals-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null,

    /**
     * If true clicking on the backdrop will close the modal.
     *
     * @property backdropClose
     * @type boolean
     * @default true
     * @public
     */
    backdropClose: true,

    /**
     * If true component will render in place, rather than be wormholed.
     *
     * @property renderInPlace
     * @type boolean
     * @default false
     * @public
     */
    renderInPlace: false,

    /**
     * @property _renderInPlace
     * @type boolean
     * @private
     */
    _renderInPlace: computed('renderInPlace', 'isFastBoot', function () {
      return this.get('renderInPlace') || !this.get('isFastBoot') && _ember.default.$('#ember-bootstrap-wormhole').length === 0;
    }),

    /**
     * The duration of the fade transition
     *
     * @property transitionDuration
     * @type number
     * @default 300
     * @public
     */
    transitionDuration: 300,

    /**
     * The duration of the backdrop fade transition
     *
     * @property backdropTransitionDuration
     * @type number
     * @default 150
     * @public
     */
    backdropTransitionDuration: 150,

    /**
     * @property isFastBoot
     * @type {Boolean}
     * @private
     */
    isFastBoot: computed(function () {
      if (!getOwner) {
        // Ember.getOwner is available as of Ember 2.3, while FastBoot requires 2.4. So just return false...
        return false;
      }

      var owner = getOwner(this);
      if (!owner) {
        return false;
      }

      var fastboot = owner.lookup('service:fastboot');
      if (!fastboot) {
        return false;
      }

      return get(fastboot, 'isFastBoot');
    }),

    /**
     * The action to be sent when the modal footer's submit button (if present) is pressed.
     * Note that if your modal body contains a form (e.g. [Components.Form](Components.Form.html){{/crossLink}}) this action will
     * not be triggered. Instead a submit event will be triggered on the form itself. See the class description for an
     * example.
     *
     * @property onSubmit
     * @type function
     * @public
     */
    onSubmit: function onSubmit() {},


    /**
     * The action to be sent when the modal is closing.
     * This will be triggered by pressing the modal header's close button (x button) or the modal footer's close button.
     * Note that this will happen before the modal is hidden from the DOM, as the fade transitions will still need some
     * time to finish. Use the `onHidden` if you need the modal to be hidden when the action triggers.
     *
     * You can return false to prevent closing the modal automatically, and do that in your action by
     * setting `open` to false.
     *
     * @property onHide
     * @type function
     * @public
     */
    onHide: function onHide() {},


    /**
     * The action to be sent after the modal has been completely hidden (including the CSS transition).
     *
     * @property onHidden
     * @type function
     * @default null
     * @public
     */
    onHidden: function onHidden() {},


    /**
     * The action to be sent when the modal is opening.
     * This will be triggered immediately after the modal is shown (so it's safe to access the DOM for
     * size calculations and the like). This means that if fade=true, it will be shown in between the
     * backdrop animation and the fade animation.
     *
     * @property onShow
     * @type function
     * @default null
     * @public
     */
    onShow: function onShow() {},


    /**
     * The action to be sent after the modal has been completely shown (including the CSS transition).
     *
     * @property onShown
     * @type function
     * @public
     */
    onShown: function onShown() {},


    actions: {
      close: function close() {
        if (this.get('onHide')() !== false) {
          this.set('isOpen', false);
        }
      },
      submit: function submit() {
        var form = this.get('modalElement').find('.modal-body form');
        if (form.length > 0) {
          // trigger submit event on body form
          form.trigger('submit');
        } else {
          // if we have no form, we send a submit action
          this.get('onSubmit')();
        }
      }
    },

    /**
     * Give the modal (or its autofocus element) focus
     *
     * @method takeFocus
     * @private
     */
    takeFocus: function takeFocus() {
      var focusElement = this.get('modalElement').find('[autofocus]').first();
      if (focusElement.length === 0) {
        focusElement = this.get('modalElement');
      }
      if (focusElement.length > 0) {
        focusElement.focus();
      }
    },


    /**
     * Show the modal
     *
     * @method show
     * @private
     */
    show: function show() {
      if (this._isOpen) {
        return;
      }
      this._isOpen = true;

      this.checkScrollbar();
      this.setScrollbar();

      _ember.default.$('body').addClass('modal-open');

      this.resize();

      var callback = function callback() {
        if (this.get('isDestroyed')) {
          return;
        }

        this.get('modalElement').show().scrollTop(0);

        this.handleUpdate();
        this.set('showModal', true);
        this.get('onShow')();

        if (this.get('usesTransition')) {
          this.get('modalElement').one('bsTransitionEnd', _ember.default.run.bind(this, function () {
            this.takeFocus();
            this.get('onShown')();
          })).emulateTransitionEnd(this.get('transitionDuration'));
        } else {
          this.takeFocus();
          this.get('onShown')();
        }
      };
      this.handleBackdrop(callback);
    },


    /**
     * Hide the modal
     *
     * @method hide
     * @private
     */
    hide: function hide() {
      if (!this._isOpen) {
        return;
      }
      this._isOpen = false;

      this.resize();
      this.set('showModal', false);

      if (this.get('usesTransition')) {
        this.get('modalElement').one('bsTransitionEnd', _ember.default.run.bind(this, this.hideModal)).emulateTransitionEnd(this.get('transitionDuration'));
      } else {
        this.hideModal();
      }
    },


    /**
     * Clean up after modal is hidden and call onHidden
     *
     * @method hideModal
     * @private
     */
    hideModal: function hideModal() {
      var _this = this;

      if (this.get('isDestroyed')) {
        return;
      }

      this.get('modalElement').hide();
      this.handleBackdrop(function () {
        _ember.default.$('body').removeClass('modal-open');
        _this.resetAdjustments();
        _this.resetScrollbar();
        _this.get('onHidden')();
      });
    },


    /**
     * SHow/hide the backdrop
     *
     * @method handleBackdrop
     * @param callback
     * @private
     */
    handleBackdrop: function handleBackdrop(callback) {
      var doAnimate = this.get('usesTransition');

      if (this.get('isOpen') && this.get('backdrop')) {
        this.set('showBackdrop', true);

        if (!callback) {
          return;
        }

        if (doAnimate) {
          _ember.default.run.schedule('afterRender', this, function () {
            var $backdrop = this.get('backdropElement');
            _ember.default.assert('Backdrop element should be in DOM', $backdrop && $backdrop.length > 0);
            $backdrop.one('bsTransitionEnd', _ember.default.run.bind(this, callback)).emulateTransitionEnd(this.get('backdropTransitionDuration'));
          });
        } else {
          callback.call(this);
        }
      } else if (!this.get('isOpen') && this.get('backdrop')) {
        var $backdrop = this.get('backdropElement');
        _ember.default.assert('Backdrop element should be in DOM', $backdrop && $backdrop.length > 0);

        var callbackRemove = function callbackRemove() {
          this.set('showBackdrop', false);
          if (callback) {
            callback.call(this);
          }
        };
        if (doAnimate) {
          $backdrop.one('bsTransitionEnd', _ember.default.run.bind(this, callbackRemove)).emulateTransitionEnd(this.get('backdropTransitionDuration'));
        } else {
          callbackRemove.call(this);
        }
      } else if (callback) {
        _ember.default.run.next(this, callback);
      }
    },


    /**
     * Attach/Detach resize event listeners
     *
     * @method resize
     * @private
     */
    resize: function resize() {
      if (this.get('isOpen')) {
        _ember.default.$(window).on('resize.bs.modal', _ember.default.run.bind(this, this.handleUpdate));
      } else {
        _ember.default.$(window).off('resize.bs.modal');
      }
    },


    /**
     * @method handleUpdate
     * @private
     */
    handleUpdate: function handleUpdate() {
      this.adjustDialog();
    },


    /**
     * @method adjustDialog
     * @private
     */
    adjustDialog: function adjustDialog() {
      var modalIsOverflowing = this.get('modalElement')[0].scrollHeight > document.documentElement.clientHeight;
      this.get('modalElement').css({
        paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.get('scrollbarWidth') : '',
        paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.get('scrollbarWidth') : ''
      });
    },


    /**
     * @method resetAdjustments
     * @private
     */
    resetAdjustments: function resetAdjustments() {
      this.get('modalElement').css({
        paddingLeft: '',
        paddingRight: ''
      });
    },


    /**
     * @method checkScrollbar
     * @private
     */
    checkScrollbar: function checkScrollbar() {
      var fullWindowWidth = window.innerWidth;
      if (!fullWindowWidth) {
        // workaround for missing window.innerWidth in IE8
        var documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
      }

      this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    },


    /**
     * @method setScrollbar
     * @private
     */
    setScrollbar: function setScrollbar() {
      var bodyPad = parseInt(_ember.default.$('body').css('padding-right') || 0, 10);
      this.originalBodyPad = document.body.style.paddingRight || '';
      if (this.bodyIsOverflowing) {
        _ember.default.$('body').css('padding-right', bodyPad + this.get('scrollbarWidth'));
      }
    },


    /**
     * @method resetScrollbar
     * @private
     */
    resetScrollbar: function resetScrollbar() {
      _ember.default.$('body').css('padding-right', this.originalBodyPad);
    },


    /**
     * @property scrollbarWidth
     * @type number
     * @readonly
     * @private
     */
    scrollbarWidth: computed(function () {
      var scrollDiv = document.createElement('div');
      scrollDiv.className = 'modal-scrollbar-measure';
      this.get('modalElement').after(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      _ember.default.$(scrollDiv).remove();
      return scrollbarWidth;
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      if (this.get('isOpen')) {
        this.show();
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      _ember.default.$(window).off('resize.bs.modal');
      _ember.default.$('body').removeClass('modal-open');
      this.resetScrollbar();
    },


    _observeOpen: observer('isOpen', function () {
      if (this.get('isOpen')) {
        this.show();
      } else {
        this.hide();
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);

      var _getProperties = this.getProperties('isOpen', 'backdrop', 'fade'),
          isOpen = _getProperties.isOpen,
          backdrop = _getProperties.backdrop,
          fade = _getProperties.fade;

      this.set('showModal', isOpen && !fade);
      this.set('showBackdrop', isOpen && backdrop);
    }
  });
});