var form = require('./src/getForm');
var strength = require('./src/getStrength');

module.exports.getForm = function(string){
  return form.getForm(string);
};

module.exports.getStrength = function(string){
  return strength.getStrength(string);
};
