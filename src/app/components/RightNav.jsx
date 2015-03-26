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
var injectTapEventPlugin = require("react-tap-event-plugin");

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
	getDefaultProps: function() {
		return {
			docked: true
		};
	},

	getInitialState: function() {
		return {
			open: this.props.docked
		};
	},

	toggle: function() {

		this.setState({ open: !this.state.open });
		return this;
	},

	close: function() {
		NavUtils.clearWindowUrl();
		this.setState({ open: false });
		return this;
	},

	open: function() {
		this.setState({ open: true });
		return this;
	},

	render: function() {
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
		var marketButtonSrc = app.platform == "Android" ? "../../res/img/button-google-play.png" : "../../res/img/button-app-store.png";

		var marketButton = {
			marginTop: "20%"
		}

		var createdByStyle = {
			marginTop: 20,
			fontSize: 19,
			color: "rgba(0, 0, 0, 0.54)"
		}

		var usernameStyle = {
			color: "rgba(0, 0, 0, 0.87)"
		}
		return (
			<div className={classes}>

        {overlay}
				<Paper
					ref="clickAwayableElement"
					className="mui-right-nav-menu"
					zDepth={2}
					rounded={false}>
					<div className="col-md-12 app-details">
						<div className="row">
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
					<div className="col-md-12">
						<p style={createdByStyle}><img className="createdby-avatar img-circle" src={profilePicture} />  &nbsp;Posted by
							<span style={usernameStyle}>@{username}</span>
						</p>
						<hr />
					</div>
					<Voters votes={votes} />
					<div>
						<a href={app.shortUrl} target="_blank">
							<img src={marketButtonSrc} className="col-md-4 col-md-offset-4" style={marketButton}/>
						</a>
					</div>
					<footer className="footer">
						<h3 className="text-center">AppHunt</h3>
					</footer>
				</Paper>
			</div>
		);
	},

	_onMenuItemClick: function(e, key, payload) {
		if (!this.props.docked) this.close();
		if (this.props.onChange && this.props.selectedIndex !== key) {
			this.props.onChange(e, key, payload);
		}
	},

	_onOverlayTouchTap: function() {
		this.close();
	},

	_onWindowKeyUp: function(e) {
		if (e.keyCode == KeyCode.ESC &&
			!this.props.docked &&
			this.state.open) {
			this.close();
		}
	}

});

module.exports = RightNav;