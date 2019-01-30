import React, { Component } from 'react';

import { removeAllListeners, subscribeToStatus } from '../../api/api';

import Winner from '../../components/Winner';
import Scoreboard from '../../components/Scoreboard';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: 0,
      question: {},
      mesas: [],
      timer: 20,
    };
  }

  componentWillUnmount() {
    removeAllListeners('status');
  }

  componentDidMount() {
    subscribeToStatus((status) => {
      this.setState({
        ready: status.estado,
        question: status.pregunta,
        mesas: status.mesas,
        timer: status.tiempo
      });
    });
  }

  render() {
    const { ready, question, mesas, timer } = this.state;

    if (ready === 2) {
      return <Winner mesas={mesas} />;
    }

    return (
      <Scoreboard
        ready={ready}
        question={question}
        mesas={mesas}
        timer={timer}
      />
    );
  }
}

export default Dashboard;
