"use strict";
var offset = require('./offset');
/**
 * Is the input value a date within a given number of days in the past?
 * @function isWithinDaysInPast
 * @param {Date} value
 * @param {number} daysBefore
 * @returns {boolean}
 */
function isWithinDaysInPast(value, daysBefore) {
	// Get the given date without the time: 
	var date = new Date(value);
	date.setHours(0,0,0,0);
	// Get the date in the past:
	var now = new Date();
	var dateDaysBefore = offset(now, {days: (-1 * daysBefore)});
	dateDaysBefore.setHours(0,0,0,0)
	// Is the given date before the date in the past?
	return (date >= dateDaysBefore);
}

module.exports = isWithinDaysInPast;