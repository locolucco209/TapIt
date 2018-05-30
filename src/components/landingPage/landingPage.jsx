import React, { Component } from 'react';
import AgeGate from './AgeGate';
// import SocialLogin from './SocialLogin/SocialLogin';
import image from '../Images/TapItLogo2.png'
import './LandingPage.css';

class LandingPage extends Component {

  render() {

    return (
      <div className='container-fluid'>

        <div className="col-12 col-sm-12 col-md-6">
          <img src={image} alt="logo" />
        </div>
        <AgeGate />
        {/* <SocialLogin /> */}
      </div>

    );
  };
};

export default LandingPage;