var AppsActions = require("../actions/AppsActions")

var $ = require("jquery")
var baseURL = "https://apphunt.herokuapp.com/"

var AppAPI = {
	getAppDetails: function(appId) {
		var url = baseURL + "apps/" + appId;
		$.get(url, function(data, status) {
			AppsActions.loadAppDetails(data);
		});
	}
};

module.exports = AppAPI