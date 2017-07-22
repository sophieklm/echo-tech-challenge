var exports = module.exports = {};

exports.getForm = function(string) {
  var result = containsAny(string, formTypes());
  return result;
};

function containsAny(string, formTypes) {
    for (var i = 0; i != formTypes.length; i++) {
       var substring = formTypes[i];
       if (string.indexOf(substring) != -1) {
         return substring;
       }
    }
    return null;
}

function formTypes() {
  return ["tablets", "oral solution", "cream", "eye drops", "vials", "spray"];
}
