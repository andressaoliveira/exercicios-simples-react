import React from "react";
export class Fuel extends React.Component {
  constructor() {
    
    // Passagem dos valores igual a 0.

    super();
    this.state = {
      time: 0,
      avgSpeed: 0,
      avgAmount: 0,
      fuelPrice: 0.0,
      distance: 0,
      fuel: 0,
      totalAmount: 0,
    };
  }

  // Setagem das funções e apontando um valor para o outro, gerando assim o cálculo.

  changeTime = (event) => {
    this.setState({ time: event.target.value });
  };

  changeSpeed = (event) => {
    this.setState({ avgSpeed: event.target.value });
  };

  changeAmount = (event) => {
    this.setState({ avgAmount: event.target.value });
  };

  changeFuel = (event) => {
    this.setState({ fuelPrice: event.target.value });
  };

  calculate = () => {
    var range = this.state.time * this.state.avgSpeed;
    this.setState({ distance: range });

    var l = range / this.state.avgAmount;
    this.setState({ fuel: l });

    var amount = l * this.state.fuelPrice;
    this.setState({ totalAmount: amount });

    document.getElementById("id").style = {
      visibility: "visible",
    };
  };

      // Renderização dos resultados na tela.

  render() {
    return (
      <div className="main">
        <div className="second">
          <div className="form">
            <label>Tempo</label>
            <input
              type="text"
              value={this.state.time}
              onChange={this.changeTime}
            />
          </div>

          <div className="form">
            <label>Velocidade Média</label>
            <input
              type="text"
              value={this.state.avgSpeed}
              onChange={this.changeSpeed}
            />
          </div>

          <div className="form">
            <label>Rendimento Médio </label>
            <input
              type="text"
              value={this.state.avgAmount}
              onChange={this.changeAmount}
            />
          </div>

          <div className="form">
            <label>Preço da Gasolina</label>
            <input
              type="text"
              value={this.state.fuelPrice}
              onChange={this.changeFuel}
            />
          </div>

          <button onClick={this.calculate}> Calcular </button>
        </div>

       

        <div style={{ visibility: "hidden" }} id="id">
          <p>Tempo Gasto: {this.state.time} (Em Horas)</p>
          <p>Velocidade Média: {this.state.avgSpeed} (Em Km/h)</p>
          <p>Rendimento: {this.state.avgAmount} (Em Km/litro)</p>
          <p>Preço da Gasolina: {this.state.fuelPrice} (Em Reais)</p>
          <p>Distância : {this.state.distance} (Em Km)</p>
          <p>Combustível : {this.state.fuel} (Em litros)</p>
          <p>Valor Total : R${this.state.totalAmount} (Em Reais)</p>
        </div>
      </div>
    );
  }
}

export default Fuel;


    // div acima retorna os valores ao seus decidos lugares e os mostra na tela.