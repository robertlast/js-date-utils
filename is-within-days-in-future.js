"use strict";
var offset = require('./offset');
/**
 * Is the input value a date within a certain number of days in the future?
 * @function isWithinDaysInFuture
 * @param {Date} value
 * @param {number} daysOut
 * @returns {boolean}
 */
function isWithinDaysInFuture(value, daysOut) {
	// Get the given date without the time: 
	var date = new Date(value);
	date.setHours(0,0,0,0);
	// Get the date in the past:
	var now = new Date();
	var dateDaysOut = offset(now, {days: daysOut});
	dateDaysOut.setHours(0,0,0,0);
	// Is the given date before the date in the past?
	return (date <= dateDaysOut);
}

module.exports = isWithinDaysInFuture;