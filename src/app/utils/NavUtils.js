var $ = require("jquery")

var NavUtils = {
    clearWindowUrl: function() {
		history.pushState(null,null,"#/");
        document.body.className -= " noScroll"
    },
    setUrl: function(url) {
		history.pushState(null,null,"#/" + url);
        document.body.className += " noScroll"
    }
};

module.exports = NavUtils