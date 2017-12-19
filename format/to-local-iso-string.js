"use strict";
/**
 * Converts a Date to an ISO 8601 'local' string (no timezone):
 * SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 * @param {Date} date
 * @returns {string} - The date in ISO 8601 local.
 */
module.exports = function toLocalISOString (date) {
	return date.toISOString().split('T')[0];
}
