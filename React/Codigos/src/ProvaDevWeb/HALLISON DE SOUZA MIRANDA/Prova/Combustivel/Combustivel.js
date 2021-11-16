import React from "react";
const titulo = "Combustível";

export default class Combustivel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        tempo: 0,
        velocidadeMedia: 0,
        rendimentoMedio: 0,
        precoGasolina: 0,
        distancia: 0,
        litros: 0, 
        valorTotal: 0
    };
  }

  mudarTempo(novoTempo){
    this.setState({tempo:novoTempo});
  }

  mudarVelocidadeMedia(novaVelocidadeMedia){
    this.setState({velocidadeMedia:novaVelocidadeMedia})
  }

  mudarRendimentoMedio(novoRendimentoMedio){
    this.setState({rendimentoMedio:novoRendimentoMedio})
  }

  mudarPrecoGasolina(novaPrecoGasolina){
    this.setState({precoGasolina:novaPrecoGasolina})
  }

  mudarLitros(novoLitros){
    this.setState({litros:novoLitros})
  }

  mudarDistancia(novoDistancia){
    this.setState({distancia:novoDistancia})
  }

  mudarValorTotal(novoValorTotal){
    this.setState({valorTotal:novoValorTotal})
  }
  
  Calculos(){
    const {tempo, velocidadeMedia, rendimentoMedio, precoGasolina, distancia, litros} = this.state;

    this.mudarDistancia( parseFloat((parseFloat(tempo) * parseFloat(velocidadeMedia)).toFixed(2)) );     
    this.mudarLitros( parseFloat((distancia / parseFloat(rendimentoMedio)).toFixed(2)) );      
    this.mudarValorTotal( parseFloat((litros * parseFloat(precoGasolina)).toFixed(2)) )         
        
  }

  render(){
    const {tempo, velocidadeMedia, rendimentoMedio, distancia, litros, valorTotal} = this.state;
      return(
        <div className="combustivel">
          <h1>{titulo}</h1>
        
          <label>Tempo:</label>
          <input onChange={(e) => this.mudarTempo(e.target.value)} ></input>
          <label>(em horas)</label><br/>
          <label>Velocidade média: </label>
          <input onChange={(e) => this.mudarVelocidadeMedia(e.target.value)} ></input>  
          <label>(em km/h)</label><br/>
          <label>Rendimento médio: </label>
          <input onChange={(e) => this.mudarRendimentoMedio(e.target.value)} ></input>  
          <label>(em km/litros)</label><br/>
          <label>Preço gasolina: </label>
          <input onChange={(e) => this.mudarPrecoGasolina(e.target.value)} ></input>  
          <label>(em reais R$)</label><br/> 
          <button onClick={() => this.Calculos()}>Calcular</button>

          <div id="valores">
            <h3> Velocidade média: {velocidadeMedia}</h3>
            <h3> Tempo gasto: {tempo}</h3>
            <h3> Rendimento: {rendimentoMedio}</h3>
            <h3> Distancia: {distancia}</h3>
            <h3> Combustivel: {litros}</h3>
            <h3> Valor total: R$ {valorTotal}</h3>
          </div>
          
        </div>
      )
  }
};
