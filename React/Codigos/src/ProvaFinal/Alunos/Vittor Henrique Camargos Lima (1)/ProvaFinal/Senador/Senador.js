import React, { useState } from 'react';
import api from '../Service/api';

export default function Senador() {
    const[senadorIdentificacaoParlamentar, setsenadorIdentificacaoParlamentar] = useState([]);
    const[senadorDadosBasicosParlamentar, setsenadorDadosBasicosParlamentar] = useState([]);

    const data = api.get()
    .then((response => {
        setsenadorIdentificacaoParlamentar(response.data.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar);
        setsenadorDadosBasicosParlamentar(response.data.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar)
    }))
    .catch((err) => {
        console.log("Deu ruim!", err);}
    )

    return(        
            <div>
                <h1>Senador</h1>
                <ul>               
                        <li >   
                        <strong>Identificação Parlamentar</strong>           
                            <p>{senadorIdentificacaoParlamentar.CodigoParlamentar} - {senadorIdentificacaoParlamentar.NomeParlamentar}</p>    
                            <p>Nome: {senadorIdentificacaoParlamentar.NomeCompletoParlamentar}</p>     
                            <p><img className={'img'} src={senadorIdentificacaoParlamentar.UrlFotoParlamentar} alt={senadorIdentificacaoParlamentar.NomeParlamentar} /></p>  
                            <p><a href={senadorIdentificacaoParlamentar.UrlPaginaParlamentar}>Página</a></p>    
                        <strong>Dados básicos Parlamentar</strong>       
                            <p>Data de Nascimento: {senadorDadosBasicosParlamentar.DataNascimento}</p>        
                            <p>Naturalidade: {senadorDadosBasicosParlamentar.Naturalidade}</p> 
                            <p>UF: {senadorDadosBasicosParlamentar.UfNaturalidade}</p>                             
                        </li>                   
                </ul>
            </div>     
    )
}