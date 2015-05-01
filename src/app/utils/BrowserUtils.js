
var BrowserUtils = {
    isMobileDevice: function() {
        console.log(window.outerWidth)
        return window.outerWidth < 550;
    }
};

module.exports = BrowserUtils