import React, { useState, useEffect } from 'react';
import api from "./api"

export default function Mandatos() {

    const [mandatos, setMandatos] = useState(null);

    useEffect(() => {
        api.get('/9/mandatos')
            .then((response) => setMandatos(response.data.MandatoParlamentar))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const obterTela = () => {
        if (mandatos === null)
            return ''

        const { Mandato } = mandatos.Parlamentar.Mandatos;

        return (
            <div>
                <div className="mandatos">
                    {
                        Mandato.map((item, index) => (
                            <div key={index} className="servico">
                                <p>{item.DescricaoParticipacao}</p>
                                <p>{item.CodigoMandato}</p>
                                <p>{item.UfParlamentar}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="Mandatos">

            {obterTela()}
        </div>
    )
}