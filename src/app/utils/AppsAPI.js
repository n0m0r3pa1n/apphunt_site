var AppsActions = require("../actions/AppsActions")

var $ = require("jquery")
var DateUtils = require('../utils/DateUtils')
var baseURL = "https://apphunt.herokuapp.com/"
var lastAppsDate = new Date();
var lastAppsPlatform = "";

var AppsAPI = {
	_getApps: function(date, platform, status, pageSize, page, callback) {
		lastAppsDate = date;
		lastAppsPlatform = platform;
		var dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

		var url = baseURL + "apps?date="+dateStr+"&platform="+platform+"&status=approved&pageSize="+pageSize+"&page=" + page;
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
	getApps: function(platform, callback) {
		this._getApps(new Date(), platform, "all", 5, 1, function(data) {
			AppsActions.receiveApps({apps: data.apps, date: DateUtils.getDoubleDigitDate(data.date), totalCount: data.totalCount, platform: platform});
		})
	},
	getAppsForPreviousDay: function (page) {
		lastAppsDate.setDate(lastAppsDate.getDate() - 1)
		AppsAPI._getApps(lastAppsDate, lastAppsPlatform, "all", 5, 1, function(data) {
			AppsActions.receiveApps({apps: data.apps, date: DateUtils.getDoubleDigitDate(data.date), totalCount: data.totalCount, platform: lastAppsPlatform});
		});
	},
	getMoreApps: function(day, platform, status, page) {
		page = page + 1;
		date = new Date(day)
		this._getApps(date, platform, status, 5, page, function (data) {
			AppsActions.loadMoreApps({apps: data.apps, date: DateUtils.getDoubleDigitDate(data.date), totalCount: data.totalCount, platform: platform});
		});
	}
};

module.exports = AppsAPI