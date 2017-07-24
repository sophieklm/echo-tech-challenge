var extractor = require('../src/getStrength');

describe("getStrength", function() {

  it('gets the numerator value of strength', function() {
    expect(extractor.getStrength('Oxcarbazepine 600mg tablets').numerator_value).toEqual(600);
  });

});
