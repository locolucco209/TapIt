import React from 'react';
import Twitter from '../twitterBtn/twitterBtn'
import Breweries from '../breweriesBtn/breweriesBtn'
import Logout from '../logout/logoutBtn'
import DeleteAccount from '../deleteAccount/deleteAccountBtn'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div class="dropdown">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#"> <Twitter componentState = {this.props.componentState}/> </a>
          <a class="dropdown-item" href="#"> <Breweries componentState = {this.props.componentState}/> </a>
          <a class="dropdown-item" href="#"> <Logout /> </a>
          <a class="dropdown-item" href="#"> <DeleteAccount /> </a>
      </div>
    </div>
    );
  };
};

export default Nav;