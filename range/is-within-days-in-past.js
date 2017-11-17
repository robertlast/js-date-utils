"use strict";
var offset = require('../offset');
/**
 * Is the input value a date within a given number of days in the past?
 */
module.exports = function isWithinDaysInPast(value, daysBefore) {
	var now = new Date();
	var dateDaysOut = offsetFromToday({days: (-1 * daysBefore)});
	return (Date(value) < dateDaysOut);
}