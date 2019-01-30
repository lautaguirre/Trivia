import React, { Component } from 'react';

import './Result.scss';

class Result extends Component {
  render() {
    const { mesa, points, mesas } = this.props;

    let positions = [ ...mesas ];

    positions.sort((a, b) => {
      return b.preguntasCorrectas.length - a.preguntasCorrectas.length;
    });

    return (
      <div className="resultSection flexContainer">
        <div className="cardContainer">

          <h1>
            {positions[0].numero === mesa
              ? 'GANASTE!' : null}
          </h1>

          <div className="totalTitle">TOTAL</div>
          <h1 className="totalPoints">
            {points}
            <span className="pointsDesc">pts</span>
          </h1>

          <div className="footer">
            <div>Mesa {mesa}</div>
            <div className="footerPoints">Pts: {points}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
