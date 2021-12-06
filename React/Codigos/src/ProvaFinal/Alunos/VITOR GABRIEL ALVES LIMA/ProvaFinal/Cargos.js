import React from "react";

import api from "./api";

export default class Cargos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senador: [],
    };
  }

  componentDidMount() {
    api
      .get("/senador/46/cargos")
      .then((response) =>
        this.setSenador(response.data.CargoParlamentar.Parlamentar)
      );
  }

  setSenador(response) {
    this.setState({
      senador: response,
    });
  }
  render() {
    const { senador } = this.state;
    return (
      <div>
        <h1>Cargos</h1>
        <p>Codigo:{senador.Codigo}</p>
        <p>Nome:{senador.Nome}</p>
        {senador?.Cargos?.Cargo.map((item) => (
          <div>
            <h2>Identificacao Comissao</h2>
            <p>CodigoComissao:{item.IdentificacaoComissao.CodigoComissao}</p>
            <p>Sigla Comissao:{item.IdentificacaoComissao.SiglaComissao}</p>
            <p>Nome Comissao:{item.IdentificacaoComissao.NomeComissao}</p>
            <p>
              Sigla Casa Comissao:{item.IdentificacaoComissao.SiglaCasaComissao}
            </p>
            <p>Codigo Cargo:{item.CodigoCargo}</p>
            <p>Descricao Cargo:{item.DescricaoCargo}</p>
            <p>Data Inicio:{item.DataInicio}</p>
            <p>Data Fim:{item.DataFim}</p>
          </div>
        ))}
      </div>
    );
  }
}
