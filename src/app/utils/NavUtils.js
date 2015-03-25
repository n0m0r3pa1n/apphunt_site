var $ = require("jquery")

var NavUtils = {
    scr: 0,
    clearWindowUrl: function() {
        if(this.scr != 0) {
            document.body.scrollTop = this.scr;
        }
        window.location.hash = "#/";
    },
    setUrl: function(url) {
        this.scr = document.body.scrollTop;
        window.location.hash =  "#/" + url;

    }
};

module.exports = NavUtils