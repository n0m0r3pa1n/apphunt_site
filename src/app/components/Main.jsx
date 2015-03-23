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



var Main = React.createClass({
	handleClick: function() {
		this.refs.rightDrawer.toggle();
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
				<div>
					<AppBar title="AppHunt - BEST NEW apps every day">
						<Paper/>
					</AppBar>
					<FlatButton label="Secondary" secondary={true} onClick={this.handleClick} />
					<RightNav ref="rightDrawer" docked={false} menuItems={menuItems} />
					<div className="container apps-container">
						<RouteHandler/>
					</div>
				</div>
		)
	}
});

module.exports = Main;