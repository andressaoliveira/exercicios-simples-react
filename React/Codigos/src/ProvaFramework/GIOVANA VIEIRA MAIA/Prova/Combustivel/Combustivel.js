import React from 'react';
import CSS from '../Css/Style.css';

import Menu from '../Menu/Menu';
import Calculo from './CalculoCombustivel';

export default class Combustivel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempo: null,
            velocRendimento: null,
            rendimento: null            
        };
    }   
    
    changeTempo(novoTempo) {
        this.setState({ tempo: novoTempo });
    }
    changeVelocidade(novaVelocidade) {
        this.setState({ velocidade: novaVelocidade });
    }
    
    changeRendimento(novaRendimento) {
        this.setState({ rendimento: novaRendimento });
    }

    changePreco(novaPreco) {
        this.setState({ preco: novaPreco });
    }
    
    render() {;
        const { tempo, velocidade, rendimento, preco } = this.state;
        return (
            <div id='combustivel' className="telas">
                <Menu/>
                <h1>Combustível</h1>
                <div>
                    <label>Tempo:</label>
                    <input
                        onChange={(e) => this.changeTempo(e.target.value)}
                    /> (em horas)
                </div>
                <div>
                    <label>Velocidade média:</label>
                    <input
                        onChange={(e) => this.changeVelocidade(e.target.value)}
                    /> (em km/h)
                </div>
                <div>
                    <label>Rendimento médio:</label>
                    <input
                        onChange={(e) => this.changeRendimento(e.target.value)}
                    />(em km/litros)
                </div>
                <div>
                    <label>Preço gasolina:</label>
                    <input
                        onChange={(e) => this.changePreco(e.target.value)}
                    />(em reais R$)
                </div>
                                                
                <div id="resultado-formulario">
                <Calculo tempo = {tempo} velocidade = {velocidade} rendimento = {rendimento} preco = {preco}/>
                <div>Tempo: {tempo} horas</div>
                <div>Velocidade média: {velocidade} km/h</div>
                <div>Rendimento médio: {rendimento} km/litros</div>            
                
                
            </div>

        </div>
    );
    }    
}