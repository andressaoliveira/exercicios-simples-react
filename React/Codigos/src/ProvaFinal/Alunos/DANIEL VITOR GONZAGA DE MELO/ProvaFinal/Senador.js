import { useState, useEffect } from "react"

export default () => {

    const [senador, setSenador] = useState({
        foto: '',
        nome: '',
        partido: '',
        nascimento: '',
        sexo: '',
        naturalidade: '',
        email: '',
        pagina: ''
    })

    useEffect(() => {
        const loadSenador = async () => {
            const response = await fetch('https://legis.senado.leg.br/dadosabertos/senador/11', {
                headers: {
                    accept: 'application/json'
                }
            })
            const responseJson = await response.json()
            setSenador({
                foto: responseJson.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar,
                nome: responseJson.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.NomeCompletoParlamentar,
                partido: responseJson.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.SiglaPartidoParlamentar,
                nascimento: responseJson.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar.DataNascimento,
                sexo: responseJson.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.SexoParlamentar,
                naturalidade: responseJson.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar.Naturalidade + ' - ' + responseJson.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar.UfNaturalidade,
                email: responseJson.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.EmailParlamentar,
                pagina: responseJson.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar.UrlPaginaParlamentar
            })
        }
        loadSenador()
    }, [])
    return <div className="page">
        <img src={senador.foto} />
        <h3>{senador.nome}</h3>
        <small>{senador.partido}</small>
        <table>
            <tbody>
                <tr>
                    <td>Data de nascimento:</td>
                    <td>{senador.nascimento}</td>
                </tr>
                <tr>
                    <td>Sexo:</td>
                    <td>{senador.sexo}</td>
                </tr>
                <tr>
                    <td>Naturalidade:</td>
                    <td>{senador.naturalidade}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{senador.email}</td>
                </tr>
            </tbody>
        </table>
        <a href={senador.pagina}>Página do parlamentar</a>
    </div>
}