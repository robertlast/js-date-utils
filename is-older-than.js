"use strict";
var getAgeFromDateOfBirth = require('./to-age');
/**
 * Is the input value a date of birth where the person in question is older than a given age?
 * @function isOlderThan
 * @param {Date} dob Date of birth.
 * @param {number} age Minimum age.
 * @returns {boolean}
 */
function isOlderThan(dob, age) {
	return (getAgeFromDateOfBirth(dob) >= age);
}

module.exports = isOlderThan;