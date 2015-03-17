var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppsConstants = require('../constants/AppsConstants');
var _ = require('underscore');

var data = {}
function loadApps(newData) {
	data = newData;
}

var AppStore = _.extend({}, EventEmitter.prototype, {
	getAppsData: function() {
		return data;
	},
	emitLoadMore: function() {
		this.emit('loadMore');
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
			loadApps(action.data);
			break;

		default:
			return true;
	}

	// If action was responded to, emit change event
	AppStore.emitLoadMore();

	return true;
})

module.exports = AppStore