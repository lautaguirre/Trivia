import React, { Component } from 'react';
import { Progress } from 'reactstrap';

import { addPoint } from '../api/api';

import './Questions.scss';

class Question extends Component {
  constructor(props){
    super(props);

    this.state = {
      selected: null,
    };

    this.intervalo = null;

    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(index) {
    this.setState({ selected: index });
  }

  componentDidUpdate() {
    const { selected } = this.state;
    const { timer, question, mesa, questionNumber } = this.props;

    if (timer === 0) {
      if (selected === question.correcta) {
        addPoint(mesa, questionNumber);
      }
    }

    if (timer === 20 && selected != null) {
      this.setState({ selected: null });
    }
  }

  render() {
    const { selected } = this.state;
    const { mesa, points, question, questionNumber, totalQuestions, timer } = this.props;

    const preguntas = question.respuestas.map((respuesta, index) => {
      const style = () => {
        if (timer > 0) {
          return (selected === index) ? 'selectedAnswer' : '';
        } else {
          if (selected === index) {
            return (selected !== question.correcta) ? 'wrongAnswer' : 'rightAnswer';
          } else {
            return (index === question.correcta) ? 'rightAnswer' : '';
          }
        }
      };

      return (
        <button
          key={respuesta}
          className={`whiteBtn ${style()}`}
          onClick={() => {
            if (timer > 0) this.setSelected(index);
          }}
        >
          {respuesta}
        </button>
      );
    });

    return (
      <div className="questionSection flexContainer">
        <div className="cardContainer">
          <div className="questionNumber" >{`${questionNumber} de ${totalQuestions}`}</div>
          <h1
            className={timer <= 0 ? 'text-danger' : ''}
          >
            {timer <= 0 ? '00' : timer}
          </h1>

          <Progress
            className="w-100"
            value={timer <= 0 ? 100 : (timer * 100) / 20}
            color={timer <= 0 ? 'danger' : 'success'}
          />

          <h5>
            {question.pregunta}
          </h5>

          {preguntas}

          <div className="footer">
            <div>Mesa {mesa}</div>
            <div className="footerPoints">Puntos: {points}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
