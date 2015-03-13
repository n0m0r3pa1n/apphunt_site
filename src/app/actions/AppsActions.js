var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppsConstants = require('../constants/AppsConstants');

var AppsActions = {
	receiveApps: function(data) {
		AppDispatcher.handleAction({
			actionType: AppsConstants.RECEIVE_DATA,
			data: data
		})
	}
};

module.exports = AppsActions;