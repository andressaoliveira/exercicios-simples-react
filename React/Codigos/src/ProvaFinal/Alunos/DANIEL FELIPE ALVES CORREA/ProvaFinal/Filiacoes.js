import React, { useState, useEffect } from 'react';
import api from "./services/api";

export default function Filiacoes() {
    const [filiacoes, setFiliacoes] = useState([]);

    useEffect(() => {
        api
            .get("/10/filiacoes")
            .then((response) => setFiliacoes(response.data.FiliacaoParlamentar.Parlamentar.Filiacoes.Filiacao))
            .catch((err) => { console.error("ocorreu um erro" + err) })
    }, []);
    return (
        <div>
            <h5>Filiações</h5>
            {
                filiacoes.map((filiacao, key) => (
                    <div key={key} className="infos">
                        <p>Filiação: {filiacao.DataFiliacao}</p>
                        {filiacao.DataDesfiliacao?<p>Desfiliação: {filiacao.DataDesfiliacao}</p>: null}
                        <p>Partido: {filiacao.Partido.CodigoPartido} - {filiacao.Partido.NomePartido} - {filiacao.Partido.SiglaPartido}</p>
                    </div>
                ))
            }
        </div>
    )
}