import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, NavItem, NavLink, NavbarBrand, Nav } from 'reactstrap';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto">Ciba | Trivia</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>40 AÑOS JUNTOS</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className="d-flex justify-content-center">

        </div>
      </div>
    );
  }
}

export default App;
