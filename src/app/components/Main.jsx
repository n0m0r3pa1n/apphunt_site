/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
		mui = require('material-ui'),
		Router = require("react-router"),
		RouteHandler = Router.RouteHandler,
		RaisedButton = mui.RaisedButton,
		AppBar = mui.AppBar,
		Paper = mui.Paper;

var Main = React.createClass({

	render: function() {

		return (
				<div>
					<AppBar title="AppHunt - BEST NEW apps every day">
						<Paper/>
					</AppBar>
					<div className="container apps-container">
						<RouteHandler/>
					</div>
				</div>
		)
	}
});

module.exports = Main;