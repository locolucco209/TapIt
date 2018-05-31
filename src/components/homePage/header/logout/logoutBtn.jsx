import React from 'react';
import hasCookieCheck from './hasCookieLogout'

class Logout extends React.Component {
    handleClick() {
        hasCookieCheck(document.cookie)
    }
  
    render() {

      return (
        <button className="navButton" onClick={(e) => this.handleClick(e)}>
          Logout
        </button>
      );
    }
  }

  export default Logout;