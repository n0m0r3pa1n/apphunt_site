var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppsConstants = require('../constants/AppsConstants');

var AppsActions = {
	receiveApps: function(data) {
		AppDispatcher.handleViewAction({
			actionType: AppsConstants.RECEIVE_DATA,
			data: data
		})
	},
	loadMoreApps: function(data) {
		AppDispatcher.handleViewAction({
			actionType: AppsConstants.LOAD_MORE_APPS,
			data: data
		})
	},
	loadAppDetails: function(data) {
		AppDispatcher.handleViewAction({
			actionType: AppsConstants.LOAD_APP_DETAILS,
			data: data
		})
	}
};

module.exports = AppsActions;