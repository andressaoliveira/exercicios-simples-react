import React from "react";

export default class Senador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cargos: []
        };
    }

    componentDidMount() {
        fetch('https://legis.senado.leg.br/dadosabertos/senador/01/cargos')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    cargos: res
                });
            });
    }

    render() {
        const { cargos } = this.state;
        return (
            <div>
                <h1>Cargos do Senador Ademir</h1>

                <ul>
                    {cargos.map((item) => (
                        <li key={item.CodigoCargo}>
                            <p><b>Código Cargo:</b> {item.CodigoCargo}</p>
                            <p><b>Descrição do Cargo:</b> {item.DescricaoCargo}</p>
                            <p><b>Data:</b> {item.DataInicio}</p>
                            <p><b>Código Comissão:</b> {item.CodigoComissao}</p>
                            <p><b>Sigla Comissão:</b> {item.DataNascimento}</p>
                            <p><b>Nome Comissão:</b> {item.UrlPaginaParlamentar}</p>
                            <p><b>Sigla Casa Comissão:</b> {item.UrlPaginaParlamentar}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}