import React, { useState, useEffect } from 'react';
import api from "./api"

export default function Cargos() {

    const [cargos, setCargos] = useState(null);

    useEffect(() => {
        api.get('/9/cargos')
            .then((response) => setCargos(response.data.CargoParlamentar))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const obterTela = () => {
        if (cargos === null)
            return ''

        const { Cargo } = cargos.Parlamentar.Cargos;

        return (
            <div>
                <div className="cargos">
                    {
                        Cargo.map((item, index) => (
                            <div key={index} className="servico">
                                <p>{item.CodigoCargo}</p>
                                <p>{item.DataFim}</p>
                                <p>{item.DataInicio}</p>
                                <p>{item.DescricaoCargo}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="Cargos">

            {obterTela()}
        </div>
    )
}