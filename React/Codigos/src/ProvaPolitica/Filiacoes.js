import React, { useState, useEffect } from 'react';
import api from "./api"

export default function Filiacoes() {

    const [filiacoes, setFiliacoes] = useState(null);

    useEffect(() => {
        api.get('/9/filiacoes')
            .then((response) => setFiliacoes(response.data.FiliacaoParlamentar))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const obterTela = () => {
        if (filiacoes === null)
            return ''

        const { Filiacao } = filiacoes.Parlamentar.Filiacoes;

        return (
            <div>
                <div className="filiacoes">
                    {
                        Filiacao.map((item, index) => (
                            <div key={index} className="servico">
                                <p>{item.DataFiliacao}</p>
                                <p>{item.DataDesfiliacao}</p>
                                <p>{item.Partido.NomePartido}</p>
                                <p>{item.Partido.CodigoPartido}</p>
                                <p>{item.Partido.SiglaPartido}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="Filiacoes">

            {obterTela()}
        </div>
    )
}