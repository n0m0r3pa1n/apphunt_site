var React = require("react"),
		RaisedButton = require('material-ui').RaisedButton;

var GooglePlayButton = React.createClass({
	getInitialState: function() {
		return {};
	},
	render: function() {
		var url = this.props.url;
		return (
		<RaisedButton label="Google Play" linkButton={true} href={url} secondary={true} target={"_blank"}>
		</RaisedButton>
		)
	},
	_onChange: function() {

	}
});

module.exports = GooglePlayButton