import { useEffect, useState } from "react";


function Filiacoes() {

    const CODIGO_SENADOR = '4';

    const [filiacoes, setFiliacoes] = useState([]);

    useEffect(() => [
        fetch(`https://legis.senado.leg.br/dadosabertos/senador/${CODIGO_SENADOR}/filiacoes`, {
            method: 'GET'
        })
        .then(resposta => resposta.text())
        .then(dado => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(dado, "application/xml");
            const filiacoes = xml.getElementsByTagName("Filiacoes")[0];

            setarFiliacoes(filiacoes)
        })
    ], [])

    const setarFiliacoes = filiacoes => {
        const filiacoesConvertidas = Array.from(filiacoes.childNodes);
        let arrayFiliacoes = [];

        filiacoesConvertidas.forEach(filiacao => {

            const partido = filiacao.childNodes[0];
            const codigoPartido = partido.childNodes[0].textContent;
            const siglaPartido = partido.childNodes[1].textContent;
            const nomePartido = partido.childNodes[2].textContent;

            const dataFiliacao = filiacao.childNodes[1].textContent;
            const dataDesfiliacao = filiacao.childNodes[2].textContent;

            const objeto = {
                codigoPartido,
                siglaPartido,
                nomePartido,
                dataFiliacao,
                dataDesfiliacao
            };

            arrayFiliacoes.push(objeto);
        });

        setFiliacoes(arrayFiliacoes);
    }

    return (
        <div className="filiacoes">
            <h2>Filiações</h2>

            <div className="filiacoes-lista">
                {
                    filiacoes.map((filiacao, i) => {
                        return (
                            <div key={i} style={{ marginBottom: '60px' }}>
                                <p>Data de filiação: {new Date(filiacao.dataFiliacao).toLocaleDateString('pt-BR')}</p>
                                <p>Data de desfiliação: {new Date(filiacao.dataDesfiliacao).toLocaleDateString('pt-BR')}</p>
                                <p>Partido: {filiacao.codigoPartido} - {filiacao.siglaPartido} - {filiacao.nomePartido}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Filiacoes;
