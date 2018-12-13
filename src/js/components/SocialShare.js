import React, { Component } from 'react';

import '../../css/custom.css'



class SocialShare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shareOpen: "closeShare",
            toggleButtonText: "Share this"
        };

        this.shareOpenToggle = this.shareOpenToggle.bind(this);

    }

    shareOpenToggle() {
        if (this.state.shareOpen==="closeShare") {
            this.setState({
                shareOpen: "openShare",
                toggleButtonText: "Hide sharing options"
            });
        }else {
            this.setState({
                shareOpen: "closeShare",
                toggleButtonText: "Share this"
            });
        }
    }


    render() {



        const url = window.location.href;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        const twitterUrl = `https://twitter.com/home?status=${url}`;
        const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;

        return (
            <div className="socialShareContainer" >

                <div className={this.state.shareOpen}>
                    <a href={facebookUrl} > <i className="SocialLinks">Facebook</i></a>
                    <a href={linkedinUrl} ><i className="SocialLinks">LinkedIn</i></a>
                    <a href={twitterUrl} > <i className="SocialLinks">Twitter</i></a>
                </div>
            </div>
        );
    }
}

export default SocialShare;