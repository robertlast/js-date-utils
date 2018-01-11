var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var isWithinDaysInPast = require('./is-within-days-in-past');

describe('isWithinDaysInPast', function() {
  it('isWithinDaysInPast() should return true if date is within a given number of days in the past', function() {
    var today = new Date();
    var tenDaysAgo = new Date();
    tenDaysAgo.setDate(today.getDate() - 10);
    expect(isWithinDaysInPast(today, 1)).to.be.true;
    expect(isWithinDaysInPast(today, 0)).to.be.true;
    expect(isWithinDaysInPast(tenDaysAgo, 9)).to.be.false;
    expect(isWithinDaysInPast(tenDaysAgo, 10)).to.be.true;
    expect(isWithinDaysInPast(tenDaysAgo, 11)).to.be.true;
  });
});