import React from "react";
import './styles/detalhes.css'

export default class Detalhes extends React.Component{
// state para os valores 
    constructor(props) {
        super(props);
        this.state = {
          tempo: null,
          velocidade: null,
          rendimento: null,
          preco: null,
          combustivelT: null,
          valorT:null,
          Distancia:null,
        };
      }
//Metodos para salvar um valor sempre q ele é alterado e para calcular os valores restantes 
      changeHoras(novaHora) {
        this.setState({ tempo: novaHora });
      }

      changeVlcM(novaVelocidade) {
        this.setState({ velocidade: novaVelocidade });
      }

      changeRndM(novoRnedimento) {
        this.setState({ rendimento: novoRnedimento });
      }

      changePrcG(novoPreco) {
        this.setState({ preco: novoPreco });
      }  
//metodo usando as formulas disponibilizadas nas intruções da avaliação
      calculo( tempo , velocidade , rendimento , preco ){
        const novaDistancia = parseFloat(tempo) * parseFloat(velocidade)
        this.setState({ Distancia: novaDistancia})
        const novoCombustivel = novaDistancia / parseFloat(rendimento)
        this.setState({ combustivelT: novoCombustivel})
        const novoValor = novoCombustivel * parseFloat(preco)
        this.setState({ valorT: novoValor})
      }
    render(){
        const{ velocidade , tempo , rendimento , preco , combustivelT , valorT , Distancia} = this.state
        return(
//html no qual usei inputs para pegar os valores,e labels para printa-los,além de usar ações como onChange para que sempre que o campo seja alterado executar um metodo e onClick
//para que toda vez q o botão seja clicado execute um metodo 
            <div className="detalhes">
                <label>
                    Tempo(Em horas): {tempo}
                </label>
                <input onChange={(e) => this.changeHoras(e.target.value)} />
                <label>
                    Velocidade Média(Em km/h): {velocidade}
                </label>
                <input onChange={(e) => this.changeVlcM(e.target.value)} />
                <label>
                    Rendimento Médio(Em km/litros): {rendimento}
                </label>
                <input onChange={(e) => this.changeRndM(e.target.value)} />
                <label>
                    Preço Gasolina(Em reais): {preco}
                </label>
                <input onChange={(e) => this.changePrcG(e.target.value)} />
                <button onClick={() => this.calculo(tempo, velocidade, rendimento, preco)} className="btn"> Calcular </button>
                <label> 
                    Tempo: {tempo} H
                </label>
                <label> 
                    Velocidade Média: {velocidade} Km/H
                </label>
                <label> 
                    Rendimento Médio: {rendimento} Km/Litros
                </label>
                <label> 
                    Preço Gasolina R$: {preco} 
                </label>
                <label>
                   Distancia: {Distancia} km
                </label>
                <label>
                    combustivel Necessario: {combustivelT} L
                </label>
                <label>
                    Valor Total R$:  {valorT} 
                </label>
            </div>
        )
    }
}