import React, { useState } from 'react';
import axios from "axios";

export default function ProfissaoSearch() {
    const [profissao, setProfissao] = useState([])

    const search = () => {
        const code = document.getElementById('code').value
        let result = document.getElementById('element-result')
        let others = document.getElementById('others-result')
        const fetchData = async () => {
            await axios.get(`https://legis.senado.leg.br/dadosabertos/senador/${code}/profissao`)
                .then((response) => setProfissao(response.data))
                .catch((error) => console.error(error))
        }

        if (validar) {
            fetchData()
            console.log(profissao)
            if (profissao.length !== 0) {
                const cod = profissao.ProfissaoParlamentar.Parlamentar.Codigo
                const nome = profissao.ProfissaoParlamentar.Parlamentar.Nome
                const arrProfissao = profissao.ProfissaoParlamentar.Parlamentar.Profissoes.Profissao

                for (let index = 0; index < arrProfissao.length; index++) {
                    others.innerHTML =
                        `<div>
                            <p>NomeProfissao: ${arrProfissao[index].NomeProfissao}</p>
                            <p>IndicadorAtividadePrincipal: ${arrProfissao[index].IndicadorAtividadePrincipal}</p>
                        </div>`
                }

                result.innerHTML = `
                    <div className="page">
                        <h1>profissao</h1>
                        <hr />
                        <h3>Sobre o parlamentar</h3>
                        <hr />
                        <p>${cod} - ${nome}</p>
                        <h3>Outras informacoes sobre profissao</h3>
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
            <h1>profissao</h1>
            <hr />
            <input type="number" placeholder="Digite o código do profissao" id='code' />
            <input className="calcular" type="button" value="Pesquisar" onClick={search} />
            <hr />
            <div id='element-result'></div>
            <div id='others-result'></div>
        </div>
    );
}
