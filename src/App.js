import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Index from './routes/Index/Index';
import Dashboard from './routes/Dashboard/Dashboard';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route path="/" exact component={Index} />
          <Route path="/mesa/:mesa" exact component={Index} />
          <Route path="/puntaje" exact component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
