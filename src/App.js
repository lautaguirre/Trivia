import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Index from './routes/Index/Index';

import logo from './assets/logo.png';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="appHeader">
            <div className="appBrand">
              <img src={logo} alt="Ciba" height="50" />
            </div>

            <div className="appNav">
              40 AÑOS JUNTOS
            </div>
          </div>

          <Route path="/" exact component={Index} />
        </div>
      </Router>
    );
  }
}

export default App;
