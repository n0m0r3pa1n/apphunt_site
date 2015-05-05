'use strict';
var React = require("react"),
    RaisedButton = require('material-ui').RaisedButton;
var MailsStore = require('../../stores/MailsStore')
var MailsAPI = require('../../api/MailsAPI')

var Unsubscribe = React.createClass({
    componentDidMount: function() {
        MailsStore.addChangeListener(this._onChange)
    },
    getInitialState: function() {
        return {
            isUnsubscribed: false
        }
    },
    componentWillUnmount: function() {
        MailsStore.removeChangeListener(this._onChange)
    },
    _onChange: function() {
        this.setState({
            isUnsubscribed: true
        })
    },
    _unsubscribe: function() {
        MailsAPI.unsubscribe(this.refs.email.getDOMNode().value)
    },
    render: function() {
        var url = this.props.url;
        var message = this.state.isUnsubscribed === true ? <div className="btn btn-success">You are successfully unsubscribed!</div> : ""
        return (
            <Paper zDepth={2}>
                <div className="container" style={{marginTop: 20}}>
                    <h5>Enter your email if you want to unsubscribe</h5>
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input ref="email" type="email" className="form-control" placeholder="Enter your email" />
                        </div>
                        <button type="submit" className="btn btn-default" style={{marginLeft: 20}} onClick={this._unsubscribe}>Submit</button>
                    </form>
                    {message}
                </div>
            </Paper>
        )
    }
});

module.exports = Unsubscribe