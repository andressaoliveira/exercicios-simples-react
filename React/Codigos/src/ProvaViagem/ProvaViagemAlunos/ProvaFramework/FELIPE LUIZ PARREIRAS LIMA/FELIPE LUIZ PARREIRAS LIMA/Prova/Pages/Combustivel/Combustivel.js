import React from "react";
import "./Combustivel.css";
export class Combustivel extends React.Component {
  constructor() {
    super()
    this.state = {
      tempo: '',
      medVelocidade: '',
      medRendimento: '',
      precoGasolina: '',
      distancia: '',
      combustivel: 0,
      valTotal: 0,
    }
  }

  atualizarTempo = (event) => {
    this.setState({ tempo: event.target.value })
  }

  atualizarVelocidade = (event) => {
    this.setState({ medVelocidade: event.target.value })
  }

  atualizarRendimento = (event) => {
    this.setState({ medRendimento: event.target.value })
  }

  atualizarGasolina = (event) => {
    this.setState({ precoGasolina: event.target.value })
  }

  calculando = () => {
    var distancia = this.state.medVelocidade * this.state.tempo
    this.setState({ distancia: distancia })

    var litros = distancia / this.state.medRendimento
    this.setState({ combustivel: litros })

    var total = litros * this.state.precoGasolina
    this.setState({ valTotal: total })
  }

  render() {
    return (
      <div className="mainCombustivel">
        <div className="secondCombustivel">
            <div className="form">
              <h3> Combustivel: </h3>
              <label>Tempo: </label>
              <input type="number" value={this.state.tempo} onChange={this.atualizarTempo} />
            </div>

            <div className="form">
              <label>Velocidade Media: </label>
              <input type="number" value={this.state.medVelocidade} onChange={this.atualizarVelocidade} />
            </div>

            <div className="form">
              <label>Rendimento Medio: </label>
              <input type="number" value={this.state.medRendimento} onChange={this.atualizarRendimento} />
            </div>

            <div className="form">
              <label>Preço gasolina: </label>
              <input type="number" value={this.state.precoGasolina} onChange={this.atualizarGasolina} />
            </div>

            <button onClick={this.calculando} className="btncalcular"> Calcular </button>
        </div>


        <div id="Resultado" >
          <h3> Resultado: </h3>
          <p>Tempo gasto: {this.state.tempo} Horas</p>
          <p>Valocidade media: {this.state.medVelocidade} Km/h</p>
          <p>Rendimento: {this.state.medRendimento} Km/Litro</p>
          <p>Proço gasolina: {this.state.precoGasolina} Reais</p>
          <p>Distancia : {this.state.distancia} Km</p>
          <p>Combustivel : {this.state.combustivel} Litros</p>
          <p>Valor Total : R${this.state.valTotal}</p>
        </div>
      </div>
    )
  }
}

