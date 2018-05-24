import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HashRouter from 'react-router-dom';
import { LandingPage, HomePage } from './components/index.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/homepage" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
