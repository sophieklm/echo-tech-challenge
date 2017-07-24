var exports = module.exports = {};

exports.getStrength = function(string) {
  var object = new Strength(string);
  return object;
};

function Strength(string) {
    this.numerator_value = null;
    this.numerator_unit = null;
    this.denominator_value = null;
    this.demoninator_unit = null;
    this.setStrength(string);
}

Strength.prototype.setStrength = function(string) {
  var numbers = extract_numbers(string);
  if (numbers && numbers.length > 1) {
    this.denominator_value = numbers[numbers.length-1];
  }
  if (numbers) {
    this.numerator_value = numbers[0];
  }
};

function extract_numbers(string) {
  var regex = /[+-]?\d+(\.\d+)?/g;
  var floats = string.match(regex);
  if (floats) {
    return floats.map(function(v) { return parseFloat(v); });
  }
}
