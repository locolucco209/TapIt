import React from 'react';

class Brewery extends React.Component {
    constructor(props) {
        super(props);
        this.toggleViews = this.props.toggleViews
        this.Tweets = this.props.Tweets
        this.Breweries = this.props.Breweries
        
      }

    handleClick(e) {
        e.preventDefault();
        console.log('brewery')
        this.props.toggleViews()
    }
  
    render() {

      return (
        <button className="navButton" onClick={(e) => this.handleClick(e)}>
          Breweries
        </button>
      );
    }
  }

  export default Brewery;