import React from "react";
import "./Combustivel.scss";

export default class Combustivel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tempo: 0,
      velocidade: 0,
      rendimento: 0,
      preco: 0.0,
      distancia: 0,
      qtdLitros: 0,
      valorTotal: 0.0,
      mostrar: false,
    };
  }

  changeElement(newValue, element) {
    switch (element) {
      case "tempo":
        this.setState({ tempo: parseInt(newValue) });
        break;
      case "velocidade":
        this.setState({ velocidade: parseInt(newValue) });
        break;
      case "rendimento":
        this.setState({ rendimento: parseInt(newValue) });
        break;
      case "preco":
        this.setState({ preco: parseFloat(newValue) });
        break;
    }
  }
  calcular() {
    const { tempo, velocidade, rendimento, preco } = this.state;

    const distancia = tempo * velocidade;
    const qtdLitros = (distancia / rendimento).toFixed(2);
    const valorTotal = (qtdLitros * preco).toFixed(2);

    this.setState({
      distancia,
      qtdLitros,
      valorTotal,
      mostrar: true,
    });
  }

  render() {
    const {
      tempo,
      velocidade,
      rendimento,
      preco,
      distancia,
      qtdLitros,
      valorTotal,
      mostrar,
    } = this.state;

    return (
      <div className="combustivel">
        <h1>Combustível</h1>

        <label>Tempo: </label>
        <input
          autoFocus
          onChange={(e) => this.changeElement(e.target.value, "tempo")}
        />
        <label>(em horas)</label>

        <br />

        <label>Velocidade média: </label>
        <input
          onChange={(e) => this.changeElement(e.target.value, "velocidade")}
        />
        <label>(em km/h)</label>

        <br />

        <label>Rendimento médio: </label>
        <input
          onChange={(e) => this.changeElement(e.target.value, "rendimento")}
        />
        <label>(em km/litros)</label>

        <br />

        <label>Preço gasolina: </label>
        <input onChange={(e) => this.changeElement(e.target.value, "preco")} />
        <label>(em reais R$)</label>

        <br />

        <button onClick={() => this.calcular()}>Calcular</button>

        <br />
        <br />

        {mostrar && (
          <div>
            <label>Valocidade média: {velocidade} km/h</label>
            <br />
            <br />

            <label>Tempo gasto: {tempo} horas</label>
            <br />
            <br />

            <label>Rendimento: {rendimento} km/litros</label>
            <br />
            <br />

            <label>Distância: {distancia} km</label>
            <br />
            <br />

            <label>Combustível: {qtdLitros} litros</label>
            <br />
            <br />

            <label>Valor Total: R$ {valorTotal}</label>
            <br />
            <br />
          </div>
        )}
      </div>
    );
  }
}
