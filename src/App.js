import React, { Component } from 'react';

import logo from './assets/logo.png';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <div className="appBrand">
            <img src={logo} alt="Ciba" height="50" />
          </div>
          <div className="appNav">
            40 AÑOS JUNTOS
          </div>
        </div>
        <div className="mainContainer">
          <div className="cardContainer">
            <h1>¡Hola!</h1>
            <h3>Ingresá el número de mesa en la que estas.</h3>
            <div className="circleContainer">
              <div className="circle">
                <input placeholder="00" type="text" maxLength="2" className="circleInput" />
              </div>
            </div>
            <button className="cardButton" type="submit">Continuar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
