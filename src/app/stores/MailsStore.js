var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MailsConstants = require('../constants/MailsConstants');
var _ = require('underscore');

var data = {}
function setUnsubscribedEmails(newData) {
    data = newData;
}

var MailsStore = _.extend({}, EventEmitter.prototype, {
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
        case MailsConstants.EMAIL_UNSUBSCRIBED:
            setUnsubscribedEmails(action.data);
            break;

        default:
            return true;
    }

    MailsStore.emitChange();

    return true;
})

module.exports = MailsStore