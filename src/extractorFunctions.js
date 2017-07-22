var exports = module.exports = {};

exports.getForm = function(string) {
  var result = containsAny(string, formTypes());
  return result;
};

function containsAny(string, formTypes) {
    for (var i = 0; i != formTypes.length; i++) {
       var substring = formTypes[i];
       if (string.toLowerCase().indexOf(substring) != -1) {
         return substring;
       }
    }
    return null;
}

function formTypes() {
  return ["tablets", "oral solution", "cream", "eye drops", "vials", "spray"];
}

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
