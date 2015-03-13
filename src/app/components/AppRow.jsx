var React = require("react"),
		AppsStore = require("../stores/AppsStore")

function getAppState() {
	return {
		app: {}
	};
}

var AppRow = React.createClass({
	getInitialState: function() {
		return getAppState();
	},
	render: function() {
		var app = this.props.app;
		return (
				<div className="row">
					<div className="col-md-1">
						<img src={app.icon} className="app-icon"/>
					</div>
					<div className="col-md-10">
						<h3>{app.name}</h3>
						<p className="app-description">{app.description}</p>
					</div>
				</div>
		)
	},
	_onChange: function() {

	}
});

module.exports = AppRow