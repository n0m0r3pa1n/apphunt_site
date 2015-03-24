var React = require("react");

var Voters = React.createClass({
	render: function() {
		var votersPadding = {
			paddingLeft: 10
		}
		var votes = this.props.votes;
		return (
			<div className="col-md-12">
				<h4 className="clear-margin-top">{votes.length} voters: </h4>
				<div style={votersPadding} className="row">
					{
						votes.map(function (vote, index) {
							return (
								<img className="img-circle voter-avatar" src={vote.user.profilePicture} />
							);
						})
						}
				</div>

			</div>
		)
	},
	_onChange: function() {

	}
});

module.exports = Voters