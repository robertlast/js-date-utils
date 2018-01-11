var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var toLocalISOString = require('./to-local-iso-string');

describe('toLocalISOString', function() {
  it('toLocalISOString() should take a Date object and return a corresponding ISO 8601 local string', function() {
    var testDate = new Date('1999-09-09')
    expect(toLocalISOString(testDate)).to.equal('1999-09-09');
  });
});