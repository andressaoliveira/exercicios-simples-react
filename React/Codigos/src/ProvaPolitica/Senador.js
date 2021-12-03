import React, { useState, useEffect } from 'react';
import api from "./api"

export default function Senador() {

    const [senador, setSenador] = useState(null);

    useEffect(() => {
        api.get('/9')
            .then((response) => setSenador(response.data.DetalheParlamentar))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const obterTela = () => {

        if (senador === null)
            return ''

        const {
            DataFalecimento,
            DataNascimento,
            Naturalidade,
            UfNaturalidade
        } = senador.Parlamentar.DadosBasicosParlamentar;

        const {
            CodigoParlamentar,
            NomeCompletoParlamentar,
            NomeParlamentar,
            UrlFotoParlamentar,
            UrlPaginaParlamentar
        } = senador.Parlamentar.IdentificacaoParlamentar;

        const { Servico } = senador.Parlamentar.OutrasInformacoes;

        return (
            <div>
                Dados Basicos Parlamentar:
                {DataFalecimento} - {DataNascimento}- {Naturalidade} - {UfNaturalidade}
                IdentificacaoParlamentar:
                {CodigoParlamentar} - {NomeCompletoParlamentar} - {NomeParlamentar} - {UrlFotoParlamentar} - {UrlPaginaParlamentar}
                OutrasInformacoes:
                <div className="servicos">
                    {
                        Servico.map((item, index) => (
                            <div key={index} className="servico">
                                <p>{item.NomeServico}</p>
                                <p>{item.DescricaoServico}</p>
                                <p>{item.UrlServico}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="Senador">

            {obterTela()}
        </div>
    )
}