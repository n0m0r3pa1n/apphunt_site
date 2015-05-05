var AppDispatcher = require('../dispatcher/AppDispatcher');
var MailsConstants = require('../constants/MailsConstants');

var MailsActions = {
    unsubscribedEmail: function(data) {
        AppDispatcher.handleViewAction({
            actionType: MailsConstants.EMAIL_UNSUBSCRIBED,
            data: data
        })
    }
};

module.exports = MailsActions;