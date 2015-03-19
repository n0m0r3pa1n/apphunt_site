var $ = require("jquery")

var DateUtils = {
	getDoubleDigitDate: function(dateStr) {
		var split = dateStr.split('-');
		var year = split[0];
		var month = split[1];
		var day = split[2];

		if(month.length === 1) {
			month = "0" + month;
		}

		if(day.length === 1) {
			day = "0" + day;
		}

		return year + "-" + month + "-" + day;
	}
};

module.exports = DateUtils