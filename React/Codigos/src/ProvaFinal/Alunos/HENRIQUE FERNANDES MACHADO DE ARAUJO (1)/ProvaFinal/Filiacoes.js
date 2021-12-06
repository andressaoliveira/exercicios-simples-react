import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, Button } from "react-bootstrap";
import api from "./api";


export default function Filiacoes() {
    const [filiacao, setFiliacao] = useState();
  
    useEffect(() => {
      api
        .get("senador/18/filiacoes")
        .then((response) => setFiliacao(response.data.FiliacaoParlamentar.Parlamentar.Filiacoes.Filiacao))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
    return (
      <div className="App" style={{marginLeft: "20%"}}>
          <h2>Filiações</h2>
          {filiacao?.map((data) =>
            <>
                <p>Filiação: {data.DataFiliacao}</p>
                <p>Desfiliação: {data.DataDesfiliacao}</p>
                <p>Partido: {data.Partido.CodigoPartido} - {data.Partido.NomePartido} - {data.Partido.SiglaPartido}</p>
                <br/>
            </>
        )}
      </div>
    );
  }