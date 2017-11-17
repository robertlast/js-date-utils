"use strict";
/**
 * Is it a date or date like value?
 */
module.exports = function isValidDate(val) {
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
	}
}