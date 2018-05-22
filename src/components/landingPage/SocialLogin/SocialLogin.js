import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import addGoogleUser from './add_google_user'

const request = require('request');

class SocialLogin extends Component {
    
    constructor(props) {
        super(props);
        this.stats = {
            redirect: false
        }
        this.signup = this.signup.bind(this);
    }

    signup(res, type) {

    }

    render() {

        console.log(process.env.REACT_APP_Google_Client_Id)

        const responseFacebook = (response) => {
            console.log(response);
            this.signup(response, 'facebook')
        }
        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'google')
            addGoogleUser(response)
        }
        return (
            <div className="row" id="Body">
                <div className="medium-12 columns">
                    <h1 id="WelcomeText">Please Login Wih Your Social Login</h1>

                    <FacebookLogin
                        appId="193877681244422"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        cssClass="my-facebook-button-class"
                    />

                    <GoogleLogin
                        clientId={process.env.REACT_APP_Google_Client_Id}
                        buttonText="Google Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />


                    <a href="/signup" className="button success">Signup</a>
                </div>
            </div>
        );
    }
};

export default SocialLogin;