import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, Button } from "react-bootstrap";
import api from "./api";


export default function Senador() {
    const [senador, setSenador] = useState();
  
    useEffect(() => {
      api
        .get("senador/18")
        .then((response) => setSenador(response.data.DetalheParlamentar.Parlamentar))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
    return (
      <div className="App" style={{marginLeft: "20%"}}>
        <h2>Senador</h2>
        <h3>IdentificacaoParlamentar:</h3>
        <p>{senador?.IdentificacaoParlamentar.CodigoParlamentar} - {senador?.IdentificacaoParlamentar.NomeParlamentar}</p>
        <p>{senador?.IdentificacaoParlamentar.NomeCompletoParlamentar}</p>
        <img src={senador?.IdentificacaoParlamentar.UrlFotoParlamentar}/>
        <p><a href={senador?.IdentificacaoParlamentar.UrlPaginaParlamentar} target="_blank">pagina</a></p>
        <br/>
        <br/>

        <h3>Dados Basicos Parlamentar:</h3>
        <p>Nascimento: {senador?.DadosBasicosParlamentar.DataNascimento}</p>
        <p>Naturalidade: {senador?.DadosBasicosParlamentar.Naturalidade} - {senador?.DadosBasicosParlamentar.UfNaturalidade}</p>
        <br/>
        <br/>

        <h3>Outras Informações:</h3>
        {senador?.OutrasInformacoes.Servico.map((data) =>
            <>
                <p>Serivço: {data.NomeServico}</p>
                <p>Descricao: {data.DescricaoServico}</p>
                <p><a href={data.UrlServico} target="_blank">Link</a></p>
                <br/>
            </>
        )}

      </div>
    );
  }
