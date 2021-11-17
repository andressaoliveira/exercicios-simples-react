import React from "react";
import { Redirect } from "react-router";

export class Combustivel extends React.Component {

  //construtor inicia todos os valores como 0
  constructor() {
    super()
    this.state = {
      tempo: 0,
      medVelo: 0,
      medRend: 0,
      precoGas: 0.00,
      distancia : 0,
      combustivel: 0,
      valTotal: 0,
    }
  }

  //esta seção e respostavel por mudar o valor passado para o resultado com o onchange, 
  //posivel visualisar apenas quando o butão calcular for clicado
  mudaTempo = (event) => {
    this.setState({tempo:event.target.value})
  }

  mudaVelo = (event) => {
    this.setState({medVelo:event.target.value})
  }

  mudaRend = (event) => {
    this.setState({medRend:event.target.value})
  }

  mudaGas = (event) => {
    this.setState({precoGas:event.target.value})
  }


//função responsavel por fazer os calculaos e tambem por tornar a div com os resultados visivel
  calcular = () => {
    var dist = this.state.tempo * this.state.medVelo
    this.setState({distancia: dist })

    var li = dist / this.state.medRend
    this.setState({combustivel: li})

    var total = li * this.state.precoGas
    this.setState({valTotal : total})

    document.getElementById('id').style = {
      visibility:"visible"
    }
  }

  //render, renderisa a tela
  render() {
    return (
      <div>
        <div className="form">
          <label>Tempo</label>
          <input type="text"
            value={this.state.tempo}
            onChange={this.mudaTempo}
          />
          <label>(em horas)</label>
        </div>

        <div className="form">
          <label>Velocidade Media</label>
          <input type="text"
            value={this.state.medVelo}
            onChange={this.mudaVelo}
          />
          <label>(em Km/h)</label>
        </div>

        <div className="form">
          <label>Rendimento Medio </label>
          <input type="text"
            value={this.state.medRend}
            onChange={this.mudaRend}
          />
          <label>(em Km/litros)</label>
        </div>

        <div className="form">
          <label>Preço gasolina</label>
          <input type="text"
            value={this.state.precoGas}
            onChange={this.mudaGas}
          />
          <label>(em reais R$)</label>
        </div>

        <button onClick={this.calcular}> Calcular </button>

        <div style={{visibility: "hidden"}} id="id" >

          <p>Tempo gasto:{this.state.tempo}Horas</p>
          <p>Valocidade media:{this.state.medVelo}Km/h</p>
          <p>Rendimento:{this.state.medRend}Km/litro</p>
          <p>Proço gasolina:{this.state.precoGas} Reais</p>
          <p>Distancia :{this.state.distancia}km</p>
          <p>Combustivel :{this.state.combustivel}litro</p>
          <p>Valor Total : R${this.state.valTotal}</p>
        </div>
      </div>
    )
  }
}

