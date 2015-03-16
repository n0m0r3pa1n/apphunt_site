var React = require("react"),
		AppsStore = require("../stores/AppsStore");

var MoreApps = React.createClass({
	render: function() {
		return (
				<div className="col-md-12 text-center">
						<span className="circle red-circle"></span>
						<span className="circle red-circle"></span>
						<span className="circle red-circle"></span>
				</div>
		)
	}
});

module.exports = MoreApps