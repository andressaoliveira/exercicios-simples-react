import React, { useState, useEffect } from 'react';
import api from "./api";

export default function Filiacoes() {
  const [filiacao, setFiliacao] = useState();
  const [senador, Senador] = useState();

  useEffect(() => {
    api
      .get("senador/45/filiacoes")
      .then((response) => setFiliacao(response.data.FiliacaoParlamentar.Parlamentar.Filiacoes.Filiacao))
      .catch((err) => {console.error("Ocorreu um erro" + err);
    });
  }, 
  []);

    api
      .get("senador/45")
      .then((response) => Senador(response.data.DetalheParlamentar.Parlamentar))
      .catch((err) => {console.error("Ocorreu um erro" + err);
    });

  return (
    <div className="App">
        <h2>Filiações</h2>

        {filiacao?.map((data) =>
          <>
              <img src={senador?.IdentificacaoParlamentar.UrlFotoParlamentar}/><br/>
              <b>{senador?.IdentificacaoParlamentar.NomeCompletoParlamentar}</b><br/>
              <p>Filiação: {data.DataFiliacao}</p>
              <p>Desfiliação: {data.DataDesfiliacao}</p>
              <p>Partido: {data.Partido.CodigoPartido} - {data.Partido.NomePartido} - {data.Partido.SiglaPartido}</p>
              <br/>
          </>
      )}
    </div>
  );
}