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

        var imgStyle = {
            width: 40,
            height: 40,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 20
        }
        return (
            <div className="pull-right">
                <a href="https://twitter.com/TheAppHunt" target="_blank"><img src="./res/img/twitter.png" style={imgStyle} /></a>
                <a href="https://www.facebook.com/theapphunt" target="_blank"><img src="./res/img/facebook.png" style={imgStyle} /></a>
                <a href="http://theapphunt.tumblr.com/" target="_blank"><img src="./res/img/tumblr.png" style={imgStyle} /></a>
                <a href="https://apphunters.wordpress.com/" target="_blank"><img src="./res/img/wordpress.png" style={imgStyle} /></a>
                <a href="https://www.youtube.com/channel/UCPnLaWyjNC6feTXUuhggJ-w" target="_blank"><img src="./res/img/youtube.png" style={imgStyle} /></a>
            </div>
        )
    },
    _onChange: function() {

    }
});

module.exports = AboutUs