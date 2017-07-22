var extractor = require('../src/extractorFunctions');

describe('Extractor', function () {

  describe("getForm", function() {

    it('gets the form of a cream', function() {
      expect(extractor.getForm('Evening primrose oil 20% cream')).toEqual('cream');
    });

    it('gets the form of an oral solution', function() {
      expect(extractor.getForm('Candesartan 4mg/5ml oral solution')).toEqual('oral solution');
    });

    it('returns null if the type is unknown', function() {
      expect(extractor.getForm('Something 10mg unknown type')).toEqual(null);
    });

  });
});
