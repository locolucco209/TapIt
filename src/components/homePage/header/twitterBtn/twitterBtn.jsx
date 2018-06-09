import React from 'react';

class Twitter extends React.Component {
    constructor(props) {
        super(props);
      }

    handleClick(e) {
      e.preventDefault()
        console.log('twitter')
        this.props.componentState('getTweets')
    }
  
    render() {

      return (
        <button className="navButton" onClick={(e) => this.handleClick(e)}>
          Twitter
        </button>
      );
    }
  }

  export default Twitter;