import React from "react";

import api from "./api";

export default class Senador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senador: [],
    };
  }

  componentDidMount() {
    api
      .get("/senador/46")
      .then((response) =>
        this.setSenador(response.data.DetalheParlamentar.Parlamentar)
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
        <h1>Senador</h1>
        <h2>Identificação Parlamentar</h2>
        <p>
          Codigo Parlamentar:
          {senador?.IdentificacaoParlamentar?.CodigoParlamentar}
        </p>
        <p>
          Nome Parlamentar:
          {senador?.IdentificacaoParlamentar?.NomeParlamentar}
        </p>
        <p>
          Sexo Parlamentar:
          {senador?.IdentificacaoParlamentar?.SexoParlamentar}
        </p>
        <img
          src={senador?.IdentificacaoParlamentar?.UrlFotoParlamentar}
          alt="Foto do Parlamentar"
        ></img>
        <p>
          <a href={senador?.IdentificacaoParlamentar?.UrlPaginaParlamentar}>
            Url Pagina Parlamentar
          </a>
        </p>
        <p>
          Email Parlamentar:
          {senador?.IdentificacaoParlamentar?.EmailParlamentar}
        </p>
        <h2>Dados Basicos Parlamentar</h2>
        <p>
          Data Nascimento:{senador?.DadosBasicosParlamentar?.DataNascimento}
        </p>
        <p>Naturalidade:{senador?.DadosBasicosParlamentar?.Naturalidade}</p>
        <p>
          Uf Naturalidade:{senador?.DadosBasicosParlamentar?.UfNaturalidade}
        </p>
        <h2>Outras Informacoes</h2>
        {senador?.OutrasInformacoes?.Servico.map((item) => (
          <p>
            Nome Serviço:{item.NomeServico}
            <p>Descrição Serviço:{item.DescricaoServico}</p>
            <p>
              <a href={item.UrlServico}>Url Servico</a>
            </p>
          </p>
        ))}
      </div>
    );
  }
}
