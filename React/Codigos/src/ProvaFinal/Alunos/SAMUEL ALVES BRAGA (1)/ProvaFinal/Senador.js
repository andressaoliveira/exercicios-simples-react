import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default () => {
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")
    const [email, setEmail] = useState("")
    const [codigo, setCodigo] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [falecimento, setFalecimento] = useState("")
    const [pagina, setPagina] = useState("")
    useEffect(() =>{
        const fazerRequisicao = async() => {
            var f = await(await fetch("https://legis.senado.leg.br/dadosabertos/senador/38", {headers:{accept:"application/json"}})).json()
            setNome(f.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.NomeCompletoParlamentar)
            setFoto(f.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar)
            setEmail(f.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.EmailParlamentar)
            setCodigo(f.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.CodigoParlamentar)
            setNascimento(f.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar.DataNascimento)
            setFalecimento(f.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar.DataFalecimento)
            setPagina(f.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.UrlPaginaParlamentar)
        }
        fazerRequisicao()
    },[])
    return <div>
        <img src={foto}></img>
        <h3>Nome: {nome}</h3>
        <h3>Código Parlamentar: {codigo}</h3>
        <h3>Email: {email}</h3>
        <h3>Data de nascimento: {nascimento}</h3>
        <h3>Data de falecimento: {falecimento}</h3>
        <h3>Página do Parlamentar:</h3><a target="_blank" href={pagina}>{pagina}</a>
    </div>
}