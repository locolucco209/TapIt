import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import addGoogleUser from './addUsers/addGoogleUser'
import addFbUser from './addUsers/addFbUser'

const request = require('request');

class SocialLogin extends Component {
    
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

    redirectToTarget = () => {
        this.context.router.history.push(`/homepage`)
      }

    signup(res, type) {

    }

    render() {
        const responseFacebook = (response) => {
            console.log(response);
            this.signup(response, 'facebook')
            addFbUser(response)
        }
        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'google')
            addGoogleUser(response)
            //this.redirectToTarget()
        }
        
        return (
            <div className="row" id="Body">
                <div className="medium-12 columns">
                    <h1 id="WelcomeText">Please Login Wih Your Social Login</h1>

                    <FacebookLogin
                        appId={process.env.REACT_APP_Facbook_App_Id}
                        autoLoad={false}
                        fields="first_name,last_name,email"
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