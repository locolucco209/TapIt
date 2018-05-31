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
      Tweets: true,
      Breweries: false
    }
    this.toggleViews.bind(this)
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
    this.setState({
      Tweets: true,
      Breweries: false
    })
  }

  toggleViews() {
    console.log(`togglin'`)
    this.finalToggle()
  }

  finalToggle() {

    switch(this.state.Tweets){
      case true:
        this.setState({Tweets: false})
        this.setState({Breweries: true})
      break;

      case false:
        this.setState({Tweets: true})
        this.setState({Breweries: false})
      break;

      default:
        this.setState({Tweets: true})
        this.setState({Breweries: false})
    }
  }

  render() {
    return(
      <div id="homepage">
        <Header 
        toggleViews={this.toggleViews}
        Tweets={this.state.Tweets}
        Breweries={this.state.Breweries}
        />

        <div>
        {this.state.Tweets && <GetTweets />}
        </div>

        <div>
        {this.state.Breweries && <AllBreweries />}
        </div>

      </div>
    );
  };
};

export default HomePage;