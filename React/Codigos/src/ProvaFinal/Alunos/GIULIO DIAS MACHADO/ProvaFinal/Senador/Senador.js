import React from "react";
import api from "../service/api";
import "./Senador.scss";

export default class Senador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senador: [],
    };
  }

  componentDidMount() {
    api
      .get("/15")
      .then((resp) =>
        this.setState({ senador: resp.data.DetalheParlamentar.Parlamentar })
      );
  }

  dadosSenador() {
    const { senador } = this.state;

    if (!senador || senador.length === 0) return <div>Carregando...</div>;

    const idParlamentar = senador.IdentificacaoParlamentar;
    const dadosBsicos = senador.DadosBasicosParlamentar;
    const outros = senador.OutrasInformacoes;

    return (
      <div className="senador">
        <h2>IdentificacaoParlamentar:</h2>

        <p>
          {idParlamentar.CodigoParlamentar} - {idParlamentar.NomeParlamentar}
        </p>

        <p>
          <strong>Nome: </strong> {idParlamentar.NomeCompletoParlamentar}
        </p>

        <p>
          <strong>Sexo: </strong> {idParlamentar.SexoParlamentar}
        </p>

        <p>
          <strong>Email: </strong> {idParlamentar.EmailParlamentar}
        </p>

        <img className="imagem" src={idParlamentar.UrlFotoParlamentar} />

        <br />
        <br />
        <a href={idParlamentar.UrlPaginaParlamentar}>Ver mais</a>

        <br />
        <br />
        <br />
        <br />
        <br />

        <h2>DadosBasicosParlamentar:</h2>

        <p>
          <strong>Data de Nascimento: </strong>
          {dadosBsicos.DataNascimento}
        </p>

        <p>
          <strong>Data de Falecimento: </strong>
          {dadosBsicos.DataFalecimento}
        </p>

        <p>
          <strong>Naturalidade: </strong>
          {dadosBsicos.Naturalidade}
        </p>

        <p>
          <strong>UF de Naturalidade: </strong>
          {dadosBsicos.UfNaturalidade}
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />

        <h2>OutrasInformacoes:</h2>

        {outros.Servico.map((item, index) => (
          <div
            key={index}
            style={{
              border: "solid 1px #000000",
              padding: "0px 0px 25px 0px",
              margin: "20px",
            }}
          >
            <p>
              <strong>Nome Serviço: </strong> {item.NomeServico}
            </p>

            {item.DescricaoServico && (
              <p>
                <strong>Descrição: </strong> {item.DescricaoServico}
              </p>
            )}

            <a href={item.UrlServico}>Mais Informações</a>
          </div>
        ))}
      </div>
    );
  }

  render() {
    let dadosSenadorHtml = this.dadosSenador();

    return (
      <div className="body">
        <h1>Senador</h1>
        <br />

        {dadosSenadorHtml}
      </div>
    );
  }
}
