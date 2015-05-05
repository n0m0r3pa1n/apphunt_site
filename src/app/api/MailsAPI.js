var MailsActions = require("../actions/MailsActions")

var $ = require("jquery")
var baseURL = "https://devs-hunter.herokuapp.com/"

var MailsAPI = {
    unsubscribe: function(email) {
        var url = baseURL + "mails/unsubscribe";
        $.post(url, {email: email}, function(data, status) {
            MailsActions.unsubscribedEmail(data);
        });
    }
};

module.exports = MailsAPI