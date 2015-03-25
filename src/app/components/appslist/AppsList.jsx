var React = require('react'),
		mui = require('material-ui'),
		RaisedButton = mui.RaisedButton,
		AppBar = mui.AppBar,
		Paper = mui.Paper
		DropDownMenu = mui.DropDownMenu,
		InfiniteScroll = require('react-infinite-scroll')(React);


var AppDay = require("./AppDay.jsx")
var AppsStore = require('../../stores/AppsStore')
var AppsAPI = require('../../api/AppsAPI')

var appsData = []
var menuItems = [
	{ payload: '2', text: 'Android' },
	{ payload: '3', text: 'iOS' }
];
var lastLoadedPlatform = menuItems[0].text;

function getAppsState() {
	return {data: appsData}
}

function setAppState(data) {
	if(data.platform !== lastLoadedPlatform) {
		appsData = []
	}
	lastLoadedPlatform = data.platform;
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
	_loadMore: function(page) {
		if(page === 1) {
			AppsAPI.getApps(lastLoadedPlatform, null)
		} else {
			AppsAPI.getAppsForPreviousDay()
		}
	},
	_onMenuItemSelected: function(e, selectedIndex, menuItem) {
		AppsAPI.getApps(menuItem.text);
	},
	render: function() {
		var self = this, data = this.state.data;
		return (
				<div>
					<Paper zDepth={2}>
						<div className="container apps-container">
							<DropDownMenu menuItems={menuItems} onChange={this._onMenuItemSelected}/>
							<InfiniteScroll
									pageStart={0}
									loadMore={self._loadMore}
									hasMore={self._hasMore}
									threshold={2}
									loader={<div className="text-center"><strong>Loading</strong></div>}>
								{
										Object.keys(data).map(function(appsForDay){
											return(
													<AppDay key={data[appsForDay].date} appDay={data[appsForDay]} platform={data[appsForDay].platform} />
											)
										})}
							</InfiniteScroll>
						</div>
					</Paper>
				</div>
		);
	},
	_onChange: function() {
		this.setState(setAppState(AppsStore.getAppsData()));
	}
});

module.exports = AppsList;