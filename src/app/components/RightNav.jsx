var React = require('react'),
    mui = require('material-ui'),
    KeyCode = mui.Utils.KeyCode,
    Classable = mui.Mixins.Classable,
    WindowListenable = mui.Mixins.WindowListenable,
    Overlay = require('../../../node_modules/material-ui/src/js/overlay.jsx'),
    Paper = mui.Paper,
    Menu = mui.Menu;
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
        console.log(this.props.app)
        var app = this.props.app;
        var user = this.props.app.createdBy;

        return (
            <div className={classes}>

        {overlay}
                <Paper
                    ref="clickAwayableElement"
                    className="mui-right-nav-menu"
                    zDepth={2}
                    rounded={false}>
                    <div>
                        <img src={app.icon} />
                        <h2>{app.name}</h2>
                        <h5>{app.description}</h5>
                    </div>
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