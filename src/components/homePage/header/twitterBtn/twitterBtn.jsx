import React from 'react';

class Twitter extends React.Component {
    constructor(props) {
        super(props);
        this.toggleViews = this.props.toggleViews
        this.Tweets = this.props.Tweets
        this.Breweries = this.props.Breweries
      }

    handleClick(e) {
        e.preventDefault();
        console.log('twitter')
        this.toggleViews()
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