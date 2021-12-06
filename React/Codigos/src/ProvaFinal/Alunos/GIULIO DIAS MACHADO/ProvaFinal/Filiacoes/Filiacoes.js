import React from "react";
import api from "../service/api";
import "./Filiacoes.scss";

export default class Filiacoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filiacao: [],
    };
  }

  componentDidMount() {
    api
      .get("/15/filiacoes")
      .then((resp) =>
        this.setState({ filiacao: resp.data.FiliacaoParlamentar.Parlamentar })
      );
  }

  dadosFiliacao() {
    const { filiacao } = this.state;

    if (!filiacao || filiacao.length === 0) return <div>Carregando...</div>;

    const filiacoes = filiacao.Filiacoes.Filiacao;

    return (
      <div className="filiacoes">
        {filiacoes.map((item, index) => (
          <div
            key={index}
            style={{
              border: "solid 1px #000000",
              margin: "15px",
              padding: "20px",
            }}
          >
            <p>
              <strong>Filiação: </strong> {item.DataFiliacao}
            </p>

            {item.DataDesfiliacao && (
              <p>
                <strong>Desfiliação: </strong> {item.DataDesfiliacao}
              </p>
            )}

            <p>
              <strong>Partido: </strong> {item.Partido.CodigoPartido} -{" "}
              {item.Partido.SiglaPartido} -&gt; {item.Partido.NomePartido}
            </p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    let dadosFiliacaoHtml = this.dadosFiliacao();

    return (
      <div className="body">
        <h1>Filiações</h1>
        <br />

        {dadosFiliacaoHtml}
      </div>
    );
  }
}
