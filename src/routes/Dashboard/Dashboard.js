import React, { Component } from 'react';
import { subscribeToEstado, subscribeToStatus } from '../../api/api';

import Winner from '../../components/Winner';
import Scoreboard from '../../components/Scoreboard';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      ready: false,
      question: null,
      tables: null
    };

    subscribeToEstado((msg) => {
      //console.log(msg);

      if (msg === 'EN JUEGO') {
        this.setState({ ready: true });
      }
    });

    subscribeToStatus((stat) => {
      //console.log(stat);

      this.setState({
        question: stat.pregunta,
        tables: stat.mesas
      });
    });
  }

  render() {
    const { finished, ready, question, tables } = this.state;

    if (finished) {
      return <Winner tables={tables} />;
    }

    return <Scoreboard
      ready={ready}
      question={question}
      tables={tables}
    />;
  }
}

export default Dashboard;
