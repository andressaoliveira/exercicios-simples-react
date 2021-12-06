import React, { useState, useContext, useEffect, Link } from 'react';
import api from '../api'

export default function Senador({ ...props }) {
    const[IdentificacaoParlamentar, setIdentificacaoParlamentar] = useState([])
    const[DadosBasicosParlamentar, setDadosBasicosParlamentar] = useState([])

    const OutrasInformacoes = props.OutrasInformacoes
    const listItems = OutrasInformacoes.map((x) =>
        <div style={{marginTop: 30}}>
            <p>Serviço: {x.DescricaoServico}</p>
            <p>Descrição: {x.NomeServico}</p>
            <a href={x.UrlServico}>Link</a>
        </div>
    );

    const data = api.get()
        .then((response => {
            setIdentificacaoParlamentar(response.data.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar)
            setDadosBasicosParlamentar(response.data.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar)
        }))
        .catch((err) => {
            console.log("Erro", err)}
    )
    return(
        <div style={{marginLeft: '30px'}}>
            <h1>Senador</h1>
            <b>Identificação Parlamentar:</b>
            <p>{IdentificacaoParlamentar.CodigoParlamentar} - {IdentificacaoParlamentar.NomeParlamentar}</p>
            <p>Nome: {IdentificacaoParlamentar.NomeCompletoParlamentar}</p>
            <br></br>
            <a href={IdentificacaoParlamentar.UrlPaginaParlamentar}>Página</a>
            <br></br>
            <b>Dados Básicos:</b>
            <p>Data Nascimento: {DadosBasicosParlamentar.DataNascimento}</p>
            <br></br>
            <b>Outras Informações:</b>
            {listItems}
        </div>
    )
}
