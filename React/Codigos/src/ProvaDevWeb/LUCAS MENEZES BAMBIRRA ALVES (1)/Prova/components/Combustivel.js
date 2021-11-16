import React from "react";

class Combustivel extends React.Component {
  constructor(props) {
    super(props);
    // Bind da variável this nos handles
    this.handleChangeTempo = this.handleChangeTempo.bind(this)
    this.handleChangeVelocidade = this.handleChangeVelocidade.bind(this)
    this.handleChangeRendimento = this.handleChangeRendimento.bind(this)
    this.handleChangeGasolina = this.handleChangeGasolina.bind(this)
    this.handleClick = this.handleClick.bind(this)
    // State com todas as variáveis utilizadas
    this.state = {
      resultadoVisivel: false,
      tempo: 0,
      velocidade: 0,
      rendimento: 0,
      gasolina: 0
    };
  }
  // Funções para alterar o state de acordo com o estádo prévio.
  handleChangeTempo(event) {
    this.setState(prev => ({...prev, tempo: event.target.value}))
  }
  handleChangeVelocidade(event) {
    this.setState(prev => ({...prev, velocidade: event.target.value}))
  }
  handleChangeRendimento(event) {
    this.setState(prev => ({...prev, rendimento: event.target.value}))
  }
  handleChangeGasolina(event) {
    this.setState(prev => ({...prev, gasolina: event.target.value}))
  }
  handleClick() {
    this.setState(prev => ({...prev, resultadoVisivel: true}))
    // alert(JSON.stringify(this.state))
  }
  render() {
    return(
      <div className="main">
        <h1>Calculadora</h1>
        {/* Divs com as labels e inputs, cada um chamando um handle para alterar o state. */}
        <div>
          <label>Tempo Gasto (H)</label><br/>
          <input
            type="number"
            value={this.state.tempo}
            onChange={this.handleChangeTempo}
          ></input>
        </div>
        <div>
          <label>Velocidade Média (Km/H)</label><br/>
          <input
            type="number"
            value={this.state.velocidade}
            onChange={this.handleChangeVelocidade}
          ></input>
        </div>
        <div>
          <label>Rendimento Médio (L)</label><br/>
          <input
            type="number"
            value={this.state.rendimento}
            onChange={this.handleChangeRendimento}
          ></input>
        </div>
        <div>
          <label>Preço da Gasolina (R$)</label><br/>
          <input
            placeholder="Preço da Gasolina"
            type="number"
            value={this.state.gasolina}
            onChange={this.handleChangeGasolina}
          ></input>
        </div>
        {/* Botão que ativa a variável "Resultado Visível" */}
        <button onClick={this.handleClick}>Calcular</button>
        {this.state.resultadoVisivel && <div>
          {/* Resultados que são mostrados apenas quando a variavel está exibida, e o calculo de cada resultado de acordo com a prova. */}
          <h4>Resultados:</h4>
          <p>Velocidade Média (Km/H): {this.state.velocidade}</p>
          <p>Tempo Gasto (H): {this.state.tempo}</p>
          <p>Rendimento (L): {this.state.rendimento}</p>
          <p>Distância Percorrida (Km): {this.state.tempo * this.state.velocidade}</p>
          <p>Litros de Combustível (L): {(this.state.tempo * this.state.velocidade) / this.state.rendimento}</p>
          <p>Valor Total Gasto (R$): {((this.state.tempo * this.state.velocidade) / this.state.rendimento) * this.state.gasolina}</p>
        </div>}
      </div>
    )
  }
}

export default Combustivel