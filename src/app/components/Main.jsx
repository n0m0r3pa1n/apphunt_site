/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
		mui = require('material-ui'),
		Router = require("react-router"),
		RouteHandler = Router.RouteHandler,
		FlatButton = mui.FlatButton,
		AppBar = mui.AppBar,
		Paper = mui.Paper;

var AppDetails = require('./details/AppDetails.jsx')
var AppAPI = require('../api/AppAPI')

var Main = React.createClass({
	render: function() {
        var appId = this.props.params.appId;
        if(appId !== undefined) {
            AppAPI.getAppDetails(appId);
        }

		return (
				<div>
					<AppBar title="AppHunt - BEST NEW apps every day">
						<Paper/>
					</AppBar>
					<AppDetails {...this.props}/>
					<div className="container apps-container">
						<RouteHandler />
					</div>
				</div>
		)
	}
});

module.exports = Main;