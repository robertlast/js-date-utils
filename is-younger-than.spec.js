var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var isYoungerThan = require('./is-younger-than');

describe('isYoungerThan', function() {
  it('isYoungerThan() should return true if a date of birth correlates to an age younger than the given age', function() {
    var today = new Date();
    var tenYearsAgo = new Date();
    tenYearsAgo.setYear(today.getFullYear() - 10);
    expect(isYoungerThan(today, 1)).to.be.true;
    expect(isYoungerThan(today, 0)).to.be.false;
    expect(isYoungerThan(tenYearsAgo, 9)).to.be.false;
    expect(isYoungerThan(tenYearsAgo, 10)).to.be.false;
    expect(isYoungerThan(tenYearsAgo, 11)).to.be.true;
  });
});