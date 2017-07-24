var exports = module.exports = {};

exports.getStrength = function(string) {
  var object = new strength(string);
  return object;
};

function strength(string) {
    this.numerator_value = set_numerator_value(string);
    this.numerator_unit = null;
    this.denominator_value = set_denominator_value(string);
    this.demoninator_unit = null;
}

function set_numerator_value(string) {
  if (extract_numbers(string)) {
    return extract_numbers(string)[0];
  }
  else {
    return null;
  }
}

function set_denominator_value(string) {
  if (extract_numbers(string)) {
    return extract_numbers(string)[extract_numbers(string).length-1];
  }
  else {
    return null;
  }
}

function extract_numbers(string) {
  var regex = /[+-]?\d+(\.\d+)?/g;
  var floats = string.match(regex);
  if (floats) {
    return floats.map(function(v) { return parseFloat(v); });
  }
}

function set_numerator_unis(string) {
  return string.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2');
}
