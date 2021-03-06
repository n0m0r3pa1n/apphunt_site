var React = require("react"),
		AppStore = require("../../stores/AppStore")
var AppRow = require("./AppRow.jsx")
var MoreApps = require("./MoreApps.jsx");
var moment = require('moment');

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
		var appDate = new Date(moment(this.appsDay.date).format("YYYY-MM-DD"))
		appDate.setHours(0)

		var receivedDate = new Date(moment(data.date).format("YYYY-MM-DD"))
		receivedDate.setHours(0);
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
        var platform = this.props.platform;

		var apps = this.appsDay.apps;
		var totalCount = this.appsDay.totalCount;

		if(this.state.apps !== null && this.state.apps.length > 0) {
			apps = apps.concat(this.state.apps);
		}

		var appsDate = new Date(this.appsDay.date);
		var dateString = getDateString(appsDate)

		var MoreAppsComponent;
		if (apps.length < totalCount) {
			MoreAppsComponent = <MoreApps appsDay={this.appsDay} platform={platform}/>;
		} else {
			MoreAppsComponent = "";
		}
		var dayTitle = <h3><span className="">Apps for {dateString}</span></h3>;
		if(apps.length == 0) {
			dayTitle = ""
		}
		return (
			<div className="app-day">
				{dayTitle}
				{
					Object.keys(apps).map(function(app){
						return (
								<div>
									<p>{apps[app].date}</p>
									<AppRow key={apps[app].name} app={apps[app]} platform={platform} />
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
	var today = new Date(moment().format("YYYY-MM-DD"));
	var yesterday = new Date(moment().subtract(1, 'days').format("YYYY-MM-DD"))

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