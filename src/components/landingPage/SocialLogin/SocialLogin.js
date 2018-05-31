import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import addGoogleUser from './addUsers/addGoogleUser';
import addFbUser from './addUsers/addFbUser';
import './SocialLogin.css';


const request = require('request');

class SocialLogin extends Component {

    // fcStyle={width: "250px", height: "50px", color: "white", backgroundColor: "red" }

    constructor(props) {
        super(props);
        this.stats = {
            redirect: false
        }
        this.signup = this.signup.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    }

    refresh = () => {
        window.location.reload()
    }

    signup(res, type) {
        
    }

    render() {
        const responseFacebook = (response) => {
            this.signup(response, 'facebook')
            addFbUser(response)
            this.refresh()
        }
        const responseGoogle = (response) => {
            this.signup(response, 'google')
            addGoogleUser(response)
            this.refresh()
        }

        return (

            <div className="row" id="Body">

                <div className="medium-12 columns">
                    <h1 id="WelcomeText">Login With FaceBook or Google</h1>

                    <div>
                        <FacebookLogin
                        appId={process.env.REACT_APP_Facbook_App_Id}
                        autoLoad={false}
                        fields="first_name,last_name,email"
                        callback={responseFacebook}
                        />

                        <GoogleLogin className="googleClass"
                            clientId={process.env.REACT_APP_Google_Client_Id}
                            buttonText="LOGIN WITH GOOGLE"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                        />

                    </div>

                </div>
            </div >
        );
    }
};

export default SocialLogin;

