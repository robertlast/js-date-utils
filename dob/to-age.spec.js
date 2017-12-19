var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var getAgeFromDateOfBirth = require('./to-age.js');

describe('getAgeFromDateOfBirth', function() {
  it('getAgeFromDateOfBirth() should take a Date object representing date of birth and return the current age', function() {
    var today = new Date(); 
    expect(getAgeFromDateOfBirth(today)).to.equal(0);
  });
});

