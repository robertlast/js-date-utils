"use strict";
/**
 * Calculate age from the given birthday.
 * @see SOURCE: https://stackoverflow.com/questions/4060004/calculate-age-in-javascript
 * @function getAgeFromDateOfBirth
 * @param {string} dobString Birthday/DOB.
 * @returns {number} The age in number of whole years.
 */
function getAgeFromDateOfBirth(dobString) {
  var today = new Date();
  var birthDate = new Date(dobString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
	  }
  return age;
}

module.exports = getAgeFromDateOfBirth;