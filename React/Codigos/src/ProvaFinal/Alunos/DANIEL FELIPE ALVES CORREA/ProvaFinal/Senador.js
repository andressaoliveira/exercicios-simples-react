import React, { useState, useEffect } from 'react';
import api from "./services/api";

export default function Senador() {
    const [senador, setSenador] = useState();

    useEffect(() => {
        api
            .get("/10")
            .then((response) => setSenador(response.data.DetalheParlamentar.Parlamentar))
            .catch((err) => { console.error("ocorreu um erro" + err) })
    }, []);

    return (
        <div>
            <h5>Senador</h5>
            <div className="infos">
                <p><b>Dados do Senador</b></p>
                <p>{senador?.IdentificacaoParlamentar.CodigoParlamentar} - {senador?.IdentificacaoParlamentar.NomeParlamentar}</p>
                <img className="foto" src={senador?.IdentificacaoParlamentar.UrlFotoParlamentar} alt={senador?.IdentificacaoParlamentar.UrlFotoParlamentar} />
                <p>Código público na leg atual: {senador?.IdentificacaoParlamentar.CodigoPublicoNaLegAtual}</p>
                <p>Nome Completo: {senador?.IdentificacaoParlamentar.NomeCompletoParlamentar}</p>
                <p>Data de Nascimento: {senador?.DadosBasicosParlamentar.DataNascimento}</p>
                <p>Sexo: {senador?.IdentificacaoParlamentar.SexoParlamentar}</p>
                <p>UF: {senador?.IdentificacaoParlamentar.UfParlamentar}</p>
                <p>Partido: {senador?.IdentificacaoParlamentar.SiglaPartidoParlamentar}</p>
                <p>Email: {senador?.IdentificacaoParlamentar.EmailParlamentar}</p>
                <a href={senador?.IdentificacaoParlamentar.UrlPaginaParlamentar}>Página</a>
            </div>
            <div className="outrasInformacoes">
                <p><b>Serviços</b></p>
                {
                    senador?.OutrasInformacoes.Servico.map((servico, key) => (
                        <div key={key} className="servico">
                            <p>Nome: {servico.NomeServico}</p>
                            {servico.DescricaoServico?<p>Descrição: {servico.DescricaoServico}</p>: null}
                            <a href={servico.UrlServico}>Url do servico</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}