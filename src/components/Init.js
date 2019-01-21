import React, { Component } from 'react';

class Init extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ table: e.target.value })
  }

  render() {
    const { setTable } = this.props;
    const { table } = this.state;

    return (
      <div className="initSection flexContainer">
        <div className="cardContainer">
          <form onSubmit={(e) => setTable(e, table)}>
            <h1>¡Hola!</h1>

            <h3>Ingresá el número de mesa en la que estas.</h3>

            <div className="circleContainer">
              <div className="circle">
                <input
                  value={table}
                  placeholder="00"
                  type="text"
                  maxLength="2"
                  className="circleInput"
                  onChange={(e) => this.handleInput(e)}
                />
              </div>
            </div>

            <button
              className="whiteBtn"
              type="submit"
            >
              Continuar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Init;
