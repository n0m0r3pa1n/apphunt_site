var React = require("react"),
	AppsStore = require("../stores/AppsStore"),
	RaisedButton = require('material-ui').RaisedButton,
	FontIcon = require('material-ui').FontIcon;
var GooglePlayButton = require('./buttons/GooglePlayButton');
var AppleStoreButton = require('./buttons/AppleStoreButton');
var AppAPI = require('../api/AppAPI')

var Router = require('react-router');
var { RouteHandler, Link } = Router;

function getAppState() {
	return {
		app: {}
	};
}

var AppRow = React.createClass({
	appId: "",
	getInitialState: function() {
		return getAppState();
	},
	loadAppDetails: function() {
		//AppAPI.getAppDetails(this.appId);
	},
	render: function() {
		var app = this.props.app;
		this.appId = app._id;
		var platform = this.props.platform;
		var button = <GooglePlayButton url={app.url} />
		if(platform !== "Android") {
			button = <AppleStoreButton url={app.url} />
		}
		return (
			<div className="row col-md-12 appRow" onClick={this.loadAppDetails}>
				<div className="col-md-1">
					<img src={app.icon} className="app-icon"/>
				</div>
				<div className="col-md-8">
					<h3>{app.name}</h3>
					<p className="app-description">{app.description}</p>
				</div>
				<div className="col-md-3">
					<h3></h3>
					<p>
						{button}
					</p>
				</div>
			</div>
		)
	},
	_onChange: function() {

	}
});

module.exports = AppRow