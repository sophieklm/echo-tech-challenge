var extractor = require('../src/getStrength');

describe("getStrength", function() {

  describe("numerator", function() {

    it('gets the numerator value of strength', function() {
      expect(extractor.getStrength('Oxcarbazepine 600mg tablets').numerator_value).toEqual(600);
    });

    it('gets the numerator value of strength for a float', function() {
      expect(extractor.getStrength('Glucosamine sulfate 1.5g tablets').numerator_value).toEqual(1.5);
    });

    it('returns null if no value present', function() {
      expect(extractor.getStrength('Aveeno Intense Relief hand cream').numerator_value).toEqual(null);
    });

    // it('returns the units for mg', function() {
    //   expect(extractor.getStrength('Sumatriptan 100mg tablets').numerator_unit).toEqual('mg');
    // });
    //
    // it('returns units for %', function() {
    //   expect(extractor.getStrength('Betnovate 0.1% cream').numerator_unit).toEqual('%');
    // });

    it('returns null if no units', function() {
      expect(extractor.getStrength('NatraVits Vitamin B Complex tablets').numerator_unit).toEqual(null);
    });

    it('only returns first digit for numerator if denominator also present', function() {
      expect(extractor.getStrength('Indometacin 5mg/5ml oral solution').numerator_value).toEqual(5);
    });

  });

  describe("denominator", function() {

    it('returns the denominator value', function() {
      expect(extractor.getStrength('Lisinopril 14mg/5ml oral solution').denominator_value).toEqual(5);
    });

    // it('returns the units', function() {
    //   expect(extractor.getStrength('Indometacin 5mg/5ml oral solution').denominator_unit).toEqual('ml');
    // });

  });

});
