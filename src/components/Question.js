import React, { Component } from 'react';
import { Progress } from 'reactstrap';

import './Questions.scss';

import data from '../assets/questions.json';

class Question extends Component {
  constructor(props){
    super(props);

    this.state = {
      timer: 30,
      selected: null,
    };

    this.intervalo = null;

    this.setSelected = this.setSelected.bind(this);
    this.initTimer = this.initTimer.bind(this);
    this.checkResponse = this.checkResponse.bind(this);
  }

  setSelected(index) {
    this.setState({ selected: index });
  }

  componentDidMount() {
    this.initTimer(false);
  }

  componentWillUnmount() {
    this.initTimer(true);
  }

  checkResponse() {
    const { nextQuestion, question } = this.props;
    const { selected } = this.state;

    if (selected === data[question].correcta) {
      nextQuestion(true);
    } else {
      nextQuestion(false);
    }
  }

  initTimer(cancel) {
    const { question } = this.props;

    if (!cancel) {
      this.intervalo = setInterval(() => {
        this.setState((prevState) => ({ timer: prevState.timer - 1 }));

        if (this.state.timer === 0) {
          clearInterval(this.intervalo);

          this.setState(({ timer: '00' }));

          setTimeout(() => {
            this.checkResponse();

            if (question !== 37) {
              this.setState(({ timer: 30, selected: null, correct: null }));

              this.initTimer(false);
            }
          }, 2000);
        }
      }, 1000);
    } else {
      clearInterval(this.intervalo);
    }
  }

  render() {
    const { timer, selected } = this.state;
    const { mesa, points, question } = this.props;

    const preguntas = data[question].respuestas.map((respuesta, index) => {
      const style = () => {
        if (timer !== '00') {
          return (selected === index) && 'selectedAnswer';
        } else {
          if (selected === index) {
            return (selected !== data[question].correcta) ? 'wrongAnswer' : 'rightAnswer';
          } else {
            return (index === data[question].correcta) && 'rightAnswer';
          }
        }
      };

      return (
        <button
          key={respuesta}
          className={`whiteBtn ${style()}`}
          onClick={() => {
            if (timer !== '00') this.setSelected(index);
          }}
        >
          {respuesta}
        </button>
      );
    });

    return (
      <div className="questionSection flexContainer">
        <div className="cardContainer">
          <div className="questionNumber" >{`${question + 1} de ${data.length}`}</div>
          <h1
            className={timer === '00' ? 'text-danger' : ''}
          >
            {timer}
          </h1>

          <Progress
            className="w-100"
            value={timer === '00' ? 100 : (timer * 100) / 30}
            color={timer === '00' ? 'danger' : 'success'}
          />

          <h5>
            {data[question].pregunta}
          </h5>

          {preguntas}

          <div className="footer">
            <div>Mesa {mesa}</div>
            <div className="footerPoints">Pts: {points}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
