import React from "react";

export default class Senador extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dadosSenador: []
        };
    }

    componentDidMount() {
        fetch('https://legis.senado.leg.br/dadosabertos/senador/27')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    dadosSenador: res
                });
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }
    render() {

        const { dadosSenador } = this.state;

        return (
            <div className="senador">
               <h2>Senador</h2>
               {dadosSenador.map((item) => (
                <p><b>Episódio:</b> {item.Parlamentar.IdentificacaoParlamentar.CodigoParlamentar}</p>
                    ))}
            </div>
        )
    }
}