var React = require('react'),
		mui = require('material-ui'),
		RaisedButton = mui.RaisedButton,
		AppBar = mui.AppBar,
		Paper = mui.Paper;


var AppDay = require("./AppDay.jsx")
var AppsStore = require('../stores/AppsStore')

var appsData = []

function getAppsState() {
	return {data: appsData}
}

function setAppState(data) {
	appsData.push(data)
	return {data: appsData}
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
		if (this.state.data.length > 0) {
			var self = this, data = this.state.data;
			return (
					<div>
						<Paper zDepth={2}>
							<div className="container apps-container">
								{
										Object.keys(data).map(function(appsForDay){
											return(
													<AppDay apps={data[appsForDay]} />
											)
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
		this.replaceState(setAppState(AppsStore.getAppsData()));
	}
});

module.exports = AppsList;