import React, { Component } from 'react';

import Init from '../../components/Init';
import Waiting from '../../components/Waiting';
import Question from '../../components/Question';
import Result from '../../components/Result';

import { subscribeToStatus, addMesa, removeAllListeners } from '../../api/api';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mesa: null,
      ready: 0,
      question: {},
      points: 0,
      questionNumber: 0,
      totalQuestions: 0,
      timer: 10,
    };

    this.setTable = this.setTable.bind(this);
  }

  componentWillUnmount() {
    removeAllListeners('status');
  }

  componentDidMount() {
    const { mesa } = this.props.match.params;

    subscribeToStatus((status) => {
      console.log(status);
      this.setState({
        ready: status.estado,
        question: status.pregunta,
        points: status.mesas[this.state.mesa].puntos,
        questionNumber: status.preguntaActual,
        totalQuestions: status.totalPreguntas,
        timer: status.tiempo
      });
    });

    if (!isNaN(mesa) && Number.isInteger(Number(mesa)) && mesa <= 50 && mesa > 0) {
      this.setState({ mesa }, () => {
        addMesa(mesa);
      });
    } else {
      this.props.history.push('/');
    }
  }

  setTable(e, table) {
    e.preventDefault();

    if (!isNaN(table) && Number.isInteger(Number(table)) && table <= 50 && table > 0) {
      this.props.history.push(`/mesa/${table}`);
    }
  }

  render() {
    const { timer, mesa, ready, question, points, questionNumber, totalQuestions } = this.state;

    if (ready === 2) {
      return (
        <Result
          mesa={mesa}
          points={points}
        />
      );
    }

    if (mesa && (ready === 1)) {
      return (
        <Question
          mesa={mesa}
          question={question}
          points={points}
          nextQuestion={this.nextQuestion}
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
          timer={timer}
        />
      );
    }

    if (mesa) {
      return (
        <Waiting
          mesa={mesa}
        />
      );
    }

    return (
      <Init
        setTable={this.setTable}
      />
    );
  }
}

export default Index;
