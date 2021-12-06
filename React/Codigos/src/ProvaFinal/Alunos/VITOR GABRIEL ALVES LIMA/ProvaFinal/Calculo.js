import React from "react";
import "./Calculo.css";
export default class Calculo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number01: 0,
      number02: 0,
      showResult: false,
    };
  }

  changeNumber01(newNumber01) {
    this.setState({ number01: newNumber01 });
  }
  changeNumber02(newNumber02) {
    this.setState({ number02: newNumber02 });
  }

  changeShowResult() {
    this.setState({ showResult: !this.state.showResult });
  }
  resultado(number01, number02) {
    if (number01 % number02 === 0) {
      return <p>Esses números são dívisiveis</p>;
    } else if (number02 === 0) {
      return <p>Não existe divisão por zero</p>;
    } else {
      return <p>Esses números não são dívisiveis</p>;
    }
  }

  render() {
    return (
      <div className="calculo">
        <h1>Divísivel</h1>
        <p>Primeiro número</p>
        <input
          type="number"
          onChange={(e) => this.changeNumber01(e.target.value)}
        />
        <p>Segundo número</p>
        <input
          type="number"
          onChange={(e) => this.changeNumber02(e.target.value)}
        />

        <button onClick={() => this.changeShowResult()}>
          {this.state.showResult ? "Ocultar Resultado" : "Mostrar Resultado"}
        </button>

        {this.state.showResult ? (
          <div>
            {this.resultado(
              parseInt(this.state.number01),
              parseInt(this.state.number02)
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
