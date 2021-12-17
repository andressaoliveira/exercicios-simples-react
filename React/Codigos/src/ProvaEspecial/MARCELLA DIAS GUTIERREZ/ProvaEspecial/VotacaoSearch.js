import React, { useState } from 'react';
import axios from "axios";

export default function VotacaoSearch() {
    const [votacao, setVotacao] = useState([])

    const search = () => {
        const code = document.getElementById('code').value
        let result = document.getElementById('element-result')
        let others = document.getElementById('others-result')
        const fetchData = async () => {
            await axios.get(`https://legis.senado.leg.br/dadosabertos/senador/${code}/votacoes`)
                .then((response) => setVotacao(response.data))
                .catch((error) => console.error(error))
        }

        if (validar) {
            fetchData()
            console.log(votacao)
            if (votacao.length !== 0) {
                const cod = votacao.VotacaoParlamentar.Parlamentar.Codigo
                const nome = votacao.VotacaoParlamentar.Parlamentar.Nome
                const arrVotacao = votacao.VotacaoParlamentar.Parlamentar.Votacoes.Votacao

                for (let index = 0; index < arrVotacao.length; index++) {
                    others.innerHTML =
                        `<div>
                            <p>CodigoSessaoVotacao: ${arrVotacao[index].CodigoSessaoVotacao}</p>
                            <p>DescricaoResultado: ${arrVotacao[index].DescricaoResultado}</p>
                            <p>DescricaoVotacao: ${arrVotacao[index].DescricaoVotacao}</p>
                            <p>IndicadorVotacaoSecreta: ${arrVotacao[index].IndicadorVotacaoSecreta}</p>
                            <p>Sequencial: ${arrVotacao[index].Sequencial}</p>
                            <p>SiglaDescricaoVoto: ${arrVotacao[index].SiglaDescricaoVoto}</p>
                            <p>CodigoSessao: ${arrVotacao[index].SessaoPlenaria.CodigoSessao}</p>
                            <p>CodigoSessaoLegislativa: ${arrVotacao[index].CodigoSessaoLegislativa}</p>
                            <p>DataSessao: ${arrVotacao[index].SessaoPlenaria.DataSessao}</p>
                            <p>HoraInicioSessao: ${arrVotacao[index].SessaoPlenaria.HoraInicioSessao}</p>
                            <p>NumeroSessao: ${arrVotacao[index].SessaoPlenaria.NumeroSessao}</p>
                            <p>SiglaCasaSessao: ${arrVotacao[index].SessaoPlenaria.SiglaCasaSessao}</p>
                            <p>SiglaTipoSessao: ${arrVotacao[index].SessaoPlenaria.SiglaTipoSessao}</p>
                            <p>Ano: ${arrVotacao[index].Materia.Ano}</p>
                            <p>Codigo: ${arrVotacao[index].Materia.Codigo}</p>
                            <p>Data: ${arrVotacao[index].Materia.Data}</p>
                            <p>DescricaoIdentificacao: ${arrVotacao[index].Materia.DescricaoIdentificacao}</p>
                            <p>Ementa: ${arrVotacao[index].Materia.Ementa}</p>
                            <p>IdentificacaoProcesso: ${arrVotacao[index].Materia.IdentificacaoProcesso}</p>
                            <p>Numero: ${arrVotacao[index].Materia.Numero}</p>
                            <p>Sigla: ${arrVotacao[index].Materia.Sigla}</p>
                        </div>`
                }

                result.innerHTML = `
                    <div className="page">
                        <h1>votacao</h1>
                        <hr />
                        <h3>Sobre o parlamentar</h3>
                        <hr />
                        <p>${cod} - ${nome}</p>
                        <h3>Outras informacoes sobre votacao</h3>
                        <hr />
                    </div>
                `

            }
        } else {
            result.innerHTML = 'Por favor, preencha todos os números'
        }
    }

    const validar = (code) => {
        if (!!code) {
            return true
        } else {
            return false
        }

    }

    return (
        <div className='ordenacao'>
            <h1>votacao</h1>
            <hr />
            <input type="number" placeholder="Digite o código do votacao" id='code' />
            <input className="calcular" type="button" value="Pesquisar" onClick={search} />
            <hr />
            <div id='element-result'></div>
            <div id='others-result'></div>
        </div>
    );
}
