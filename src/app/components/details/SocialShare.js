/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var ReactSocial = require("react-social")
var FacebookButton = ReactSocial.FacebookButton,
    TwitterButton = ReactSocial.TwitterButton,
    PinterestButton = ReactSocial.PinterestButton;

var SocialShare = React.createClass({

    render: function() {
        var iconStyle = {
            color: "#23a2eb",
            fontSize: 35,
            marginLeft:10
        }

        var aboutUsStyle = {
            paddingRight: 0,
            paddingLeft: 0,
            paddingTop:0,
            color: "inherit",
            backgroundColor: '#FFF'
        }

        var url = this.props.url;
        var imageUrl = this.props.imageUrl;
        return (
            <div className='col-md-5' style={{marginTop: 10}}>
               <span style={{fontSize: 23}}>Share with:</span>
                <FacebookButton className="btn" style={aboutUsStyle} url={url}>
                    <span className="sfmsb-icon-facebook sfmsb-circle" style={iconStyle}></span>
                </FacebookButton>
                <TwitterButton className="btn" style={aboutUsStyle}  url={url}>
                    <span className="sfmsb-icon-twitter sfmsb-circle" style={iconStyle}></span>
                </TwitterButton>
                <PinterestButton className="btn" style={aboutUsStyle} url={url} media={imageUrl}>
                    <span className="sfmsb-icon-pinterest sfmsb-circle" style={iconStyle}></span>
                </PinterestButton>
            </div>
        )
    }
});

module.exports = SocialShare;