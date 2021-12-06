import React from "react";

export default class Filiacao extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Parlamentar: []
        };
    }

    componentDidMount() {
        fetch('https://legis.senado.leg.br/dadosabertos/senador/27/filiacoes')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    Parlamentar: res
                });
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }
    render() {

        const {Parlamentar} = this.state;

        return (
            <div className="filiacao">
               <h2>Filiação</h2>
               {Parlamentar.map((item) => (
                <p>{item.Codigo}</p>
                    ))}
            </div>
        )
    }
}