import React from 'react';
import  { Redirect } from 'react-router-dom'
import './index.css';
import GetTweets from './twitter/get_tweets'
import Header from './header/header'
import AllBreweries from './breweries/allBreweries'
import hasCookieCheck from './js/hasCookieHomePage'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 'getTweets'
    }
    this.componentState = this.componentState.bind(this)
    this.displayComponent = this.displayComponent.bind(this)
  }

  componentDidMount() {
    hasCookieCheck(document.cookie)
    .then((response) => {
      if (response === false) {
          this.props.history.push('/')
        } 
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentState(state) {
    this.setState({
      component: state
    })
  }

  displayComponent() {
    let component
    switch(this.state.component) {
      case 'getTweets':
        component = <GetTweets />
        break;
      case 'allBreweries':
        component = <AllBreweries />
        break;
      default:
        component = 'getTweets'
    }
    return component
  }
  

  render() {
    return(
      <div id="homepage">
          <Header componentState = {this.componentState} />
          <this.displayComponent />
      </div>
    );
  };
};

export default HomePage;