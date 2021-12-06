import React from 'react';
import './SENADOR.scss'

export default class Senador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Senador: [],
            senadorDados: []
        };
    }

    componentDidMount() {
        fetch('https://legis.senado.leg.br/dadosabertos/senador/03')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    senador: res.results,
                    senadorDados: res.results
                });
            });
    }

        obterServico(Servico) {
        return Servico.map((Servico, index) => (
            <label key={index}> {Servico};</label>
        ));
    }


    render() {
        const { senador } = this.state;
        return (
            <div className='boxpesquisa'>

                <h1>Senador:</h1>
                <ul>
                    {senador.map((item) => (

                        <li key={item.senador}>
                            <p><b>Nome:</b> {item.NomeParlamentar}</p>
                            <p><b>Nome completo:</b> {item.NomeCompletoParlamentar}</p>
                            <p><b>Gênero:</b> {item.SexoParlamentar}</p>
                            <p><b>Email:</b> {item.EmailParlamentar}</p>
                            <p><b>Sigla do Partido:</b> {item.SiglaPartidoParlamentar}</p>
                            <p><b>Data de Nascimento:</b> {item.DataNascimento}</p>
                            <p><b>Naturalidade:</b> {item.Naturalidade}</p>
                            <p><b>Estado:</b> {item.UfNaturalidade}</p>
                            <p><b>Serviços:</b> {this.obterServico(item.Servico)}</p>

                        </li>
                        
                       
                    
                    ))}
                </ul>
            </div>
        );
    }
}