var React = require("react"),
		AppStore = require("../stores/AppStore")
var AppRow = require("./AppRow.jsx")
var MoreApps = require("./MoreApps.jsx")

var AppDay = React.createClass({
	appsDay: {
		apps: [],
		date: "",
		totalCount: 0
	},
	getInitialState: function() {
		return this.appsDay;
	},
	_loadMore: function() {
		var data = AppStore.getAppsData();
		var appDate = new Date(getFormattedDateString(new Date(this.appsDay.date)))
		appDate.setMonth(appDate.getMonth() + 1)
		appDate.setHours(0)
		var receivedDate = new Date(data.date)
		var areEqualDates = (+appDate === +receivedDate)
		if(areEqualDates) {
			this.setState(data)
			return;
		}

	},
	componentDidMount: function() {
		AppStore.addLoadMoreListener(this._loadMore)
	},
	componentWillUnmount: function() {
		AppStore.removeLoadMoreListener(this._loadMore);
	},
	render: function() {
		var self = this;
		this.appsDay = this.props.appDay;

		var apps = this.appsDay.apps;
		var totalCount = this.appsDay.totalCount;

		if(this.state.apps !== null && this.state.apps.length > 0) {
			apps = apps.concat(this.state.apps);
		}

		var appsDate = new Date(this.appsDay.date);
		var dateString = getDateString(appsDate)

		var MoreAppsComponent;
		if (apps.length < totalCount) {
			MoreAppsComponent = <MoreApps appsDay={this.appsDay}/>;
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
									<AppRow key={apps[app].name} app={apps[app]} />
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

function getFormattedDateString(date) {
	return date.getFullYear() + "-" + getDoubleDigitDate(date.getMonth()) + "-" + getDoubleDigitDate(date.getDate());
}

function getDoubleDigitDate(date) {
	var str = date < 10 ? "0" + date : date;
	return str;
}

module.exports = AppDay