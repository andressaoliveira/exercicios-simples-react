import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default () => {
    const [descricao1, setDescricao1] = useState("")
    const [primeiraLFim, setPrimeiraLFim] = useState("")
    const [segundaLFim, setSegundaLFim] = useState("")
    const [descricao2, setDescricao2] = useState("")
    const [primeiraLFim2M, setPrimeiraLFim2M] = useState("")
    const [segundaLFim2M, setSegundaLFim2M] = useState("")
    const [codigo1, setCodigo1] = useState("")
    const [codigo2, setCodigo2] = useState("")
    useEffect(() =>{
        const fazerRequisicao = async() => {
            var f = await(await fetch("https://legis.senado.leg.br/dadosabertos/senador/38/mandatos", {headers:{accept:"application/json"}})).json()
            console.log(f.MandatoParlamentar.Parlamentar.Mandatos.Mandato)
            setDescricao1(f.MandatoParlamentar.Parlamentar.Mandatos.Mandato[0].DescricaoParticipacao)
            setPrimeiraLFim(f.MandatoParlamentar.Parlamentar.Mandatos.Mandato[0].PrimeiraLegislaturaDoMandato.DataFim)
            setSegundaLFim(f.MandatoParlamentar.Parlamentar.Mandatos.Mandato[0].SegundaLegislaturaDoMandato.DataFim)
            setDescricao2(f.MandatoParlamentar.Parlamentar.Mandatos.Mandato[1].DescricaoParticipacao)
            setPrimeiraLFim2M(f.MandatoParlamentar.Parlamentar.Mandatos.Mandato[1].PrimeiraLegislaturaDoMandato.DataFim)
            setSegundaLFim2M(f.MandatoParlamentar.Parlamentar.Mandatos.Mandato[1].SegundaLegislaturaDoMandato.DataFim)
            setCodigo1(f.MandatoParlamentar.Parlamentar.Mandatos.Mandato[0].CodigoMandato)
            setCodigo2(f.MandatoParlamentar.Parlamentar.Mandatos.Mandato[1].CodigoMandato)


        }
        fazerRequisicao()
    },[])
    return <div>
        <h1>Mandatos:</h1>
        <div id = "primeiro mandato">
            <h2>Primeiro mandato</h2>
            <h3>Códgio do mandato: {codigo2}</h3>
            <h3>Descrição da participação: {descricao2}</h3>
            <h3>Fim da primeira legislatura: {primeiraLFim2M}</h3>
            <h3>Fim da segunda legislatura: {segundaLFim2M}</h3>
        </div>
        <div id = "segundo mandato">
            <h2>Segundo mandato</h2>
            <h3>Códgio do mandato: {codigo1}</h3>
            <h3>Descrição da participação: {descricao1}</h3>
            <h3>Fim da primeira legislatura: {primeiraLFim}</h3>
            <h3>Fim da segunda legislatura: {segundaLFim}</h3>
        </div>
    </div>
}