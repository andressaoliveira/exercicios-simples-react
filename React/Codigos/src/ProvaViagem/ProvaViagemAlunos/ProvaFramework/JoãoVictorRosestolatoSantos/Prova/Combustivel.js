import React from 'react';

export default class Rotas extends React.Component{

    constructor(props){

    super(props);
    this.state = {
        tempo: 0,
        velocidade: 0,
        rendimento: 0,
        preco: 0,
        dist: 0,
        total: 0, 
        Totallitros: 0
    }
}


    valorTempo(novoTempo){
        this.setState({tempo : novoTempo});
    }

    valorVelocidade(novoVelocidade){
        this.setState({velocidade : novoVelocidade});
    }

    valorRendimento(novoRendimento){
        this.setState({rendimento : novoRendimento});
    }

    valorPreco(novoPreco){
        this.setState({preco : novoPreco});
    }

    calculo(){

        const { tempo, velocidade, rendimento, preco} = this.state
        var distancia = tempo * velocidade
     
        var litros = distancia / rendimento 

        var valorTotal = litros * preco

        this.setState({dist: distancia, total: valorTotal, Totallitros: litros})
    }

    render(){

        const {tempo, velocidade, rendimento, preco, dist, total} = this.state

        return(
            
            <div>
                <p>Tempo(Em horas)</p>
                <input type = "number" name="tempo" onChange={(e) => this.valorTempo(e.target.value)}></input>

                <p>Velocidade media(Em km/h))</p>
                <input type = "number" name="velocidade" onChange={(e) => this.valorVelocidade(e.target.value)}></input>

                <p>Rendimento medio(Em Km/Litros)</p>
                <input type = "number" name="rendimento" onChange={(e) => this.valorRendimento(e.target.value)}></input>

                <p>Preço da Gasolina(Em R$)</p>
                <input type = "number" name="preco" onChange={(e) => this.valorPreco(e.target.value)}></input>

                <button onClick={() => this.calculo()}>Calcular</button>
                {<div id="resultado">
                    Tempo = {tempo}<br></br>
                    Velocidade = {velocidade}<br></br>
                    Rendimento = {rendimento}<br></br>
                    Preco = {preco}<br></br>
                    Distancia = {dist}<br></br>
                    Valor Total = {total}<br></br>
                </div>}               

            </div>

        )
    }
}