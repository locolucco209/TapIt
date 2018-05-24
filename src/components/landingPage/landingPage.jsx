import React, { Component } from 'react';
import AgeGate from './AgeGate';
// import SocialLogin from './SocialLogin/SocialLogin';
import './LandingPage.css';

class LandingPage extends Component {

  render() {
    return (

      <div className='container-fluid'>
     
          <AgeGate />
          {/* <SocialLogin /> */}
      </div>

    );
  };
};

export default LandingPage;