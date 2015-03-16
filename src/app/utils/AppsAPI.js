var AppsActions = require("../actions/AppsActions")

var $ = require("jquery")
var baseURL = "https://apphunt.herokuapp.com/"
var lastAppsDate = new Date();

var AppsAPI = {
	_getApps: function(date, platform, status, callback) {
		lastAppsDate = date;
		var dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
		var url = baseURL + "apps?date="+dateStr+"&platform="+platform+"&status="+status+"";
		$.get(url, function(data, status) {
			var apps = []
			for(var i=0; i< data.apps.length; i++) {
				var app = data.apps[i]
				app.icon = app.icon === undefined ? "" : app.icon
				app.createdBy = app.createdBy.name !== undefined ? app.createdBy.name : ""
				apps.push(app)
			}

			if(callback !== undefined && callback !== null) {
				callback();
			}

			AppsActions.receiveApps({apps: apps, date: data.date, totalCount: data.totalCount});
		});
	},
	getApps: function(callback) {
		this._getApps(new Date(), "Android", "all", callback)
	},
	getAppsForPreviousDay: function (page) {
		lastAppsDate.setDate(lastAppsDate.getDate() - 1)
		AppsAPI._getApps(lastAppsDate, "Android", "all", null);
	}
};

module.exports = AppsAPI