import React, { Component } from 'react';

import Winner from '../../components/Winner';
import Scoreboard from '../../components/Scoreboard';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
    };
  }

  render() {
    const { winner } = this.state;

    if (winner) {
      return <Winner />;
    } else {
      return <Scoreboard />;
    }
  }
}

export default Dashboard;
