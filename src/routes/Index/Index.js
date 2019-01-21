import React, { Component } from 'react';

import Init from '../../components/Init';
import Waiting from '../../components/Waiting';
import Question from '../../components/Question';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mesa: null,
      allPlayers: false,
      question: 0
    };

    this.setTable = this.setTable.bind(this);
    this.setAllPlayers = this.setAllPlayers.bind(this);
  }

  setTable(e, table) {
    e.preventDefault();

    this.setState({ mesa: table });
  }

  setAllPlayers() {
    this.setState({ allPlayers: true });
  }

  render() {
    const { mesa, allPlayers, question } = this.state;

      return (
        <Question
          mesa={mesa}
          question={question}
        />
      );


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
