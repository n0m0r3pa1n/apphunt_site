var React = require("react"),
    {Paper} = require('material-ui');
var GooglePlayButton = require('./buttons/GooglePlayButton');
var AppleStoreButton = require('./buttons/AppleStoreButton');

var AppsStore = require('../stores/AppsStore')
var AppHuntApp = React.createClass({
    getInitialState: function() {
        return {platform: 'Android'}
    },
    componentDidMount: function() {
        AppsStore.addChangeListener(this._onChange)
    },
    componentWillUnmount: function() {
        AppsStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        var platform = AppsStore.getAppsData().platform;
        console.log(platform)
        this.setState({platform: platform})
    },


	render: function() {
        var button;
        if(this.state.platform == 'Android') {
            button = <GooglePlayButton url={"http://bit.ly/1xBGDSd"} />
        } else {
            button = <AppleStoreButton url={"http://apple.co/1HqmC38"} />
        }

        return (
            <Paper zDepth={2}>
                <div className="container apps-container">
                    <div className="row col-md-12 appRow">
                        <div className="col-md-1">
                            <img src={"./res/img/apphunt-logo.png"} className="app-icon"/>
                        </div>
                        <div className="col-md-8">
                            <h3>AppHunt</h3>
                            <p className="app-description">Find the best new apps, every day!</p>
                        </div>
                        <div className="col-md-3">
                            <h3></h3>
                            {button}
                        </div>
                    </div>
                </div>
            </Paper>
		)
	}
});

module.exports = AppHuntApp