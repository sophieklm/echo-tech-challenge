var form = require('./src/getForm');
var strength = require('./src/getStrength');
var fileLineArray = [];
var lineReader = require('readline').createInterface({
input: require('fs').createReadStream('./files/drugs.txt')
});

lineReader.on('line', function (line) {
  console.log('Drug: ' + line);
  console.log('Form: ' + form.getForm(line));
  console.log(strength.getStrength(line));
  fileLineArray.push(line);
});
