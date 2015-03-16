var React = require('react'),
		mui = require('material-ui'),
		RaisedButton = mui.RaisedButton,
		AppBar = mui.AppBar,
		Paper = mui.Paper
		Progress = require('react-progress'),
		InfiniteScroll = require('react-infinite-scroll')(React);


var AppDay = require("./AppDay.jsx")
var AppsStore = require('../stores/AppsStore')
var AppsAPI = require('../utils/AppsAPI')

var appsData = []

function getAppsState() {
	return {data: appsData}
}

function setAppState(data) {
	appsData.push(data)
	return {data: appsData}
}

var AppsList = React.createClass({
	_hasMore: true,
	getInitialState: function() {
		return getAppsState();
	},
	componentDidMount: function() {
		AppsStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AppsStore.removeChangeListener(this._onChange);
	},

	_loadMore: function() {
		AppsAPI.getAppsForPreviousDay()
	},
	render: function() {
		if (this.state.data.length > 0) {
			var self = this, data = this.state.data;
			return (
					<div>
						<Paper zDepth={2}>
							<div className="container apps-container">
								<InfiniteScroll
								pageStart={0}
								loadMore={self._loadMore}
								hasMore={self._hasMore}
								threshold={2}
								loader={<div className="text-center"><strong>Loading</strong></div>}>
								{
										Object.keys(data).map(function(appsForDay){
											return(
													<AppDay apps={data[appsForDay]} />
											)
										})}
								</InfiniteScroll>
							</div>
						</Paper>
					</div>
			);
		} else {
			return (
					<div className="container apps-container">
						Loading ...
					</div>
			);
		}
	},
	_onChange: function() {
		this.replaceState(setAppState(AppsStore.getAppsData()));
	}
});

module.exports = AppsList;