var React = require('react'),
    mui = require('material-ui'),
    Voters = require('./details/Voters.jsx'),
    KeyCode = mui.Utils.KeyCode,
    Classable = mui.Mixins.Classable,
    WindowListenable = mui.Mixins.WindowListenable,
    Overlay = require('../../../node_modules/material-ui/src/js/overlay.jsx'),
    FloatingActionButton = mui.FloatingActionButton,
    RaisedButton = mui.RaisedButton,
    Paper = mui.Paper,
    Menu = mui.Menu;

var NavUtils = require('../utils/NavUtils')
var BrowserUtils = require('../utils/BrowserUtils')
var injectTapEventPlugin = require("react-tap-event-plugin");

var SocialShare = require('./details/SocialShare')

var RightNav = React.createClass({
    mixins: [Classable, WindowListenable],
    propTypes: {
        docked: React.PropTypes.bool,
        header: React.PropTypes.element,
        onChange: React.PropTypes.func,
        app: React.PropTypes.object,
        selectedIndex: React.PropTypes.number
    },

    windowListeners: {
        'keyup': '_onWindowKeyUp'
    },
    getDefaultProps: function () {
        return {
            docked: true
        };
    },

    getInitialState: function () {
        return {
            open: this.props.docked
        };
    },

    toggle: function () {
        this.setState({open: !this.state.open});
        return this;
    },

    close: function () {
        NavUtils.clearWindowUrl();
        this.setState({open: false});
        return this;
    },

    open: function () {
        this.setState({open: true});
        return this;
    },

    render: function () {
        var classes = this.getClasses('mui-right-nav', {
                'mui-closed': !this.state.open
            }),
            selectedIndex = this.props.selectedIndex,
            overlay;

        if (!this.props.docked) {
            injectTapEventPlugin();
            overlay = <Overlay show={this.state.open} onTouchTap={this._onOverlayTouchTap} />;
        }

        var app = this.props.app;
        var user = this.props.app.createdBy;
        var profilePicture = user !== undefined ? user.profilePicture : "";
        var username = user !== undefined ? user.username : "";
        var votes = app.votes !== undefined ? app.votes : [];
        var marketButtonSrc = app.platform == "Android" ?
            "./res/img/button-google-play.png" :
            "./res/img/button-app-store.png";

        var marketButtonWidth = 200;
        var footer =
            <footer className="footer">
                <h3 className="text-center">AppHunt</h3>
            </footer>

        if(BrowserUtils.isMobileDevice()){
            footer = ''
            marketButtonWidth = 120
        }


        var containerStyle = {
            overflowY: "scroll"
        }

        var marketButton = {
            display: "block"
        }

        var createdByStyle = {
            fontSize: 19,
            color: "rgba(0, 0, 0, 0.54)"
        }

        var usernameStyle = {
            fontSize: 19,
            color: "rgba(0, 0, 0, 0.87)"
        }

        var verticalAlign = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 20,
            marginRight: 30
        }
        return (
            <div className={classes} >
                {overlay}
                <Paper style={containerStyle}
                       ref="clickAwayableElement"
                       className="mui-right-nav-menu"
                       zDepth={2}
                       rounded={false}>
                    <div className="col-md-12 app-details">
                        <div className="row">
                            <img onClick={this.close} style={{ width: 30}} src="./res/img/ic_close.png" className="pull-right" />
                            <img className="col-md-3" src={app.icon} />
                            <div className="col-md-6">
                                <h1>{app.name}</h1>
                                <h3>{app.description}</h3>
                            </div>
                            <div className="col-md-1 col-md-offset-1">
                                <p>
                                    <FloatingActionButton primary={true} label={app.votesCount} iconClassName="muidocs-icon-action-grade">
                                        <span className="app-votes-btn">{app.votesCount}</span>
                                    </FloatingActionButton>
                                </p>
                            </div>
                        </div>
                    </div>
                    <SocialShare url={window.location.href} imageUrl={app.icon} />
                    <div className="col-md-12" style={verticalAlign}>
                        <div className="col-md-5">
                            <img className="createdby-avatar img-circle" src={profilePicture} />
                            <span style={createdByStyle}>&nbsp;Posted by</span>
                            <span style={usernameStyle}> @{username}</span>
                        </div>
                        <div className="col-md-7">
                            <a href={app.shortUrl} target="_blank" style={marketButton}>
                                <img src={marketButtonSrc} style={{width: marketButtonWidth}} className="col-md-offset-1"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <hr />
                    </div>
                    <Voters votes={votes} />
                    {footer}
                </Paper>
            </div>
        );
    },

    _onMenuItemClick: function (e, key, payload) {
        if (!this.props.docked) this.close();
        if (this.props.onChange && this.props.selectedIndex !== key) {
            this.props.onChange(e, key, payload);
        }
    },

    _onOverlayTouchTap: function () {
        this.close();
    },

    _onWindowKeyUp: function (e) {
        if (e.keyCode == KeyCode.ESC && !this.props.docked &&
            this.state.open) {
            this.close();
        }
    }

});

module.exports = RightNav;