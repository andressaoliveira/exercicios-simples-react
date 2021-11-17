import React from 'react';
import './Combustivel.css'

export default class Combustivel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tempo: '',
            velocidade: '',
            rendimento: '',
            preco: '',
            distancia: '',
            combustivel: '',
            total: '',
            ready: false
        };
    }

    changeTempo(newTempo) {
        this.setState({ tempo: newTempo });
    }
    changeVelocidade(newVelocidade) {
        this.setState({ velocidade: newVelocidade });
    }
    changeRendimento(newRendimento) {
        this.setState({ rendimento: newRendimento });
    }
    changePreco(newPreco) {
        this.setState({ preco: newPreco });
    }
    changeReady(newReady) {
        this.setState({ ready: newReady });
    }

    calculos = () => {
        const { tempo, velocidade, rendimento, preco } = this.state;
        const calcDistancia = tempo*velocidade;
        const calcCombustivel = calcDistancia/rendimento;
        const calcTotal = calcCombustivel*preco;
        this.setState({
            distancia: calcDistancia,
            combustivel: calcCombustivel,
            total: calcTotal,
        })
        this.changeReady(true);
    }

    render() {
        const { tempo, velocidade, rendimento, preco, ready, distancia, combustivel, total } = this.state;
        return (
            <div className="form">
                <div className="inpt">
                    <label>Tempo:</label>
                    <input type="text" onChange={(e) => this.changeTempo(e.target.value)}/>(em horas)
                </div>

                <div className="inpt">
                    <label>Velocidade média:</label>
                    <input type="text" onChange={(e) => this.changeVelocidade(e.target.value)}/>(em km/h)
                </div>

                <div className="inpt">
                    <label>Rendimento médio:</label>
                    <input type="number" onChange={(e) => this.changeRendimento(e.target.value)}/>(em km/L)
                </div>

                <div className="inpt">
                    <label>Preço gasolina:</label>
                    <input type="number" onChange={(e) => this.changePreco(e.target.value)}/>(em Reais R$)
                </div>
                <button className="ready" onClick={() => this.calculos()}>Calcular</button>

                {ready ? 
                    <div className="resultado">
                        <p>Velocidade média: {velocidade} KM/H</p>
                        <p>Tempo gasto: {tempo} Horas</p>
                        <p>Rendimento: {rendimento} KM/L</p>
                        <p>Distância: {distancia} KMs</p>
                        <p>Combustível: {combustivel} L</p>
                        <p>Valor total: R$ {total.toFixed(2)}</p>
                    </div>
                    : <></>
                }
            </div>
        )
    }
}