/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
	mui = require('material-ui'),
	Router = require("react-router"),
	RouteHandler = Router.RouteHandler,
	FlatButton = mui.FlatButton,
	MenuItem = mui.MenuItem,
	RightNav = require('./RightNav.jsx'),
	AppBar = mui.AppBar,
	Paper = mui.Paper;

var AppStore = require('../stores/AppStore')

var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;


var AppDetails = React.createClass({
	contextTypes: {
		router: React.PropTypes.func.isRequired
	},
	handleClick: function() {
		//this.refs.rightDrawer.toggle();
	},
	_loadAppDetails: function() {
		console.log(this.context.router)
		var appId = this.context.router !== undefined ? this.context.router.getCurrentParams().appId : "";
		console.log(appId)
		//this.refs.rightDrawer.toggle();
	},
	componentDidMount: function() {
		AppStore.addLoadAppDetailsListener(this._loadAppDetails)
	},
	componentWillUnmount: function() {
		AppStore.addLoadAppDetailsListener(this._loadAppDetails);
	},
	render: function() {


		var menuItems = [
			{ route: 'get-started', text: 'Get Started' },
			{ route: 'css-framework', text: 'CSS Framework' },
			{ route: 'components', text: 'Components' },
			{ type: MenuItem.Types.SUBHEADER, text: 'Resources' },
			{
				type: MenuItem.Types.LINK,
				payload: 'https://github.com/callemall/material-ui',
				text: 'GitHub'
			},
		];
		return (
				<RightNav ref="rightDrawer" docked={false} menuItems={menuItems} />
		)
	}
});

module.exports = AppDetails;