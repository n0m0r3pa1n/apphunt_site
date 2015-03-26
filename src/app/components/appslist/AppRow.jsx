var React = require("react"),
	AppsStore = require("../../stores/AppsStore"),
    {RaisedButton, FloatingActionButton, FontIcon, FlatButton} = require('material-ui');
var GooglePlayButton = require('./../buttons/GooglePlayButton');
var AppleStoreButton = require('./../buttons/AppleStoreButton');
var AppAPI = require('../../api/AppAPI')
var NavUtils = require('../../utils/NavUtils')

var Router = require('react-router');
var { RouteHandler, Link } = Router;

function getAppState() {
	return {
		app: {}
	};
}

var AppRow = React.createClass({
	appId: "",
	getInitialState: function() {
		return getAppState();
	},
	loadAppDetails: function() {
        NavUtils.setUrl('apps/' + this.appId)
		AppAPI.getAppDetails(this.appId);
	},
	render: function() {
		var app = this.props.app;
		this.appId = app._id;
		var platform = this.props.platform;
		var button = <GooglePlayButton url={app.shortUrl} />
		if(platform !== "Android") {
			button = <AppleStoreButton url={app.shortUrl} />
		}

        var params = {
            appId: this.appId
        }
        var votesBtnStyle = {
            marginTop: "50%",
            fontSize: 16,
            color: "rgba(0, 0, 0, 0.54)"

        }
		return (
			<div className="row col-md-12 appRow" onClick={this.loadAppDetails}>
				<div className="col-md-1">
					<img src={app.icon} className="app-icon"/>
				</div>
				<div className="col-md-8">
					<h3>{app.name}</h3>
					<p className="app-description">{app.description}</p>
				</div>
				<div className="col-md-2">
					<h3></h3>
					<p>
						{button}
					</p>
				</div>
                <div className="col-md-1">
                    <div style={votesBtnStyle}>
                        <p>
                            <FloatingActionButton disabled={true} label={app.votesCount} iconClassName="muidocs-icon-action-grade" >
                                <span>{app.votesCount}</span>
                            </FloatingActionButton>
                        </p>
                    </div>
                </div>
			</div>
		)
	},
	_onChange: function() {

	}
});

module.exports = AppRow