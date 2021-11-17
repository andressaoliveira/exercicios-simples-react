import React from 'react';

export default class IMC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorTotal: null,
            distancia: null,
            combustivel: null,
            exibir: false
        };
    }

    calculo = () => {
        const { tempo, velocidade, rendimento, preco } = this.props;
        const distancia = tempo * velocidade;
        const combustivel = distancia/ rendimento;
        const valorTotal = preco * combustivel;

        this.setState({
            valorTotal: valorTotal,
            distancia: distancia,
            combustivel: combustivel,
            exibir: true
        });
    }

    render() {
        const { valorTotal, distancia, combustivel, exibir } = this.state;

        return (
            <div>
                <button id="Calcular" onClick={() => this.calculo()}>Calcular</button>
                <h1>Resultado</h1>
                {exibir ? <div id="resultado">
                    <div>Distância: {distancia.toFixed(1)} km</div>
                    <div>Combustível: {combustivel.toFixed(1)} litros</div>
                    <div>Valor total: R$ {valorTotal.toFixed(1)}</div>
                </div> : null}
            </div>
        )
    }
}