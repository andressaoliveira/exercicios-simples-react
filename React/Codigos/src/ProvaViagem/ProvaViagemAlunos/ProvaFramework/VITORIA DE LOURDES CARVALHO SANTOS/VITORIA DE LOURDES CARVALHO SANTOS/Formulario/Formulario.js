import React from 'react'
import Combustivel from '../Combustivel/Combustivel';

export default class Formulario extends React.Component {
    constructor(props){
        super(props);
        this.state = { tempo: '', velocidadeM: '', rendimentoM: ''}
    }
    
    chanegeTempo(newTempo){
        this.setState({ tempo:newTempo})
    }

    chanegeVelocidadeM(newvelocidadeM){
        this.setState({ velocidadeM:newvelocidadeM})
    }

    chanegeRerendimentoM(newRendimentoM){
        this.setState({ rendimentoM:newRendimentoM})
    }

   
    render (){
        return (
            <div>
                <h1>Calculo de Combustivel</h1>
                <p>Digite o tempo gasto:</p>
                <input onChange={(e) => this.chanegeTempo(e.target.value)}></input>
                <p>Digite a velocidade media:</p>
                <input onChange={(e) => this.chanegeVelocidadeM(e.target.value)}></input>
                <p>Digite o redimento medio: </p>
                <input onChange={(e) => this.chanegeRerendimentoM(e.target.value)}></input>
            <Combustivel tempo = {this.state.tempo} velocidadeM ={this.state.velocidadeM} rendimentoM = {this.state.rendimentoM} />
            </div>
         
        )
    }
}