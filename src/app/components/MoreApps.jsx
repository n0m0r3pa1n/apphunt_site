var React = require("react"),
		AppsStore = require("../stores/AppsStore"),
		AppsAPI = require("../utils/AppsAPI");


var MoreApps = React.createClass({
	appsDay: {},
	handleClick: function() {
		AppsAPI.getMoreApps(this.appsDay.date, "all", "android", 1)
	},
	render: function() {
		this.appsDay = this.props.appsDay;
		return (
				<div className="col-md-12 text-center" onClick={this.handleClick}>
						<span className="circle red-circle"></span>
						<span className="circle red-circle"></span>
						<span className="circle red-circle"></span>
				</div>
		)
	}
});

module.exports = MoreApps