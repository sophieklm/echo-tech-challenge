var exports = module.exports = {};

exports.getStrength = function(string) {
  var object = new strength(string);
  return object;
};

function strength(string) {
    this.numerator_value = set_numerator_value(string);
    this.numerator_unit = null;
    this.denominator_value = null;
    this.demoninator_unit = null;
}

function set_numerator_value(string) {
  var string_num = string.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2');
  return parseFloat(string_num);
}
