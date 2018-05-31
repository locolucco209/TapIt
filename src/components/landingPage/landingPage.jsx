import React, { Component } from 'react';
import AgeGate from './AgeGate';
// import SocialLogin from './SocialLogin/SocialLogin';
import image from '../Images/TapItLogo2.png'
import './LandingPage.css';
import hasCookieCheck from './js/hasCookieLandingPage'

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    hasCookieCheck(document.cookie)
    .then((response) => {
      if (response === true) {
          this.props.history.push('/homepage')
        } 
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {

    return (
      <div className='container-fluid'>

        <div className="col-12 col-sm-12 col-md-6">
          <img src={image} alt="logo" />
        </div>
        <AgeGate update={this.props.update}/>
        {/* <SocialLogin /> */}
      </div>

    );
  };
};

export default LandingPage;