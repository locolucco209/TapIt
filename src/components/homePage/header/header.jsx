import React from 'react';
import hasCookieCheck from './js/hasCookieHeader'
import Nav from './nav/nav'

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
      this.setState({name: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }
   
  render() {
    return(
      <div className="header">

        <p id='welcome'>Welcome {this.state.name}</p>
        <Nav componentState = {this.props.componentState}/>
  
      </div>
    );
  };
};

export default Header;