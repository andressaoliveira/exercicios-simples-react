import React, { useState, useEffect } from 'react';
import { Row, Col, Link } from 'react-bootstrap';

import api from "./api";


export default function Senador() {
    const [senador, setSenador] = useState();

    useEffect(() => {
        api.get("")
            .then((response) => setSenador(response.data.DetalheParlamentar.Parlamentar))
            .catch((error) => console.error("Something went wrong :( \n Error:" + error));
    }, []);

    return (
        <Row>
            <h2 style={{ marginBottom: "30px" }}>Senador</h2>
            <Col xs={4} md={4} sm={12}>
                <img className="senador-img" src={senador?.IdentificacaoParlamentar.UrlFotoParlamentar} alt="Senador número 44" />
            </Col>
            <Col xs={8} md={8} sm={12}>
                <h4>IdentificacaoParlamentar</h4>
                <p>
                    {senador?.IdentificacaoParlamentar.CodigoParlamentar} - {senador?.IdentificacaoParlamentar.NomeParlamentar}
                    <br />
                    {senador?.IdentificacaoParlamentar.NomeCompletoParlamentar}
                </p>
                <a rel="noreferrer" href={senador?.IdentificacaoParlamentar.UrlPaginaParlamentar} target="_blank">pagina</a>
            </Col>
            <Col style={{ marginTop: "20px" }} xs={12} md={12} sm={12}>
                <h3>Dados Basicos Parlamentar</h3>
                <p>
                    Nascimento: {senador?.DadosBasicosParlamentar.DataNascimento}
                    <br />
                    Naturalidade: {senador?.DadosBasicosParlamentar.Naturalidade} - {senador?.DadosBasicosParlamentar.UfNaturalidade}
                </p>

                <h3>Outras Informações</h3>
                {senador?.OutrasInformacoes.Servico.map((servico) =>
                    <div>
                        <p>
                            Serivço: {servico.NomeServico}
                            <br />
                            Descricao: {servico.DescricaoServico}
                            <br />
                            <a rel="noreferrer" href={servico.UrlServico} target="_blank">Link</a>
                        </p>
                    </div>
                )}
            </Col>
        </Row>
    );
}
