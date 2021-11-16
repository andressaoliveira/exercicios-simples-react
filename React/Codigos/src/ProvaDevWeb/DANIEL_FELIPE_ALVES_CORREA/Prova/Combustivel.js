import React from "react";
import { Botao } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

export default class Combustivel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          tempo: null,
          velMedia: null,
          rend: null,
          preco: null,
          dist: null,
          litros: null,
          valTotal: null,
          mostrar: false
        };
    }

    changeHora(valor){
        this.setState({tempo: parseFloat(valor)})
    }

    changeVelocidade(valor){
        this.setState({velMedia: parseFloat(valor)})
    }

    changeRendimento(valor){
        this.setState({rend: parseFloat(valor)})
    }

    changePreco(valor){
        this.setState({preco: parseFloat(valor.replace(",", "."))})
    }

    calcular(){
        var {tempo, velMedia, rend, preco} = this.state
        if(tempo == null || velMedia == null || rend == null || preco == null){
            return alert('Preencha todos os campos!');
        }

        let d = tempo * velMedia
        let l = d/rend

        this.setState({
            dist: d,
            litros: l,
            valTotal: preco*l,
            mostrar: true
        })
    }

    render(){
        const {tempo, velMedia, rend, dist, litros, valTotal, mostrar} = this.state
        return(
            <div>
                <h5>Combustível</h5>
                <span>Tempo (em Horas):</span>
                <Input type="text" placeholder="Horas" onChange={(e) => this.changeHora(e.target.value)}></Input>
                <span>Velocidade Média (em km/h):</span>
                <Input type="text" placeholder="KM/H" onChange={(e) => this.changeVelocidade(e.target.value)}></Input>
                <span>Rendimento Médio (em km/litros):</span>
                <Input type="text" placeholder="KM/Litros" onChange={(e) => this.changeRendimento(e.target.value)}></Input>
                <span>Preço da gasolina (em reais R$):</span>
                <Input type="text" placeholder="R$" onChange={(e) => this.changePreco(e.target.value)}></Input>
                <Botao variant="dark" onClick={() => this.calcular()}>Calcular</Botao>
                {mostrar && <div className="mt-3">
                    <p>Velocidade Média: {velMedia} km/h</p>
                    <p>Tempo gasto: {tempo} horas</p>  
                    <p>Rendimento: {rend} km/litros</p>   
                    <p>Distância percorrida: {dist} km</p>
                    <p>Quantidade de litros: {litros.toFixed(2)} litros</p>
                    <p>Valor total: R$ {valTotal.toFixed(2)}</p>   
                </div>}
            </div>
        );
    }
}