import React from "react";

export default class Cargos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cargos : []
        };
    }

    componentDidMount() {
        fetch('https://legis.senado.leg.br/dadosabertos/senador/13/cargos')
        .then(res => res.json())
        .then(res => {
            this.setState({
                cargos: res
            });
        })
        .catch((err) =>{
            console.error("Ocorreu um erro " + err);
        });
    }

    render() {
        const {cargos} = this.state;
        return (
            <div>
                <h1>Cargos</h1>

                <ul>
                    {cargos.map((item) =>
                    <li key={item.CodigoComissao} >
                        <p><b>Cargo: </b> {item.CodigoCargo} - {item.DataFim}</p>
                        <p><b>Descrição: </b> {item.DescricaoCargo}s</p>
                        <p><b>Data Inicio: </b> {item.DataInicio}s</p>
                    </li>
                    )}
                </ul>

            </div>
        )
    }
}