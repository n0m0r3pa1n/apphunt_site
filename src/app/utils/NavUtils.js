var $ = require("jquery")

var NavUtils = {
    scr: 0,
    clearWindowUrl: function() {
        if(this.scr != 0) {
            document.body.scrollTop = this.scr;
        }
		history.pushState(null,null,"#/");
        //window.location.hash = "#/";
    },
    setUrl: function(url) {
        this.scr = document.body.scrollTop;
		//window.location.hash =  "#/" + url;
		history.pushState(null,null,"#/" + url);
    }
};

module.exports = NavUtils