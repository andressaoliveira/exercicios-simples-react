import React, {useState, useEffect} from 'react';
import axios from "axios";


export default function Senador () {
    const [senador, setSenador] = useState([])

    useEffect(() => {
        // debugger
        const fetchData = async () => {
            await axios.get("https://legis.senado.leg.br/dadosabertos/senador/25")
            .then((response) => setSenador(response.data))
            .catch((error) => console.error(error))
        }
        fetchData()
    }, [])
    console.log(senador, 'aaa')

    if(senador.length !== 0){
        console.log(senador, 'tem')
        console.log('tem dado')
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
        return (
            <div className="page">
                <h1>Senador</h1>
                <hr />
                <h3>Sobre o parlamentar</h3>
                <hr />
                <p>{cod} - {nome}</p>
                <img border="0" alt="parlamentar" src={foto} width="100px" height="100px" />
                <a href={pagina}>Página</a>
                <p>Data de nascimento: {nascimento}</p>
                <p>Naturalidade: {naturalidade}</p>
                <hr />
                <h3>Serviços parlamentares</h3>
                <hr />

                {arrServico.map((servico) => {
                    return (
                        <>
                            <p>Nome: {servico.NomeServico}</p>
                            <p>Descricao: {servico.DescricaoServico}</p>
                            <a href={servico.UrlServico}>Página</a>
                        </>
                    )
                })}
            </div>
        );
    } else{
        console.log('nao tem dado')
        return (
            <p>Instabilidade na api, tente novamente mais tarde</p>
        )
    }

   
}
