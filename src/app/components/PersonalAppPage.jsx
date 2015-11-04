/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
    mui = require('material-ui'),
    Router = require("react-router"),
    RouteHandler = Router.RouteHandler,
    HashLocation = Router.HashLocation,
    FlatButton = mui.FlatButton,
    MenuItem = mui.MenuItem,
    AppBar = mui.AppBar,
    Paper = mui.Paper;

var AppStore = require('../stores/AppStore')


var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;


var PersonalAppPage = React.createClass({
    _loadAppDetails: function() {
        var app = AppStore.getAppsData();
        this.setState({app: app})
    },
    componentDidMount: function() {
        AppStore.addLoadAppDetailsListener(this._loadAppDetails)
    },
    componentWillUnmount: function() {
        AppStore.removeLoadAppDetailsListener(this._loadAppDetails);
    },
    render: function() {
        var appId = this.props
        console.log(appId)
        var app = this.state !== null ? this.state.app : {};
        return (
            <div style={{width: '100%', height: '100%'}}>
                <h4>Test</h4>
            </div>
        )
    }
});

module.exports = PersonalAppPage;