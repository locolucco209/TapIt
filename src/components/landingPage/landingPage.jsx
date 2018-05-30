import React, { Component } from 'react';
import AgeGate from './AgeGate';
// import SocialLogin from './SocialLogin/SocialLogin';
import image from '../Images/TapItLogo2.png'
import './LandingPage.css';

class LandingPage extends Component {

  render() {
    return (

      <div className='container-fluid'>
        <img src={image} alt="logo" />
        <AgeGate />
        <SocialLogin />
      </div>

    );
  };
};

export default LandingPage;