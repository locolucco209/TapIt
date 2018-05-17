import React from 'react';
import './index.css';

import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

class social_login extends React.Component {
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
        // const responseFacebook = (response) => {
        //     console.log(response);
        //     this.signup(response, 'facebook')
        // }
        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'google')
        }
        return (
            <div className="row" id="Body">
                <div className="medium-12 columns">
                    <h1 id="WelcomeText">Please Login Wih Your Social Login</h1>
                    <GoogleLogin
                        clientId="304197832114-31j6ba4ne6rq9evrlb2lfcejdb0n7b9j.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                    {/* <FacebookLogin
                        appId="1088597931155576"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook} /> */}


                    <a href="/signup" className="button success">Signup</a>
                </div>
            </div>
        );
    }
};

export default social_login;