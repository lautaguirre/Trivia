import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Progress, Table } from 'reactstrap';

import logo from '../assets/logo.png';

import './Scoreboard.scss';

class Scoreboard extends Component {
  render() {
    const { question, mesas, timer, ready } = this.props;

    const preguntas = (ready > 0) && question.respuestas.map((respuesta, index) => {
      const style = () => {
        if (timer <= 0) {
          return (index === question.correcta) ? 'rightAnswer' : '';
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

    let positions = [ ...mesas ];

    positions.sort((a, b) => {
      return b.preguntasCorrectas.length - a.preguntasCorrectas.length;
    });

    const posiciones = positions.map((item, index) => {
      return (
        <tr key={item.numero} className={index === 0 ? 'yellowColor' : ''}>
          <th scope="row">{index + 1}</th>
          <td>Mesa {item.numero}</td>
          <td>{item.preguntasCorrectas.length}</td>
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
                {question.pregunta}
              </h5>

              {preguntas}
            </div>
          </Col>
          <Col xs="6" >
            <div className="scoreHeader" >
              <Progress
                className="w-100"
                value={timer <= 0 ? 100 : (timer * 100) / 20}
                color={timer <= 0 ? 'danger' : 'success'}
              />

              <h1
                className={timer <= 0 ? 'text-danger' : ''}
              >
                {timer <= 0 ? '00' : timer}
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
