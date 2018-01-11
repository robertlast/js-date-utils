var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var isDate = require('./is-date');

describe('isDate', function() {
  it('isDate() return true if the given value is a date object or date formatted string', function() {
    var testDate = new Date('1999-09-09');
    expect(isDate(testDate)).to.be.true;
    expect(isDate(testDate.toString())).to.be.true;
  });
});