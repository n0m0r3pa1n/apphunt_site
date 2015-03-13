var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppsConstants = require('../constants/AppsConstants');
var _ = require('underscore');

var data = {}
function loadApps(newData) {
	data = newData;
}

var AppsStore = _.extend({}, EventEmitter.prototype, {
	getAppsData: function() {
		return data;
	},
	emitChange: function() {
		this.emit('change');
	},

	// Add change listener
	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	// Remove change listener
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
})


AppDispatcher.register(function(payload) {
	var action = payload.action;
	var text;

	switch(action.actionType) {

		// Respond to RECEIVE_DATA action
		case AppsConstants.RECEIVE_DATA:
			loadApps(action.data);
			break;

		default:
			return true;
	}

	// If action was responded to, emit change event
	AppsStore.emitChange();

	return true;
})

module.exports = AppsStore