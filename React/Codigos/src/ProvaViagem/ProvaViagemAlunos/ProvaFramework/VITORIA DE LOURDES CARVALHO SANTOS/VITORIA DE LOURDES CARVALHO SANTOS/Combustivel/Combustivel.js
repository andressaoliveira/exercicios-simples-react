import React from 'react'

export default class Combustivel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: null,
            categoria: '',
            exibir: true
        };
    }

    calculoCombustivel = () => {
        const {tempo, velocidadeM, rendimentoM} = this.props
        const distancia = tempo * velocidadeM
        const litros = distancia/rendimentoM
        let resultado = null;

        this.setState({
            valorD: distancia,
            valorL: litros,
            exibir: true
        });
        
    }
    render(){
        const { valorD, valorL, exibir } = this.state;

        return (
            <div>
                <button onClick = {() => this.calculoCombustivel()}>Calcular</button>
                {exibir ? <div>
                    Valor = {valorD}<br />
                    Categoria = {valorL}
                </div> : null}
            </div>
        )
    }
}