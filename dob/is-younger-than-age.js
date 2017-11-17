"use strict";
var getAgeFromDateOfBirth = require('./to-age');
/**
 * Is the input value a date of birth where the person in question is younger than a given age?
 */
module.exports = function isYoungerThan(value, maxAge) {
	return (getAgeFromDateOfBirth(value) < maxAge);
}
