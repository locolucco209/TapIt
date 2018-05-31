import React from 'react';
import hasCookieCheck from './hasCookieDelete'

class DeleteAccount extends React.Component {
    handleClick() {
        hasCookieCheck(document.cookie)
    }
  
    render() {

      return (
        <button className="navButton" onClick={(e) => this.handleClick(e)}>
          Delete Account
        </button>
      );
    }
  }

  export default DeleteAccount;