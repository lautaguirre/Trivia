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
      estado: 0,
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

      const mesaObj = status.mesas.find((item) => item.numero === this.state.mesa);

      if (mesa) {
        this.setState({
          estado: status.estado,
          question: status.pregunta,
          points: mesaObj ? mesaObj.preguntasCorrectas.length : null,
          questionNumber: status.preguntaNumeroActual,
          totalQuestions: status.cantidadPreguntas,
          timer: status.tiempo,
        });
      }
    });

    if (!isNaN(mesa) && Number.isInteger(Number(mesa)) && mesa <= 50 && mesa > 0) {
      this.setState({ mesa }, () => {
        addMesa({ mesa, token: 'token' });
      });
    } else {
      this.props.history.push('/');
    }
  }

  setTable(table, e) {
    if (e) e.preventDefault();

    if (!isNaN(table) && Number.isInteger(Number(table)) && table <= 50 && table > 0) {
      this.props.history.push(`/mesa/${table}`);
    }
  }

  render() {
    const {
      timer,
      mesa,
      estado,
      question,
      points,
      questionNumber,
      totalQuestions,
    } = this.state;

    if (mesa && (estado === 2)) {
      return (
        <Result
          mesa={mesa}
          points={points}
        />
      );
    }

    if (mesa && (estado === 1)) {
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

    if (mesa && (estado === 0)) {
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
