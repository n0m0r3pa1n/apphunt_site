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

		var appsDate = new Date(appsDay.date);
		var dateString = getDateString(appsDate)
		return (
			<div>
				<h3>Apps for {dateString}</h3>
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

function getDateString(appsDate) {
	var date = new Date();
	var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	var yesterday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1)

	var isToday = (+appsDate === +today);
	var isYesterday = (+appsDate === +yesterday);
	if(isToday === true) {
		return "today";
	} else if(isYesterday == true) {
		return "yesterday";
	} else {
		return appsDate;
	}

}

module.exports = AppDay