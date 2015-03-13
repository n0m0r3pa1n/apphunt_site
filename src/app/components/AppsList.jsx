var React = require('react'),
		mui = require('material-ui'),
		RaisedButton = mui.RaisedButton,
		AppBar = mui.AppBar,
		Paper = mui.Paper;

var AppRow = require("./AppRow.jsx")
var AppsStore = require('../stores/AppsStore')

function getAppsState() {
	return {
		apps: []
	};
}

function setAppState(appsList) {
	return {
		apps: appsList
	};
}

var AppsList = React.createClass({
	getInitialState: function() {
		return getAppsState();
	},
	componentDidMount: function() {
		AppsStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AppsStore.removeChangeListener(this._onChange);
	},
	render: function() {
		if (this.state.apps.length > 0) {
			var self = this, apps = this.state.apps;
			return (
					<div>
						<Paper zDepth={2}>
								<div className="container apps-container">
									{
									Object.keys(apps).map(function(app){
										return (
												 <AppRow key={apps[app].id} app={apps[app]} />
										);
									})}
									</div>
						</Paper>
					</div>
			);
		} else {
			return (
					<div>
						Empty
					</div>
			);
		}
	},
	_onChange: function() {
		this.setState(setAppState(AppsStore.getApps()));
	}
});

module.exports = AppsList;