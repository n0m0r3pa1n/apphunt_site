var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppsConstants = require('../constants/AppsConstants');
var _ = require('underscore');

var data = {}
function setData(newData) {
	data = newData;
}

var AppStore = _.extend({}, EventEmitter.prototype, {
	getAppsData: function() {
		return data;
	},
	emitLoadMore: function() {
		this.emit('loadMore');
	},

	emitLoadAppDetails: function() {
		this.emit('loadAppDetails');
	},
	addLoadAppDetailsListener: function(callback) {
		this.on('loadAppDetails', callback);
	},
	removeLoadAppDetailsListener: function(callback) {
		this.removeListener('loadAppDetails', callback);
	},
	// Add change listener
	addLoadMoreListener: function(callback) {
		this.on('loadMore', callback);
	},
	// Remove change listener
	removeLoadMoreListener: function(callback) {
		this.removeListener('loadMore', callback);
	}
})


AppDispatcher.register(function(payload) {
	var action = payload.action;
	var text;

	switch(action.actionType) {
		case AppsConstants.LOAD_MORE_APPS:
			setData(action.data);
			AppStore.emitLoadMore();
			break;
		case AppsConstants.LOAD_APP_DETAILS:
			setData(action.data);
			AppStore.emitLoadAppDetails();
			break
		default:
			return true;
	}

	return true;
})

module.exports = AppStore