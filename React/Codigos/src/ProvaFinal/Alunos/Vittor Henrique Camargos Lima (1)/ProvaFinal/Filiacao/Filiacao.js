import React , { useState } from 'react';
import api from '../Service/api';

export default function Filiacao() {
    const[filiacao, setFiliacao] = useState([]);

     api.get("/filiacoes")
    .then((response => {
        setFiliacao(response.data.FiliacaoParlamentar.Parlamentar.Filiacoes);
    }))
    .catch((err) => {
        console.log("Deu ruim!", err);}
    )

    return(        
            <div>
                <h1>Filiação</h1>
                <ul>               
                        <li >   
                            <p>Filiação: {filiacao.DataFiliacao}</p>   
                            <p>Desfiliação: {filiacao.DataDesfiliacao}</p>     
                            {/* <p>Partido: {filiacao.Partido.CodigoPartido + "-" + filiacao.Partido.NomePartido + "-" + filiacao.Partido.SiglaPartido}</p>  */}
                        </li>                   
                </ul>
            </div>     
    )
}