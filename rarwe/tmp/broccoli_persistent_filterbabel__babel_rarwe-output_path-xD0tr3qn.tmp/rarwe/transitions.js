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