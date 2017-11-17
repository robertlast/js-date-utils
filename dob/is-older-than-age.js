"use strict";
var getAgeFromDateOfBirth = require('./to-age');
/**
 * Is the input value a date of birth where the person in question is older than a given age?
 */
module.exports = function isOlderThan(value, minAge) {
	return (getAgeFromDateOfBirth(value) > minAge);
}
