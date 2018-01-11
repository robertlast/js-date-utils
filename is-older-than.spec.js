var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var isOlderThan = require('./is-older-than');

describe('isOlderThan', function() {
  it('isOlderThan() should return true if a date of birth correlates to an age greater than the given age', function() {
    var today = new Date();
    var tenYearsAgo = new Date();
    tenYearsAgo.setYear(today.getFullYear() - 10);
    expect(isOlderThan(today, 1)).to.be.false;
    expect(isOlderThan(today, 0)).to.be.true;
    expect(isOlderThan(tenYearsAgo, 9)).to.be.true;
    expect(isOlderThan(tenYearsAgo, 10)).to.be.true;
    expect(isOlderThan(tenYearsAgo, 11)).to.be.false;
  });
});