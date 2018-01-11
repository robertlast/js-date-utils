var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var isWithinDaysInFuture = require('./is-within-days-in-future');

describe('isWithinDaysInFuture', function() {
  it('isWithinDaysInFuture() should return true if date is within a given number of days in the future', function() {
    var today = new Date();
    var tenDaysFromNow = new Date();
    tenDaysFromNow.setDate(today.getDate() + 10);
    expect(isWithinDaysInFuture(today, 1)).to.be.true;
    expect(isWithinDaysInFuture(today, 0)).to.be.true;
    expect(isWithinDaysInFuture(tenDaysFromNow, 9)).to.be.false;
    expect(isWithinDaysInFuture(tenDaysFromNow, 10)).to.be.true;
    expect(isWithinDaysInFuture(tenDaysFromNow, 11)).to.be.true;
  });
});