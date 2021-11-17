import React from 'react';
import Botao from './Botao';

export default class Combustivel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            valor: null,
            valor2: null,
            valor3: null,
            D: null,
            L: null,
            P: null,
            exibir: false
        };
    }

    calculoDistancia = () => {
        const { tempo, velocidade } = this.props;
        const D = tempo * velocidade;
        let resultado = null;

        if (this.validaInformacoes()) {
            this.setState({
                valor: D,
                exibir: true
            });
        }
    }

    calculoLitros = () => {
        const {rendimento, D} = this.props;
        const L = D / rendimento;
        let resultado2 = null;

        if (this.validaInformacoes()) {
            this.setState({
                valor2: L,
                exibir: true
            });
        }
    }

    calculoPreco = () => {
        const {L, preco} = this.props;
        const P = L * preco;
        let resultado3 = null;

        if (this.validaInformacoes()) {
            this.setState({
                valor3: P,
                exibir: true
            });
        }
    }

    validaInformacoes = () => {
        const { tempo, velocidade, rendimento, preco } = this.props;
        if (!tempo || !velocidade || !rendimento || !preco) {
            alert('Insira todos os dados')
            return false
        }
        return true
    }

    //não consigo colocar o botao pra funcionar então coloquei os dados a mostra
    render() {
        const {exibir, valor, valor2, valor3} = this.state;

        return (
            <div>
                <Botao onClick={() => this.calculoDistancia(), () => this.calculoLitros(), () => this.calculoPreco}>Calcular</Botao>
                <div id="resultado">
                    Distância: {valor}<br />
                    Conbustivel: {valor2}<br />
                    Valor total: {valor3}<br />
                    </div>
            </div>
        )
    }
}