import React, { Component } from 'react';
import { Progress } from 'reactstrap';

import './Questions.scss';

class Question extends Component {
  constructor(props){
    super(props);

    this.state = {
      timer: 30
    };
  }

  componentDidMount() {
    const intervalo = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer - 1 }));

      if (this.state.timer === 0) {
        clearInterval(intervalo);
        this.setState(({ timer: '00' }));
      }
    }, 1000);
  }

  componentDidUpdate() {
    console.log(this.state.timer);
  }

  render() {
    const { timer } = this.state;
    const { mesa } = this.props;

    return (
      <div className="questionSection flexContainer">
        <div className="cardContainer">
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
            ¿De que color es el
            caballo blanco de san matín?
          </h5>

          <button className="whiteBtn">
            Blanco
          </button>
          <button className="whiteBtn">
            Rojo
          </button>
          <button className="whiteBtn">
            Amarillo
          </button>

          <div className="footer">
            <div>Mesa {mesa}</div>
            <div className="footerPoints">Pts: 50</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
