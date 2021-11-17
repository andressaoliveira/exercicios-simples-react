import React from 'react';
import Botao from '../Botao/Botao';
import Input from '../Input/Input';

export default class Combustivel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempo: '',
            velocidadeMedia: '',
            rendimentoMedio: '',
            precoGasolina: '',
            valorTotal: '',
            distancia: '',
            display: false
        };
    }

    changeTempo(newTempo) {
        this.setState({ tempo: newTempo });
    }
    
    changeVelocidadeMedia(newVelocidadeMedia) {
        this.setState({ velocidadeMedia: newVelocidadeMedia });
    }

    changeRendimentoMeio(newRendimentoMedio) {
        this.setState({ rendimentoMedio: newRendimentoMedio });
    }

    changePrecoGasolina(newPrecoGasolina) {
        this.setState({precoGasolina: newPrecoGasolina})
    }

    changeValorTotal(newValorTotal) {
        this.setState({valorTotal: newValorTotal})
    }

    changeDistancia(newDistancia) {
        this.setState({distancia: newDistancia})
    }

    changeDisplay(newDisplay) {
        this.setState({display: newDisplay})
    }

    calculo() {
        const {tempo, velocidadeMedia, rendimentoMedio, precoGasolina, valorTotal, distancia} = this.state;

        if(tempo == "" || velocidadeMedia == "" || rendimentoMedio == "" || precoGasolina == "" ||
        isNaN(tempo) || isNaN(velocidadeMedia) || isNaN(rendimentoMedio) || isNaN(precoGasolina)) {
            alert("Insira um valor válido!");
            return;
        }
        this.changeDisplay(true);

        var dist = parseFloat(tempo) * parseFloat(velocidadeMedia)
        this.changeDistancia(dist.toFixed(2))

        var litros = parseFloat(dist) / parseFloat(rendimentoMedio)

        var vlTotal = parseFloat(litros) * parseFloat(precoGasolina)
        this.changeValorTotal(vlTotal.toFixed(2))

    }

    render () {
        const {tempo, velocidadeMedia, rendimentoMedio, precoGasolina, valorTotal, distancia, display} = this.state;
        return (
            <div className="content">
                <h1>COMBUSTÍVEL</h1>
                <div>
                    <label>Tempo (h):</label>
                    <Input 
                        onChange={(e) => this.changeTempo(e.target.value)}>
                    </Input>
                </div>

                <div>
                    <label>Velocidade Média (km/h):</label>
                    <Input
                        onChange={(e) => this.changeVelocidadeMedia(e.target.value)}>
                    </Input>
                </div>

                <div>
                    <label>Rendimento Médio (km/l):</label>
                    <Input
                        onChange={(e) => this.changeRendimentoMeio(e.target.value)}>
                    </Input>
                </div>

                <div>
                    <label>Preço gasolina (R$):</label>
                    <Input
                        onChange={(e) => this.changePrecoGasolina(e.target.value)}>
                    </Input>
                </div>


                <div id="result">
                    <h1>Resultado</h1>
                    <div>Tempo gasto: {tempo} hora(s)</div>
                    <div>Velocidade média: {velocidadeMedia} km/h</div>
                    <div>Rendimento: {rendimentoMedio} km/l</div>
                    <div>Combustível: R$ {precoGasolina}</div>
                </div>

                <div>
                    <Botao onClick={() => this.calculo()}>Calcular</Botao>
                    {display ? <div id="resultado">
                        Distancia: {distancia} km<br />
                        Valor total: R$ {valorTotal}
                    </div> : null}
                </div>
                
            </div>   
        )
    }
}