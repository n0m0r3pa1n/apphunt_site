var React = require("react"),
		AppsStore = require("../../stores/AppsStore"),
		AppsAPI = require("../../api/AppsAPI");


var MoreApps = React.createClass({
	appsDay: {},
	currentPage: 1,
	handleClick: function() {
		AppsAPI.getMoreApps(this.appsDay.date, this.props.platform, "all", this.currentPage)
		this.currentPage = this.currentPage + 1;
	},
	render: function() {
		this.appsDay = this.props.appsDay;
        var style = {
            marginTop: 20
        }
		return (
				<div className="col-md-12 text-center" onClick={this.handleClick} style={style}>
						<span className="circle red-circle"></span>
						<span className="circle red-circle"></span>
						<span className="circle red-circle"></span>
				</div>
		)
	}
});

module.exports = MoreApps