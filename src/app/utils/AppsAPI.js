var AppsActions = require("../actions/AppsActions")

var $ = require("jquery")
var baseURL = "https://apphunt.herokuapp.com/"
var lastAppsDate = new Date();

var AppsAPI = {
	_getApps: function(date, platform, status, pageSize, page, callback) {
		lastAppsDate = date;
		var dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

		var url = baseURL + "apps?date="+dateStr+"&platform="+platform+"&status="+status+"&pageSize="+pageSize+"&page=" + page;
		$.get(url, function(data, status) {
			var apps = []
			for(var i=0; i< data.apps.length; i++) {
				var app = data.apps[i]
				app.icon = app.icon === undefined ? "" : app.icon
				app.createdBy = app.createdBy.name !== undefined ? app.createdBy.name : ""
				apps.push(app)
			}

			if(callback !== undefined && callback !== null) {
				callback(data);
			}
		});
	},
	getApps: function(callback) {
		this._getApps(new Date(), "Android", "all", 5, 1, function(data) {
			AppsActions.receiveApps({apps: data.apps, date: data.date, totalCount: data.totalCount});
		})
	},
	getAppsForPreviousDay: function (page) {
		lastAppsDate.setDate(lastAppsDate.getDate() - 1)
		AppsAPI._getApps(lastAppsDate, "Android", "all", 5, 1, function(data) {
			AppsActions.receiveApps({apps: data.apps, date: data.date, totalCount: data.totalCount});
		});
	},
	getMoreApps: function(day, status, platform, page) {
		page = page + 1;
		date = new Date(day)
		this._getApps(date, "Android", "all", 5, page, function (data) {
			AppsActions.loadMoreApps({apps: data.apps, date: data.date, totalCount: data.totalCount});
		});
	}
};

module.exports = AppsAPI