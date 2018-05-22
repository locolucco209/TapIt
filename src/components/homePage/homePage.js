import React from 'react';
import './index.css';
import GetTweets from './get_tweets.js'

class HomePage extends React.Component {
  render() {
    return(
      <div>
        <h1>Add User</h1>
        <GetTweets />
      </div>
    );
  };
};

export default HomePage;