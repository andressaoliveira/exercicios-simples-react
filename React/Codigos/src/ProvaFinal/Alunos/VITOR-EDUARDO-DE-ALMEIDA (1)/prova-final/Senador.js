import React, { useState, useEffect } from 'react';
import api from "./api";


export default function Senador() {
    const [senador, Senador] = useState();
  
    useEffect(() => {
      api
        .get("senador/45")
        .then((response) => Senador(response.data.DetalheParlamentar.Parlamentar))
        .catch((err) => {console.error("Ocorreu um erro" + err);
        });
    }, 
    []);
    
    return (
    <div className="App">

       <h2>Senador</h2>
       <h3>Identificação Parlamentar:</h3>
       <p>{senador?.IdentificacaoParlamentar.CodigoParlamentar} - {senador?.IdentificacaoParlamentar.NomeParlamentar}</p>
       <p>Nome: {senador?.IdentificacaoParlamentar.NomeCompletoParlamentar}</p>
       <img src={senador?.IdentificacaoParlamentar.UrlFotoParlamentar}/>
       <p><a href={senador?.IdentificacaoParlamentar.UrlPaginaParlamentar} target="_blank">Pagina</a></p><br/>
       
       <h3>Dados Basicos Parlamentar:</h3>
       <p>Falecimento :{senador?.DadosBasicosParlamentar.DataFalecimento}</p>
       <p>Nascimento: {senador?.DadosBasicosParlamentar.DataNascimento}</p>
       <p>Naturalidade: {senador?.DadosBasicosParlamentar.Naturalidade} - {senador?.DadosBasicosParlamentar.UfNaturalidade}</p><br/>

       <h3>Outras Informações:</h3>
       {senador?.OutrasInformacoes.Servico.map((data) =>
           <>
               <p>Serviço: {data.NomeServico}</p>
               <p>Descrição: {data.DescricaoServico}</p>
               <p><a href={data.UrlServico} target="_blank">Link</a></p>
               <br/>
           </>
      )}
    </div>
  );
}
