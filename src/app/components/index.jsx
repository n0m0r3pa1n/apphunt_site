var React = require('react'),
		mui = require('material-ui'),
		RaisedButton = mui.RaisedButton,
		AppBar = mui.AppBar,
		Paper = mui.Paper;

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

var Index = React.createClass({
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
			console.log(apps)
			return (
					<div>
						{
								Object.keys(this.state.apps).map(function(app){
									return (
											<p> {apps[app].name} </p>
									);
								})}
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

module.exports = Index;