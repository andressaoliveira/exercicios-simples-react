import React from "react";


export default class combustivel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        distancia: 0,
        preco: 0,
         tempo: 0,
         velocidade: 0,
         rendimento: 0,
         
         
         Litros: 0,
         Total: 0,
         exibir: false
    }
}

  changeTempo(novoTempo){
    this.setState({tempo: novoTempo});
  }

  changeVelocidade(novaVelocidade){
    this.setState({velocidade: novaVelocidade});
  }

  changeRendimento(novoRendimento){
    this.setState({rendimento: novoRendimento});
  }

  changePreco(novoPreco){
    this.setState({preco: novoPreco});
  }
  render(){
    const {tempo, velocidade, Litros, exibir, distancia, Total, rendimento} = this.state;
    return(
      <div>
          <h4>Combustível</h4>
          <div>
          <label>Preço gasolina (em Reais): </label> 
          <input onChange={(e) => this.changePreco(e.target.value)} />
          </div>
          
          <div>
          <label>Velocidade Média do carro (em Km): </label> 
          <input onChange={(e) => this.changeVelocidade(e.target.value)}/>
          </div>
          <div>
          <label>Tempo (gasto em horas): </label> 
          <input onChange={(e) => this.changeTempo(e.target.value)}/>
          </div>
          <div>
          <label>Rendimento médio (em Km/H): </label> 
          <input onChange={(e) => this.changeRendimento(e.target.value)}/>
          </div>
         
          <div>
          <button onClick={()=> this.calculosTotais()}>Calcular</button>
                {exibir ? <div id="resultado">
                Gastos totais = R$ {Total.toFixed(2)}   
                Combustível = {Litros.toFixed(2)} litros<br/>
                    Velocidade Média do carro = {velocidade} km/h<br/>
                    Rendimento = {rendimento} km/l<br/>
                    Tempo de viagem = {tempo} horas<br/>
                    
                    Distância = {distancia} km<br/>
                    
                   
                </div> : null} 
          </div>
      </div>  
    );
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
        rendimento: rendi,
        Litros: calclitros,
        tempo: time,
        velocidade: speed,
        
        preco: money,
        distancia: calcdistancia,
        
        Total: calctotal,
        exibir: true
       });
};


}