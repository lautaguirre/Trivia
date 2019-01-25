import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import logo from '../assets/logo.png';
import trophy from '../assets/trophy.png';
import congrats from '../assets/congrats.png'

import './Winner.scss';

class Winner extends Component {
  render() {
    const { mesas } = this.props;

    let positions = [];
    for (const mesa in mesas) {
      positions.push([mesa, mesas[mesa]]);
    }

    positions.sort((a, b) => {
      return b[1].puntos - a[1].puntos;
    });

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
                <div className="congratsTable">MESA {positions[0][0]}</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Winner;
