var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var getAgeFromDateOfBirth = require('./to-age.js');

describe('getAgeFromDateOfBirth', function() {
  it('getAgeFromDateOfBirth() should take a Date object representing date of birth and return the current age', function() {
    var today = new Date(); 
    var tenYearsAgo = new Date(); 
    tenYearsAgo.setYear(today.getFullYear() - 10);
    expect(getAgeFromDateOfBirth(today)).to.equal(0);
    expect(getAgeFromDateOfBirth(tenYearsAgo)).to.equal(10);
  });
});

