/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
		mui = require('material-ui'),
		Router = require("react-router"),
		RouteHandler = Router.RouteHandler,
		FlatButton = mui.FlatButton,
		AppBar = mui.AppBar,
		Paper = mui.Paper;

var AppDetails = require('./AppDetails.jsx')
var Main = React.createClass({
	render: function() {
        var test = this.props;
		return (
				<div>
					<AppBar title="AppHunt - BEST NEW apps every day">
						<Paper/>
					</AppBar>
					<AppDetails />
					<div className="container apps-container">
						<RouteHandler {...test} />
					</div>
				</div>
		)
	}
});

module.exports = Main;