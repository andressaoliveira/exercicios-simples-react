import React from "react";


export default class combustivel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
         tempo: 0,
         velocidade: 0,
         rendimento: 0,
         preco: 0,
         distancia: 0,
         Litros: 0,
         Total: 0,
         exibir: false
    }
}

  changeTempo(newTempo){
    this.setState({tempo: newTempo});
  }

  changeVelocidade(newVelocidade){
    this.setState({velocidade: newVelocidade});
  }

  changeRendimento(newRendimento){
    this.setState({rendimento: newRendimento});
  }

  changePreco(newPreco){
    this.setState({preco: newPreco});
  }

  calculosTotais = () =>{
    const { tempo, velocidade, rendimento, preco} = this.state;

      var time = tempo;
      var speed = velocidade;
      var rendi = rendimento;
      var money = preco;
       const calcdistancia = time * speed; 
       const calclitros = calcdistancia / rendi;
       const calctotal = money * calclitros;          
       
       this.setState({
        tempo: time,
        velocidade: speed,
        rendimento: rendi,
        preco: money,
        distancia: calcdistancia,
        Litros: calclitros,
        Total: calctotal,
        exibir: true
       });
};

render(){
    const {tempo, velocidade, Litros, exibir, distancia, Total, rendimento} = this.state;
    return(
      <div>
          <h4>Combustível</h4>
          <div>
          <label>Tempo gasto em horas: </label> 
          <input onChange={(e) => this.changeTempo(e.target.value)}/>
          </div>
          <div>
          <label>Velocidade Média do carro Km: </label> 
          <input onChange={(e) => this.changeVelocidade(e.target.value)}/>
          </div>
          <div>
          <label>Rendimento médio Km/H: </label> 
          <input onChange={(e) => this.changeRendimento(e.target.value)}/>
          </div>
          <div>
          <label>Preço gasolina em Reais: </label> 
          <input onChange={(e) => this.changePreco(e.target.value)} />
          </div>
          <div>
          <button onClick={()=> this.calculosTotais()}>Calcular</button>
                {exibir ? <div id="resultado">
                    Velocidade Média do carro = {velocidade} km/h<br/>
                    Tempo de viagem = {tempo} horas<br/>
                    Rendimento = {rendimento} km/l<br/>
                    Distância = {distancia} km<br/>
                    Combustível = {Litros.toFixed(2)} litros<br/>
                    Gastos totais = R$ {Total.toFixed(2)} 
                </div> : null} 
          </div>
      </div>  
    );
}
}
