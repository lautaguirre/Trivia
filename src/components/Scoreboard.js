import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Progress, Table } from 'reactstrap';

import logo from '../assets/logo.png';

import data from '../assets/questions.json';

import './Scoreboard.scss';

const positions = [
  {
    mesa: 36,
    pts: 40
  },
  {
    mesa: 7,
    pts: 30
  },
  {
    mesa: 40,
    pts: 20
  },
  {
    mesa: 4,
    pts: 10
  },{
    mesa: 35,
    pts: 0
  },
  {
    mesa: 37,
    pts: 40
  },
  {
    mesa: 70,
    pts: 30
  },
  {
    mesa: 46,
    pts: 20
  }
];

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      question: 35,
      timer: 15,
    };
  }

  render() {
    const { question, timer } = this.state;

    const preguntas = data[question].respuestas.map((respuesta, index) => {
      const style = () => {
        if (timer === '00') {
          return (index === data[question].correcta) && 'rightAnswer';
        }
      };

      return (
        <button
          key={respuesta}
          className={`whiteBtn ${style()}`}
        >
          {respuesta}
        </button>
      );
    });

    const posiciones = positions.map((item, index) => {
      return (
        <tr key={item.mesa} className={index === 0 ? 'yellowColor' : ''}>
          <th scope="row">{index + 1}</th>
          <td>Mesa {item.mesa}</td>
          <td>{item.pts}</td>
        </tr>
      );
    });

    return (
      <div className="scoreboardSection flexContainer">
        <Row>
          <Col xs="6">
            <div className="scoreHeader" >
              <div>
                <img src={logo} alt="Ciba" height="75" />
              </div>

              <div className="appNav">
                40 AÑOS JUNTOS
              </div>
            </div>
            <div className="cardContainer">
              <h5>
                {data[question].pregunta}
              </h5>

              {preguntas}
            </div>
          </Col>
          <Col xs="6" >
            <div className="scoreHeader" >
              <Progress
                className="w-100"
                value={timer === '00' ? 100 : (timer * 100) / 30}
                color={timer === '00' ? 'danger' : 'success'}
              />

              <h1
                className={timer === '00' ? 'text-danger' : ''}
              >
                {timer}
              </h1>
            </div>
            <div className="cardContainer">
              <h1 className="positions">POSICIONES</h1>

              <Table borderless responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Equipo</th>
                    <th>Puntos</th>
                  </tr>
                </thead>
                <tbody>
                  {posiciones}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Scoreboard;
