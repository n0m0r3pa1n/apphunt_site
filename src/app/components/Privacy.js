var React = require("react");

var Terms = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function() {
        document.title = "AppHunt Privacy Policy";
    },
    render: function () {

        return (
                <iframe src="privacy.html" style={{width: "100%", height: "100%", borderStyle: "none"}}></iframe>
        )
    },
    _onChange: function () {

    }
});

module.exports = Terms