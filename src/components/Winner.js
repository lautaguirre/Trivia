import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import logo from '../assets/logo.png';
import trophy from '../assets/trophy.png';
import congrats from '../assets/congrats.png'

import './Winner.scss';

class Winner extends Component {
  render() {
    return (
      <div className="winnerSection flexContainer">
        <Row>
          <Col xs="12">
            <div className="scoreHeader" >
              <div>
                <img src={logo} alt="Ciba" height="75" />
              </div>

              <div className="appNav">
                40 AÑOS JUNTOS
              </div>
            </div>
            <div className="cardContainer">
              <img src={trophy} alt="trophy" />

              <div>
                <img src={congrats} alt="Congrats" className="congratsImage" />
                <div className="congratsTable">MESA 20</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Winner;
