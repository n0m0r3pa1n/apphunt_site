/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
		mui = require('material-ui'),
		Router = require("react-router"),
		RouteHandler = Router.RouteHandler,
		FlatButton = mui.FlatButton,
		AppBar = mui.AppBar,
		Paper = mui.Paper,
        AboutUs = require('./AboutUs.jsx');

var AppDetails = require('./details/AppDetails.jsx')
var AppStore = require('../stores/AppStore')
var AppAPI = require('../api/AppAPI')
var AppsAPI = require('../api/AppsAPI')
var AppHuntApp = require('./AppHuntApp.jsx')

var menuItems = [
	{ payload: '2', text: 'Android' },
	{ payload: '3', text: 'iOS' }
];
var Main = React.createClass({
	componentWillUnmount: function() {
		AppStore.removeLoadAppDetailsListener(this._getAppDetails);
	},
	componentDidMount: function() {
		AppStore.addLoadAppDetailsListener(this._getAppDetails);
	},
	_getAppDetails: function() {
		var app = AppStore.getAppsData();
		var appPlatformIndex = 0;
		if(app.platform !== "Android") {
			appPlatformIndex = 1;
		}

		if(this._selectedPlatformIndex == appPlatformIndex) {
			return;
		}
		this._selectedPlatformIndex = appPlatformIndex;
		this.refs.categories.setState({selectedIndex: this._selectedPlatformIndex});
		AppsAPI.getApps(app.platform);
	},
	_onMenuItemSelected: function(e, selectedIndex, menuItem) {
		this._selectedPlatformIndex = selectedIndex;
		AppsAPI.getApps(menuItem.text);
	},
	render: function() {
        var appId = this.props.params.appId;
        if(appId !== undefined) {
            AppAPI.getAppDetails(appId);
        }
        return (
            <div>
                <AppBar showMenuIconButton={false} title="AppHunt - BEST NEW apps every day">
                    <Paper/>
                    <DropDownMenu className="pull-right" ref="categories" menuItems={menuItems} onChange={this._onMenuItemSelected}/>
                </AppBar>
                <AppDetails {...this.props}/>
                <AboutUs />
                <div className="container apps-container">
                    <AppHuntApp/>
                    <RouteHandler />
                </div>
            </div>
        )

	}
});

module.exports = Main;