import React from 'react';

class Brewery extends React.Component {
    constructor(props) {
        super(props);
      }

    handleClick(e) {
      e.preventDefault()
        console.log('brewery')
        this.props.componentState('allBreweries')
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