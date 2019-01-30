import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Waiting.scss';

class Waiting extends Component {
  render() {
    const { mesa } = this.props;

    return (
      <div className="waitingSection flexContainer">
        <div className="cardContainer">
          <div className="loader" />

          <div className="content">
            Bienvenida mesa {mesa}<br/>
            Esperemos que se
            conecten los demas competidores y
            empezamos el juego!
          </div>

          <div className="wrongTable">Elegiste mal tu mesa?</div>

          <Link className="backBtn" to="/">Volver</Link>
        </div>
      </div>
    );
  }
}

export default Waiting;
