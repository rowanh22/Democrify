import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { trackPromise } from "react-promise-tracker";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        //this.callLogin = this.callLogin.bind(this);
    }

    //Called on click of login button
    async callLogin() {
        //Get auth URL from backend (this should probably all be moved to redux but hey)
        var URLres = await axios.get("/api/getLoginURL");

        //Open login popup
        window.location = URLres.data;

        //Create callback function to be called when user clicks login
        // window.spotifyCallback = async (payload) => { 
        //     //Close popup and tell server to log in
        //     popup.close();
        //     await axios({
        //         method: "post",
        //         url: "/api/login",
        //         timeout: 8000,
        //         data: {
        //             code: payload
        //         }
        //     });
        //     //const response = await trackPromise(axios.get("/api/me"));
        //     login();
        //     this.props.handleLogin();
        // }
    }

    componentDidMount() {
        //Retrieve auth code from URL
        // const urlParams = new URLSearchParams(window.location.search);
        // const code = urlParams.get('code');
        // //If code exists i.e if this component is within the popup, call the previous callback function to close popup
        // if (code) {
        //     window.opener.spotifyCallback(code);
        // }
    }

    render() {
        return(
            <div>
                {[
                    <button key={0} className="btn btn--loginApp-link" onClick={this.callLogin}>
                        Login to Spotify
                    </button>,  
                ]}
            </div>
        );
    }
}

export default LoginPage