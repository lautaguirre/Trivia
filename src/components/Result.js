import React, { Component } from 'react';

import './Result.scss';

class Result extends Component {
  render() {
    const { mesa, points, mesas } = this.props;

    let positions = [ ...mesas ];

    positions.sort((a, b) => {
      return b.preguntasCorrectas.length - a.preguntasCorrectas.length;
    });

    const myTable = positions.find(item => item.numero === mesa);

    const isWinner = (myTable.preguntasCorrectas.length === positions[0].preguntasCorrectas.length)
      ? (
        <div>
          <div className="winnerTitle">
            ¡Felicitaciones!
          </div>
          <div className="winnerSubtitle">
            ¡Ganaste!
          </div>
        </div>
      ) : null;

    return (
      <div className="resultSection flexContainer">
        <div className="cardContainer">

          {isWinner}

          <div className="totalTitle">TOTAL</div>
          <h1 className="totalPoints">
            {points}
            <span className="pointsDesc">pts</span>
          </h1>

          <div className="footer">
            <div>Mesa {mesa}</div>
            <div className="footerPoints">Puntos: {points}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
