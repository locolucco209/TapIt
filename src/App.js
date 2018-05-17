import React, { Component } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import HashRouter from 'react-router-dom'
import {Landing_page, Add_user, Claim_brewery,social_login,age_gate} from './components/index.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing_page}/>
          <Route exact path="/add_user" component={Add_user}/>
          <Route exact path="/claim_brewery" component={Claim_brewery}/>
          <Route exact path="/social_login" component={social_login}/>
          <Route exact path="/age_gate" component={age_gate}/>
        </div>
      </Router>
    );
  }
}

export default App;
