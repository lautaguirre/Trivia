import React, { Component } from 'react';

import Init from '../../components/Init';
import Waiting from '../../components/Waiting';
import Question from '../../components/Question';
import Result from '../../components/Result';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mesa: null,
      allPlayers: false,
      question: 0,
      points: 0,
    };

    this.setTable = this.setTable.bind(this);
    this.setAllPlayers = this.setAllPlayers.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    const { mesa } = this.props.match.params;

    if (!isNaN(mesa) && Number.isInteger(Number(mesa)) && mesa <= 50 && mesa > 0) {
      this.setState({ mesa });
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

  nextQuestion(addPoint) {
    if (addPoint) {
      this.setState((prevState) => ({
        points: prevState.points + 1,
        question: prevState.question + 1
      }));
    } else {
      this.setState((prevState) => ({
        question: prevState.question + 1
      }));
    }
  }

  setAllPlayers() {
    this.setState({ allPlayers: true });
  }

  render() {
    const { mesa, allPlayers, question, points } = this.state;

    if (question === 38) {
      return (
        <Result
          mesa={mesa}
          points={points}
        />
      );
    }

    if (mesa && allPlayers) {
      return (
        <Question
          mesa={mesa}
          question={question}
          points={points}
          nextQuestion={this.nextQuestion}
        />
      );
    }

    if (mesa) {
      return (
        <Waiting
          mesa={mesa}
          setAllPlayers={this.setAllPlayers}
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
