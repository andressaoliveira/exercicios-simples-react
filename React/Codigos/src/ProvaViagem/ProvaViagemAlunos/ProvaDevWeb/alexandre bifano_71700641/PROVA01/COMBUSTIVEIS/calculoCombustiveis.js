import React from 'react';
import Botao from '../COMBUSTIVEIS/botaoCombustiveis';

export default class Calculo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: null,
            exibir: false
        };
    }

    calculoDistanciaPecorrida = () => {
        const { tempo, velocidadeMedia } = this.props;
        const distancia = tempo * velocidadeMedia
        let resultadoDistancia = null;

         this.setState({
                valor: resultadoDistancia=distancia,
                exibir: true
            });
    };

        calculaQuantidadeDeLitros = (resultadoDistancia) => {
        const { rendimentoMedio } = this.props;
        const quantidadeDeLitros = resultadoDistancia/ rendimentoMedio
        let resultadoQuantidadeLitros = null;

         this.setState({
                valor: resultadoQuantidadeLitros=quantidadeDeLitros,
                exibir: true
            });
    };

    render() {
        const { resultadoDistancia, resultadoQuantidadeLitros, valor, exibir } = this.state;

        return (
            <div>
                <h1>Calculo Gasolina</h1>
                <Botao onClick={() => this.calculoDistanciaPecorrida()}>Calcular Distancia</Botao>
                {exibir ? <div id="resultado">
                    Valor = {valor.toFixed(1)}<br />
                </div> : null}

                <h1>Calculo Gasolina</h1>
                <Botao onClick={() => this.calculaQuantidadeDeLitros()}>Calcular Quantidade de Litros</Botao>
                {exibir ? <div id="resultado">
                    Valor = {valor.toFixed(1)}<br />
                </div> : null}
            </div>
        )
    }
}