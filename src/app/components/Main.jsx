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
var BrowserUtils = require('../utils/BrowserUtils')

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
        var actionBarTitle = BrowserUtils.isMobileDevice() ?  'AppHunt' : 'AppHunt - BEST NEW apps every day'
        return (
            <div>
                <AppBar showMenuIconButton={false} title={actionBarTitle}>
                    <Paper/>
                    <DropDownMenu className="pull-right" ref="categories" menuItems={menuItems} onChange={this._onMenuItemSelected}/>
                    <AboutUs />
                </AppBar>
                <AppDetails {...this.props}/>

                <div className="container apps-container">
                    <AppHuntApp/>
                    <RouteHandler {...this.props}/>
                </div>
            </div>
        )
    }
});

module.exports = Main;