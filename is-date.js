"use strict";
/**
 * Is given value a date object or date like value (i.e. date formatted string)
 * @function isDate
 * @param val The value to check.
 * @returns {boolean}
 */
function isDate(val) {
	if (!(val instanceof Date)) {
		// It's not a Date, so try to parse it into one:
		try {
			var dateNum = Date.parse(val);
			if (!isNaN(dateNum)) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			// Couldn't parse it into a date, so it's not a date:
			return false;
		}
	} else {
		return true;
	}
}

module.exports = isDate;