import React from 'react';
import './index.css';
import GetTweets from './get_tweets.js'

class HomePage extends React.Component {
  render() {
    return(
      <div>
        <GetTweets />
      </div>
    );
  };
};

export default HomePage;