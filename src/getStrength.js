var exports = module.exports = {};

exports.getStrength = function(string) {
  var object = new strength(string);
  return object;
};

function strength(string) {
    this.numerator_value = set_value(string, 'numerator');
    this.numerator_unit = null;
    this.denominator_value = set_value(string, 'denominator');
    this.demoninator_unit = null;
}

function set_value(string, type) {
  var numbers = extract_numbers(string);
  if (numbers) {
    return get_value(numbers, type);
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

function get_value(array, type) {
  if (type == 'denominator') {
    return array[array.length-1];
  }
  else if (type == 'numerator') {
    return array[0];
  }
}

function extract_units(string) {
  return string.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2');
}
