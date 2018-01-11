var chai = require('chai');
var expect = chai.expect;
var offsetDate = require('./offset');

describe('offsetDate', function() {
  it('offsetDate() should take a date and an offset (object) and return the date offsetted by the given amount.', function() {
    var offset = { 
        years: 1,
        months: 1,
        days: 1
    };
    var baseDate = new Date('1999-01-01');
    var offsettedDate = offsetDate(baseDate, offset); 
    expect(offsettedDate.getFullYear()).to.be.equal(2000);
    expect(offsettedDate.getMonth()).to.be.equal(2-1);  // .getMonth() returns month as 0-11
    expect(offsettedDate.getDate()).to.be.equal(2);
  });
});