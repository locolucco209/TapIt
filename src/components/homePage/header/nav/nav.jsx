import React from 'react';
import Twitter from '../twitterBtn/twitterBtn'
import Breweries from '../breweriesBtn/breweriesBtn'
import Logout from '../logout/logoutBtn'
import DeleteAccount from '../deleteAccount/deleteAccountBtn'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleViews = this.props.toggleViews
    this.Tweets = this.props.Tweets
    this.Breweries = this.props.Breweries
  }
  
  render() {
    return(
      <div class="dropdown">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#"> <Twitter toggleViews={this.toggleViews} Tweets={this.props.Tweets} Breweries={this.props.Breweries}/> </a>
          <a class="dropdown-item" href="#"> <Breweries toggleViews={this.toggleViews} Tweets={this.props.Tweets} Breweries={this.props.Breweries}/> </a>
          <a class="dropdown-item" href="#"> <Logout /> </a>
          <a class="dropdown-item" href="#"> <DeleteAccount /> </a>
      </div>
    </div>
    );
  };
};

export default Nav;