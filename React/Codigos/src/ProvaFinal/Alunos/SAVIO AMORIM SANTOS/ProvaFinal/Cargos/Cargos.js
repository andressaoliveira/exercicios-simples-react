import React from 'react';
import api from '../../service/api';

export default class apiSenadorCargo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cargos: []
        };
    }

    componentDidMount() {
        api.get("/39/cargos.json")
            .then((response) => this.setCargos(response.data))
    }

    setCargos(data) {
        this.setState({
            cargos: data
        })
    }

    render() {
        // PROFESSORA, O RETORNO DA API ERA UM XML, TIVE QUE INSERIR UM .JSON AO FINAL DA CHAMADA DA API PARA SER IDENTIFICADO COMO JSON
        // POR ALGUM MOTIVO NÃO ESTÁ CONSEGUINDO IDENTIFICAR AS CHAVES DO JSON
        const {cargos} = this.state;
        return (
            <div id="body_container">
                <h1>Cargos</h1>
                <ul>
                    {
                        cargos.CargoParlamentar.Parlamentar.Cargos.Cargo.map((element, index) => (
                            <li>
                                <p><b>Código Cargo:</b> {element.IdentificacaoComissao.CodigoComissao}</p>
                                <p><b>Descrição Cargo:</b> {element.IdentificacaoComissao.SiglaComissao}</p>
                                <p><b>Data Inicio:</b> {element.IdentificacaoComissao.NomeComissao}</p>
                                <p><b>Data Fim:</b> {element.IdentificacaoComissao.SiglaCasaComissao}</p>
                                <p><b>Data Fim:</b> {element.CodigoCargo}</p>
                                <p><b>Data Fim:</b> {element.Descricao}</p>
                                <p><b>Data Fim:</b> {element.DataInicio}</p>
                                <p><b>Data Fim:</b> {element.DataFim}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}