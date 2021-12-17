import React, { useState, useContext, useEffect, Link } from 'react';
import api from '../Services/api'

export default function Senador({ ...props }) {
    const Identificacao = props.Identificacao
    const DadosBasicos = props.DadosBasicos
    const OutrasInformacoes = props.OutrasInformacoes
    
    const itens = OutrasInformacoes.map((x) =>
        <div style={{marginTop: 30}}>
            <p>Serviço: {x.DescricaoServico}</p>
            <p>Descrição: {x.NomeServico}</p>
            <a href={x.UrlServico}>URL Serviço</a>
        </div>
    );
    return(
        <div style={{marginLeft: '20px'}}>
            <div style={{borderTop: '1px solid black'}}>
                <h1>Senador</h1>
                <b>Identificação:</b>
                <p>{Identificacao.NomeParlamentar} - {Identificacao.CodigoParlamentar}</p>
                <p>Nome: {Identificacao.NomeCompletoParlamentar}</p>
                <img src={Identificacao.UrlFotoParlamentar} style={{width: 150, height: 150}}/>
                <a href={Identificacao.UrlPaginaParlamentar}>Página</a>
            </div>

            <div style={{borderTop: '1px solid black'}}>
                <b>Dados Básicos:</b>
                <p>Nascimento: {DadosBasicos.DataNascimento}</p>
                <p>Falecimento: {DadosBasicos.DataFalecimento}</p>
                <p>Naturalidade: {DadosBasicos.Naturalidade + " - " + DadosBasicos.UfNaturalidade}</p>
            </div>
            
            <div style={{borderTop: '1px solid black'}}>
                <b>Outras Informações:</b>
                {itens}
            </div>
        </div>
    )
}
