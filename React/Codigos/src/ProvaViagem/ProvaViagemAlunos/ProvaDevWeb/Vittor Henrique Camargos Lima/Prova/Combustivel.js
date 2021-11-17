import React from "react";
import Calculo from './CalculoGasolina'

export default class Combustivel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
             tempo: '',
             velocidademedia: '',
             rendimento: '',
             preco: '',
        }
    }

    changeTempo(newTempo){
        this.setState({tempo: newTempo});
    }
    changeVelocidademedia(newVelocidademedia){
        this.setState({velocidademedia: newVelocidademedia});
    }
    changeRendimento(newRendimento){
        this.setState({rendimento: newRendimento});
    }
    changePreco(newPreco){
        this.setState({preco: newPreco});
    }

    render(){
        const {tempo, velocidademedia, rendimento, preco} = this.state;
        return(
          <div>
              <h4><strong>Combustível</strong></h4>
              <div>
              <label>Tempo: </label> <input onChange={(e) => this.changeTempo(e.target.value)} /><label>(em horas) </label>
              </div>
              <div>
              <label>Velocidade Média: </label> <input onChange={(e) => this.changeVelocidademedia(e.target.value)} /><label>(em km/h) </label>
              </div>
              <div>
              <label>Rendimento médio: </label> <input onChange={(e) => this.changeRendimento(e.target.value)} /><label>(em km/litros) </label>
              </div>
              <div>
              <label>Preço gasolina: </label> <input onChange={(e) => this.changePreco(e.target.value)} /><label>(em reais R$) </label>
              </div>
            <Calculo tempo={tempo} velocidademedia={velocidademedia} rendimento={rendimento} preco={preco}/>
          </div>  
        );
    }
 
  }



