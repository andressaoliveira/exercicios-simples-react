import { useState, useEffect } from "react"

export default () => {
    const [nome, setNome] = useState('')
    const [cargos, setCargos] = useState([])

    useEffect(() => {
        const loadCargosSenador = async () => {
            const response = await fetch('https://legis.senado.leg.br/dadosabertos/senador/11/cargos', {
                headers: {
                    accept: 'application/json'
                }
            })
            const responseJson = await response.json()
            setNome(responseJson.CargoParlamentar.Parlamentar.Nome)
            setCargos(responseJson.CargoParlamentar.Parlamentar.Cargos.Cargo.map((item) => {
                return {
                    nome: item.DescricaoCargo,
                    comissao: item.IdentificacaoComissao.NomeComissao,
                    periodo: item.DataInicio + ' - ' + item.DataFim
                }
            }))
        }
        loadCargosSenador()
    }, [])

    return <div className="page">
        <h3>{nome}</h3>
        {cargos.map((item, index) => {
            return <div key={index} className="cargo">
                <h4>{item.comissao}</h4>
                <span>{item.nome}</span>
                <small>{item.periodo}</small>
            </div>
        })}
    </div>
}