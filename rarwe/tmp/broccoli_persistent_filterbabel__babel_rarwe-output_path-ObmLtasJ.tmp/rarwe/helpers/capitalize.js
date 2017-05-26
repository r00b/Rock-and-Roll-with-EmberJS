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