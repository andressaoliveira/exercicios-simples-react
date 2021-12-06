import React from "react";

export default class Senadores extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            senadores : []
        };
    }

    componentDidMount() {
        fetch('https://legis.senado.leg.br/dadosabertos/senador/13')
        .then(res => res.json())
        .then(res => {
            this.setState({
                senadores: res
            });
        })
        .catch((err) =>{
            console.error("Ocorreu um erro " + err);
        });
    }

    render() {
        const {senadores} = this.state;
        return (
            <div>
                <h1>Senador</h1>

                <ul>
                    {senadores.map((item) =>
                    <li key={item.senad_id} >
                        <h4><b>IdentificacaoParlamentar: </b></h4>
                        <p>Senador: {item.NomeParlamentar} - Codigo: {item.CodigoParlamentar}</p>

                        <img src="http://www.senado.leg.br/senadores/img/fotos-oficiais/senador13.jpg"/>
                        <a href="http://www25.senado.leg.br/web/senadores/senador/-/perfil/13" target="_blank">Página</a>

                        <h4><b>DadosBasicosParlamentar: </b></h4>
                        <p>Falecimento: </p>
                        <p>Nascimento: {item.DataNascimento}</p>
                        <p>Naturalidade: {item.Naturalidade} - {item.UfNaturalidade}</p>

                        <h4><b>OutrasInformacoes: </b></h4>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/apartes?v=5" target="_blank">Link</a>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/cargos?v=5" target="_blank">Link</a>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/discursos?v=5" target="_blank">Link</a>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/filiacoes?v=5" target="_blank">Link</a>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/historicoAcademico/13/historicoAcademico?v=1" target="_blank">Link</a>
                        
                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/licencas?v=5" target="_blank">Link</a>
                        
                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/liderancas?v=5" target="_blank">Link</a>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/mandatos?v=5" target="_blank">Link</a>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/autorias?v=7" target="_blank">Link</a>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/relatorias?v=6" target="_blank">Link</a>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/comissoes?v=5" target="_blank">Link</a>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/profissao/13/profissoes?v=1" target="_blank">Link</a>

                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href="http://legis.senado.leg.br/dadosabertos/senador/13/votacoes?v=7" target="_blank">Link</a>
                    </li>
                    )}
                </ul>

            </div>
        )
    }
}