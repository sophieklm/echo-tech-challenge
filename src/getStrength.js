var exports = module.exports = {};
var regex = /[+-]?\d+(\.\d+)?/g;

exports.getStrength = function(string) {
  var object = new Strength(string);
  return object;
};

function Strength(string) {
  this.numerator_value = null;
  this.numerator_unit = null;
  this.denominator_value = null;
  this.denominator_unit = null;
  this.setStrength(string);
}

Strength.prototype.setStrength = function(string) {
  var numbers = extractNumbers(string);
  if (numbers && numbers.length > 1) {
    var d_units = extractUnits(string, 4);
    this.setDenominator(numbers, d_units);
  }
  if (numbers) {
    var n_units = extractUnits(string, 2);
    this.setNumerator(numbers, n_units);
  }
};

Strength.prototype.setDenominator = function(numbers, units) {
  this.denominator_value = numbers[1];
  this.denominator_unit = units;
};

Strength.prototype.setNumerator = function(numbers, units) {
  this.numerator_value = numbers[0];
  this.numerator_unit = units;
};

function extractNumbers(string) {
  var floats = string.match(regex);
  if (floats) {
    return floats.map(function(v) { return parseFloat(v); });
  }
}

function extractUnits(string, position) {
  return string.split(regex)[position].split(/[ \/]+/).shift();
}
