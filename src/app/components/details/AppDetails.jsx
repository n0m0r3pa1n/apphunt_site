/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
	mui = require('material-ui'),
	Router = require("react-router"),
	RouteHandler = Router.RouteHandler,
	HashLocation = Router.HashLocation,
	FlatButton = mui.FlatButton,
	MenuItem = mui.MenuItem,
	RightNav = require('./../RightNav.jsx'),
	AppBar = mui.AppBar,
	Paper = mui.Paper;

var AppStore = require('../../stores/AppStore')


var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;


var AppDetails = React.createClass({
	_loadAppDetails: function() {
        var app = AppStore.getAppsData();
        this.refs.rightDrawer.toggle();
        this.setState({app: app})
	},
	componentDidMount: function() {
		AppStore.addLoadAppDetailsListener(this._loadAppDetails)
	},
	componentWillUnmount: function() {
		AppStore.removeLoadAppDetailsListener(this._loadAppDetails);
	},
	urlChanged: function(route) {
		if(route.path === "/") {
			this.refs.rightDrawer.close();
		}
	},
	render: function() {
		HashLocation.addChangeListener(this.urlChanged);
        var app = this.state !== null ? this.state.app : {};
		return (
            <div>
				<RightNav ref="rightDrawer" docked={false} app={app} />
            </div>
		)
	}
});

module.exports = AppDetails;