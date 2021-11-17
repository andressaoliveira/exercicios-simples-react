import React from 'react';

export default class Combustivel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {velocidade: 1,
    tempo:1,
rendimento:1,
distancia:1,
preco:1 }
    }

    render() {
        const {velocidade} = this.state.velocidade
        const {tempo} = this.state.tempo
        const {rendimento} = this.state.rendimento 
        let preco = this.state.preco
        preco = distancia / rendimento
        let distancia = this.state.distancia
        distancia = velocidade * tempo  
        return (
            <div>
                <label> Velocidade </label>
                <input onChange={this.inputChange} type='number' value={velocidade} ></input> <br />
                <label> tempo </label>
                <input onChange={this.inputChange} type='number' value={tempo} ></input><br />
                <label> rendimento </label>
                <input onChange={this.inputChange} type='number' value={rendimento} ></input> <br />
                <label> preço </label>
                <input onChange={this.inputChange} type='number' value={preco} ></input> <br />
                <label>{distancia}</label>
                <label>{preco}</label>
            </div>
        ); 
    }
} 