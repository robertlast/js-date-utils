"use strict";
/**
 * Get a new date from the given date offsetted by the given offsets.
 * @function offset
 * @param {string|Date} baseDate The date to be offsetted.
 * @param {Object} offsets The offsets.
 * @param {number} [offsets.years] # years to offset.
 * @param {number} [offsets.months] # months to offset.
 * @param {number} [offsets.days] # days to offset.
 * @returns {Date} The new offsetted Date.
 */
function offset(baseDate, offsets){
	// Read in the offsets arguments:
	var years = offsets.years || 0;
	var months = offsets.months || 0;
	var days = offsets.days || 0;
	// Create new Date object with offsets:
	var offsettedDate = new Date();
	offsettedDate.setYear(baseDate.getFullYear() + years);
	offsettedDate.setMonth(baseDate.getMonth() + months);
	offsettedDate.setDate(baseDate.getDate() + days);
	return offsettedDate;
}

module.exports = offset;