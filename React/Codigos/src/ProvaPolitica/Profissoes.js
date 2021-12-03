import React, { useState, useEffect } from 'react';
import api from "./api"

export default function Profissoes() {

    const [profissoes, setProfissoes] = useState(null);

    useEffect(() => {
        api.get('/9/profissao')
            .then((response) => setProfissoes(response.data.ProfissaoParlamentar ))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const obterTela = () => {
        if (profissoes === null)
            return ''

        const { Profissao } = profissoes.Parlamentar.Profissoes;

        return (
            <div>
                <div className="Profissoes">
                    {
                        Profissao.map((item, index) => (
                            <div key={index} className="servico">
                                <p>{item.NomeProfissao}</p>
                                <p>{item.IndicadorAtividadePrincipal}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="Profissoes">

            {obterTela()}
        </div>
    )
}