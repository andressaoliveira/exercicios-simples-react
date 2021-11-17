import React from 'react';
import Formulario from './Formulario';

//atividade de imc purinho isso aqui

export default class Terceira extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempo: null,
            velocidade: null,
            rendimento: null,
            preco: null,
        };
    }

    changeTempo(novoTempo) {
        this.setState({tempo: novoTempo});
    }
    changeVelocidade(novoVelocidade) {
        this.setState({velocidade: novoVelocidade});
    }
    changeRendimento(novoRendimento) {
        this.setState({rendimento: novoRendimento});
    }
    changePreco(novoPreco) {
        this.setState({preco: novoPreco});
    } 

    render() {
        const {tempo, velocidade, rendimento, preco} = this.state;
        return (
            <div>
                <h2>Combustível</h2>
                <div>
                    <label>Tempo:</label>
                    <input 
                    onChange={(e) => this.changeTempo(e.target.value)}
                    />
                    <label>(em horas)</label>
                </div>

                <div>
                    <label>Velocidade média:</label>
                    <input 
                    onChange={(e) => this.changeVelocidade(e.target.value)}
                    />
                    <label>(em Km/h)</label>
                </div>

                <div>
                    <label>Rendimento médio:</label>
                    <input 
                    onChange={(e) => this.changeRendimento(e.target.value)}
                    />
                    <label>(em Km/litro)</label>
                </div>

                <div>
                    <label>Preço gasolina:</label>
                    <input 
                    onChange={(e) => this.changePreco(e.target.value)}
                    />
                    <label>(em reais R$)</label>
                </div>

                <div id="resultado-formulario">
                    <h3>Dados</h3>
                    <div>Tempo: {tempo} horas</div>
                    <div>Velocidade: {velocidade} km/h</div>
                    <div>Rendimento: {rendimento} km/litros</div>
                    <div>Preco: R$ {preco}</div>
                </div>

                <Formulario tempo={tempo} velocidade={velocidade} rendimento={rendimento} preco={preco} />
            </div>
        )
    }
}