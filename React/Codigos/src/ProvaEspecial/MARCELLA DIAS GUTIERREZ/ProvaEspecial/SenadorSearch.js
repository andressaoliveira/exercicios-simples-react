import React, { useState } from 'react';
import axios from "axios";

export default function SenadorSearch() {
    const [senador, setSenador] = useState([])

    const search = () => {
        const code = document.getElementById('code').value
        let result = document.getElementById('element-result')
        let others = document.getElementById('others-result')
        const fetchData = async () => {
            await axios.get(`https://legis.senado.leg.br/dadosabertos/senador/${code}`)
                .then((response) => setSenador(response.data))
                .catch((error) => console.error(error))
        }

        if (validar) {
            fetchData()
            if (senador.length !== 0) {
                const idParlamentar = senador.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar
                const dadosBasicos = senador.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar
                const outrasInformacoes = senador.DetalheParlamentar.Parlamentar.OutrasInformacoes
                const nome = idParlamentar.NomeCompletoParlamentar
                const cod = idParlamentar.CodigoParlamentar
                const foto = idParlamentar.UrlFotoParlamentar
                const pagina = idParlamentar.UrlPaginaParlamentar
                const nascimento = dadosBasicos.DataNascimento
                const naturalidade = dadosBasicos.Naturalidade
                const arrServico = outrasInformacoes.Servico

                for (let index = 0; index < arrServico.length; index++) {
                    others.innerHTML =
                        `<div>
                            <p>Nome: ${arrServico[index].NomeServico}</p>
                            <p>Descricao: ${arrServico[index].DescricaoServico}</p>
                            <a href=${arrServico[index].UrlServico}>Página</a>
                        </div>`
                }

                result.innerHTML = `
                    <div className="page">
                        <h1>Senador</h1>
                        <hr />
                        <h3>Sobre o parlamentar</h3>
                        <hr />
                        <p>${cod} - ${nome}</p>
                        <img border="0" alt="parlamentar" src=${foto} width="100px" height="100px" />
                        <a href=${pagina}>Página</a>
                        <p>Data de nascimento: ${nascimento}</p>
                        <p>naturalidade: ${naturalidade}</p>
                        <p>SexoParlamentar: ${idParlamentar.SexoParlamentar}</p>
                        <p>EmailParlamentar: ${idParlamentar.EmailParlamentar}</p>
                        <p>UfNaturalidade: ${dadosBasicos.UfNaturalidade}</p>

                        <hr />
                        <h3>Outras informações parlamentares</h3>
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
            <h1>Senador</h1>
            <hr />
            <input type="number" placeholder="Digite o código do senador" id='code' />
            <input className="calcular" type="button" value="Pesquisar" onClick={search} />
            <hr />
            <div id='element-result'></div>
            <div id='others-result'></div>
        </div>
    );
}
