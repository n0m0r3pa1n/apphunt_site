var React = require("react"),
		AppsStore = require("../stores/AppsStore")
var AppRow = require("./AppRow.jsx")
function getAppState() {
	return {
		app: {},
		date: "",
		totalCount: ""
	};
}

var AppDay = React.createClass({
	getInitialState: function() {
		return getAppState();
	},
	render: function() {
		var appsDay = this.props.apps;
		var apps = appsDay.apps;
		return (
			<div>
				<h3>Apps for {appsDay.date}</h3>
				{
					Object.keys(apps).map(function(app){
						return (
								<div>
									<p>{apps[app].date}</p>
									<AppRow key={apps[app].id} app={appsDay.apps[app]} />
								</div>
						);
					})
				}
			</div>
		)
	}
});

module.exports = AppDay