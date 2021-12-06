import React, { useState } from 'react';
import api from './api';

export default function Senador() {
    const [IdPar, setIdPar] = useState([]);
    const [DbPar, setDbPar] = useState([]);
    const [OutrasInfo, setOutrasInfo] = useState([]); 
    const data = api.get()
        .then((response => {
            setIdPar(response.data.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar);
            setDbPar(response.data.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar)
            setOutrasInfo(response.data.DetalheParlamentar.Parlamentar.OutrasInformacoes.Servico)
        }))
        .catch((err) => {console.log("Erro! Tente novamente.", err);})
    return (
    <div style={{textAlign: 'center'}, {marginLeft: '50px'}}>
    <h1>Senador</h1>
    <ul>
     <li >
         Identificação Parlamentar
         <p>{IdPar.CodigoParlamentar} - {IdPar.NomeParlamentar}</p>
         <p>Nome: {IdPar.NomeCompletoParlamentar}</p>
         <p><img className={'img'} src={IdPar.UrlFotoParlamentar} alt={IdPar.NomeParlamentar} /></p>
         <p><a href={IdPar.UrlPaginaParlamentar}>Página</a></p>
         Dados básicos Parlamentar
         <p>Data de Nascimento: {DbPar.DataNascimento}</p>
         <p>Naturalidade: {DbPar.Naturalidade}</p>
         <p>Unidades federativa: {DbPar.UfNaturalidade}</p>
         Outras Informações
         <p>Nome serviço: {OutrasInfo.NomeServico}</p>
     </li>
     </ul>
     </div>
    )
}