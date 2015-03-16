var React = require("react"),
		AppsStore = require("../stores/AppsStore")
var AppRow = require("./AppRow.jsx")
var MoreApps = require("./MoreApps.jsx")
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
		var totalCount = appsDay.totalCount;

		var appsDate = new Date(appsDay.date);
		var dateString = getDateString(appsDate)
		var MoreAppsComponent;
		if (totalCount > 5) {
			MoreAppsComponent = <MoreApps />;
		} else {
			MoreAppsComponent = "";
		}
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
			{MoreAppsComponent}
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
		var month = (appsDate.getMonth() + 1)
		return appsDate.getFullYear() + "-" + getDoubleDigitDate(month) + "-" + getDoubleDigitDate(appsDate.getDate());
	}
}

function getDoubleDigitDate(date) {
	var str = date < 10 ? "0" + date : date;
	return str;
}

module.exports = AppDay