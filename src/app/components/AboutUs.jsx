var React = require("react"),
    mui = require('material-ui')
    Paper = mui.Paper,
    RaisedButton = mui.RaisedButton;
    FontIcon = mui.FontIcon;

var AboutUs = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        var url = "http://google.com"
        var aboutUsStyle = {
            paddingRight: 0,
            paddingLeft: 0,
            paddingTop:0,
            marginLeft: '1%',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.12);'
        }

        var iconStyle = {
            color: "#FFF",
            fontSize: 35,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 20
        }
        var iconContainerStyle = {
            display: "inline-block",
            marginTop: 10
        }
        return (
            <div className="pull-right">
                <a href="https://twitter.com/TheAppHunt" target="_blank" className="social_icon_cont"><span className="sfmsb-icon-twitter sfmsb-circle" style={iconStyle}></span></a>
                <a href="https://www.facebook.com/theapphunt" target="_blank" className="social_icon_cont"><span className="sfmsb-icon-facebook sfmsb-circle" style={iconStyle}></span></a>
                <a href="http://theapphunt.tumblr.com/" target="_blank" className="social_icon_cont"><span className="sfmsb-icon-tumblr sfmsb-circle" style={iconStyle}></span></a>
                <a href="https://apphunters.wordpress.com/" target="_blank" className="social_icon_cont"><span className="sfmsb-icon-wordpress sfmsb-circle" style={iconStyle}></span></a>
                <a href="https://www.youtube.com/channel/UCPnLaWyjNC6feTXUuhggJ-w" target="_blank" className="social_icon_cont"><span className="sfmsb-icon-youtube sfmsb-circle" style={iconStyle}></span></a>
            </div>
        )
    },
    _onChange: function() {

    }
});

module.exports = AboutUs