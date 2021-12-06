import React from 'react';
import api from '../../service/api';

export default class apiSenador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            senador: [],
        };
    }

    componentDidMount() {
        api.get("/39.json")
            .then((response) => this.setSenador(response.data))
    }

    setSenador(data) {
        this.setState({
            senador: data,
        })
    }

    render() {
        // PROFESSORA, O RETORNO DA API ERA UM XML, TIVE QUE INSERIR UM .JSON AO FINAL DA CHAMADA DA API PARA SER IDENTIFICADO COMO JSON
        // POR ALGUM MOTIVO NÃO ESTÁ CONSEGUINDO IDENTIFICAR AS CHAVES DO JSON
        const {senador} = this.state;
        return (
            <div id="body_container">       
                <h1>Senador</h1>
                <h2>Identificação do Parlamentar</h2>
                <p><b>Codigo:</b> {senador.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.CodigoParlamentar}</p>
                <p><b>Nome:</b> {senador.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.NomeParlamentar}</p>
                <p><b>Nome Completo:</b> {senador.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.NomeCompletoParlamentar}</p>
                <p><b>Sexo:</b> {senador.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.SexoParlamentar}</p>
                <img src={senador.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar} />
                <a href={senador.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.UrlPaginaParlamentar}>Link</a>
                <p><b>Email:</b> {senador.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.EmailParlamentar}</p>

                <h2>Dados Básicos do Parlamentar</h2>
                <p><b>Data Nascimento:</b> {senador.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar.DataNascimento}</p>
                <p><b>Data Falecimento:</b> {senador.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar.DataFalecimento}</p>
                <p><b>Naturalidade:</b> {senador.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar.Naturalidade}</p>
                <p><b>UF Naturalidade:</b> {senador.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar.UfNaturalidade}</p>

                <div>
                    <h2>Serviços</h2>
                    <ul>
                        {
                            senador.DetalheParlamentar.Parlamentar.OutrasInformacoes.Servico.map((element, index) => (
                                <li>
                                    <p><b>Nome Serviço:</b> {element.NomeServico}</p>
                                    <p><b>Descrição Serviço:</b> {element.DescricaoServico}</p>
                                    <a href={element.UrlServico}>Link</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}