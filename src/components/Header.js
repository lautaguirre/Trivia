import React, { Component } from 'react';

import logo from '../assets/logo.png';

import './Header.scss';

class Header extends Component {
  render() {
    if (!window.location.href.includes('puntaje')) {
      return (
        <div className="headerSection">
          <div className="appBrand">
            <img src={logo} alt="Ciba" height="50" />
          </div>

          <div className="appNav">
            40 AÑOS JUNTOS
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Header;
