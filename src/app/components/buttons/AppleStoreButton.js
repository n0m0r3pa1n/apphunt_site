var React = require("react"),
		RaisedButton = require('material-ui').RaisedButton;

var AppleStoreButton = React.createClass({
	getInitialState: function() {
		return {};
	},
	render: function() {
		var url = this.props.url;
		return (
				<RaisedButton label="Apple Store" linkButton={true} href={url} secondary={true}>
				</RaisedButton>
		)
	},
	_onChange: function() {

	}
});

module.exports = AppleStoreButton