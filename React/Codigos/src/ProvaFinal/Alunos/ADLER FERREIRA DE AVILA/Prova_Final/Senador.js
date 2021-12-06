import React from 'react';

export default class Senador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            senador: [],
            servico: []
        };
    }

    componentDidMount() {
        fetch('https://legis.senado.leg.br/dadosabertos/senador/01')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    senador: res,
                    servico: res
                });
            });
    }

    render() {
        const { senador } = this.state;
        const { servico } = this.state;
        return (
            <div>
                <h1>Senador Ademir</h1>

                <ul>
                    {senador.map((item) => (
                        <li key={item.CodigoParlamentar}>
                            <p><img src={item.UrlFotoParlamentar}/></p>
                            <p><b>Nome:</b> {item.NomeCompletoParlamentar}</p>
                            <p><b>Sexo:</b> {item.SexoParlamentar}</p>
                            <p><b>Nascimento:</b> {item.DataNascimento}</p>
                            <p><b>Página Parlamentar:</b> {item.UrlPaginaParlamentar}</p>
                            <p><b>E-mail Parlamentar:</b> {item.UrlPaginaParlamentar}</p>
                            <p><b>Sigla Partido:</b> {item.UrlPaginaParlamentar}</p>
                            <p><b>Naturalidade:</b> {item.UrlPaginaParlamentar}</p>
                            <p><b>Página Parlamentar:</b> {item.UrlPaginaParlamentar}</p>
                        </li>
                    ))}
                </ul>

                <ul>
                    {servico.map((item) => (
                        <li key={item.CodigoParlamentar}>
                            <p><b>Nome do Serviço:</b> {item.NomeServico}</p>
                            <p><b>Descrição:</b> {item.DescricaoServico}</p>
                            <p><b>URL:</b> {item.UrlServico}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}