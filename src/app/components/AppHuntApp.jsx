var React = require("react"),
    {Paper} = require('material-ui');
var GooglePlayButton = require('./buttons/GooglePlayButton');

var AppHuntApp = React.createClass({

	render: function() {
        var button = <GooglePlayButton url={"http://bit.ly/1xBGDSd"} />


        return (
            <Paper zDepth={2}>
                <div className="container apps-container">
                    <div className="row col-md-12 appRow">
                        <div className="col-md-1">
                            <img src={"./res/img/apphunt-logo.png"} className="app-icon"/>
                        </div>
                        <div className="col-md-7">
                            <h3>AppHunt</h3>
                            <p className="app-description">Find the best new apps, every day!</p>
                        </div>
                        <div className="col-md-4">
                            <h3></h3>
                            <p>
                            {button}
                            </p>
                        </div>
                    </div>
                </div>
            </Paper>
		)
	}
});

module.exports = AppHuntApp