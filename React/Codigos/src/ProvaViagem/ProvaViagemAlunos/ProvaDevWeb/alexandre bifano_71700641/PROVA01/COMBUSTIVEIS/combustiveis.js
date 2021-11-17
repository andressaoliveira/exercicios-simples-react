import React from 'react';
import Calculo from '../COMBUSTIVEIS/calculoCombustiveis';

export default class Combustível extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempo: '',
            velocidadeMedia: '',
            rendimentoMedio: '',
            precoGasolina: ''
            
            
        };
    }

    changeTempo(newTempo) {
        this.setState({ tempo: newTempo });
    }

    changeVelocidadeMedia(newVelocidadeMedia) {
        this.setState({ velocidadeMedia: newVelocidadeMedia });
    }

    changeRendimentoMedio(newRendimentoMedio) {
        this.setState({ RendimentoMedio: newRendimentoMedio });
    }

    changePrecoGasolina(newPrecoGasolina) {
        this.setState({ precoGasolina: newPrecoGasolina.replace(",", ".") });
    }

    changeValorTotal(newresultadoQuantidadeLitros) {
        this.setState({ resultadoQuantidadeLitros: newresultadoQuantidadeLitros.replace(",", ".") });
    }

    render() {
        const { tempo, velocidadeMedia, rendimentoMedio, precoGasolina,resultadoDistancia, resultadoQuantidadeLitros } = this.state;
        return (
            <div>
                <h1>Combustível:</h1>
                <div>
                    <label>Tempo:</label>
                    <input
                        onChange={(e) => this.changeTempo(e.target.value)}
                    />
                     <label>(em horas)</label>
                </div>

                <div>
                    <label>Velocidade Média:</label>
                    <input
                        onChange={(e) => this.changeVelocidadeMedia(e.target.value)}
                    />
                     <label>(em Km/h)</label>
                </div>

                <div>
                    <label>Rendimento Médio:</label>
                    <input
                        onChange={(e) => this.changeRendimentoMedio(e.target.value)}
                    />
                     <label>(em Km/litros)</label>
                </div>

                <div>
                    <label>Preço da Gasolina:</label>
                    <input
                        onChange={(e) => this.changePrecoGasolina(e.target.value)}
                    />
                     <label>(em reais R$)</label>
                </div>

                <div>
                    <label>Preço da Gasolina:</label>
                    <input
                        onChange={(e) => this.changePrecoGasolina(e.target.value)}
                    />
                     <label>(em reais R$)</label>
                </div>

                <div id="resultado">
                    <h1>Resultado</h1>
                    <div>Tempo: {tempo}</div>
                    <div>Velocidade Média: {velocidadeMedia}</div>
                    <div>Rendimento: {rendimentoMedio}</div>
                    <div>Distância: {resultadoDistancia}</div>
                    <div>Combustível: {precoGasolina}</div>
                    <div>Valor total: {resultadoQuantidadeLitros}</div>
                </div>

                <Calculo resultadoDistancia={resultadoDistancia} resultadoQuantidadeLitros={resultadoQuantidadeLitros} />
            </div >
        )
    }
}