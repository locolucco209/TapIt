import React from 'react';
import hasCookieCheck from './js/hasCookie'
import Nav from './nav'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      name: ''
    }
  }

  componentDidMount() {
    hasCookieCheck(document.cookie)
    .then((response) => {
      this.setState({name: response})
    })
  }
   
  render() {
    return(
      <div className="header">

        <p id='welcome'>Welcome {this.state.name}</p>
        <Nav />
    
      </div>
    );
  };
};

export default Header;