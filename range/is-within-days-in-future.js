"use strict";
var offset = require('../offset');
/**
 * Is the input value a date within a certain number of days in the future?
 */
module.exports = function isWithinDaysInFuture(value, daysOut) {
	var now = new Date();
	var dateDaysOut = offset(now, {days: daysOut});
	return (Date(value) > dateDaysOut);
}