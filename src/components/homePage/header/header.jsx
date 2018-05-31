import React from 'react';
import hasCookieCheck from './js/hasCookieHeader'
import Nav from './nav/nav'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      name: ''
    }
    this.toggleViews = this.props.toggleViews
    this.Tweets = this.props.Tweets
    this.Breweries = this.props.Breweries
  }

  componentDidMount() {
    hasCookieCheck(document.cookie)
    .then((response) => {
      this.setState({name: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }
   
  render() {
    return(
      <div className="header">

        <p id='welcome'>Welcome {this.state.name}</p>
        <Nav 
        toggleViews={this.toggleViews}
        Tweets={this.props.Tweets}
        Breweries={this.props.Breweries}
        />
    
      </div>
    );
  };
};

export default Header;