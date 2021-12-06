import React from 'react';
import './FILIACOES.scss'

export default class Filiacoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filiacoes: [],
            filiacoesDados: []
        };
    }

    componentDidMount() {
        fetch('https://legis.senado.leg.br/dadosabertos/senador/3/filiacoes')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    filiacoes: res.results,
                    filiacoesDados: res.results
                });
            });
    }

    render() {
        const { filiacoes } = this.state;
        return (
            <div className='boxpesquisa'>
   
                <h1>Filiações:</h1>

                <ul>
                    {filiacoes.map((item) => (
                        <li key={item.people}>
                            <p><b>Codigo Partido:</b> {item.CodigoPartido}</p>
                            <p><b>Sigla Partido:</b> {item.SiglaPartido}</p>
                            <p><b>Gênero:</b> {item.NomePartido}</p>
                            <p><b>Data da Filiacao:</b> {item.DataFiliacao}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}