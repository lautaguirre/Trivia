import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import clock from '../assets/clock.png';

import './Waiting.scss';

class Waiting extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.setAllPlayers();
    }, 3000);
  }

  render() {
    const { mesa } = this.props;

    return (
      <div className="waitingSection flexContainer">
        <div className="cardContainer">
          <div className="clock">
            <img src={clock} width="30" alt="Clock"/>
          </div>

          <div>
            Bienvenida mesa {mesa}<br/>
            Esperemos que se
            conecten los demas competidores y
            empezamos el juego!
          </div>

          <h5>Elegiste mal tu mesa?</h5>

          <Link className="whiteBtn" to="/">Volver</Link>
        </div>
      </div>
    );
  }
}

export default Waiting;
