import React from 'react';

export default class Calculo extends React.Component{

  constructor(x){
    super(x);

    this.state={tempo: 0,velocidade_M: 0, rendimento_M: 0, preco: 0, distancia: 0, qnt_L: 0, valor: 0}
    
    }

    click(){

      const {tempo, velocidade_M, rendimento_M, preco} = this.state

      var dis = tempo * velocidade_M;
      var qnt = dis /rendimento_M;
      var valor_T = preco * qnt

      this.setState({distancia: dis})
      this.setState({qnt_L: qnt})
      this.setState({valor: valor_T})

    }

    render(){
  
        const{velocidade_M, tempo, rendimento_M, distancia, valor} = this.state

      return (
  
        <div>

            <h1>Calculo</h1>


           <label for="tempo">Tempo</label>  
           <input type="text" name="tempo" placeholder="em horas..." onChange={(e) => this.setState({tempo: e.target.value})}/> <br/>
           <label for="V_M">Velocidade Média</label>  
           <input type="text" name="V_M" placeholder="em km/h..." onChange={(e) => this.setState({velocidade_M: e.target.value})}/> <br/>
           <label for="R_M">Rendimento Médio</label>  
           <input type="text" name="R_M" placeholder="em km/litros..." onChange={(e) => this.setState({rendimento_M: e.target.value})}/> <br/>
           <label for="preco">Preço da gasolina</label>  
           <input type="text" name="preco" placeholder="em reais (R$)..." onChange={(e) => this.setState({preco: e.target.value})}/> <br/>

           <button onClick={() => this.click()}>Calcular</button>
           
      <p> Velocidadee Média: {velocidade_M}</p>
      <p> Tempo gasto: {tempo}</p>
      <p> Rendimento: {rendimento_M}</p>
      <p> Distância: {distancia}</p>
      <p> Valor total: {valor}</p>

        </div>

      )
    }
  }
