import React from 'react';
import  { Redirect } from 'react-router-dom'
import './index.css';
import GetTweets from './js/get_tweets'
import Header from './header/header'
import hasCookieCheck from './js/hasCookie'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    hasCookieCheck(document.cookie)
    .then((response) => {
      if (response === false) {
          this.props.history.push('/')
        } 
    })
  }

  render() {
    return(
      <div id="homepage">
        <Header />
        <GetTweets />
      </div>
    );
  };
};

export default HomePage;