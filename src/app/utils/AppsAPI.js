var AppsActions = require("../actions/AppsActions")

var $ = require("jquery")
var baseURL = "https://apphunt.herokuapp.com/"
var url = baseURL + "apps?date=2015-03-13&platform=Android&status=approved";

module.exports = {
	getApps: function() {
		$.get(url, function(data, status) {
			var apps = []
			for(var i=0; i< data.apps.length; i++) {
				var app = data.apps[i]
				app.icon = app.icon === undefined ? "" : app.icon
				app.createdBy = app.createdBy.name
				apps.push(app)
			}

			AppsActions.receiveApps(apps);
		});
	}
};
