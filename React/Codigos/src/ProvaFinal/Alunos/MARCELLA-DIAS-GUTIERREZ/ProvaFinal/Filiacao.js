import React, {useState, useEffect} from 'react';
import axios from "axios";


export default function Filiacao () {
    const [filiacao, setFiliacao] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("https://legis.senado.leg.br/dadosabertos/senador/25/filiacoes")
            .then((response) => setFiliacao(response.data))
            .catch((error) => console.error(error))
        }
        fetchData()
    }, [])

    console.log(filiacao)

    if(filiacao.length !== 0){
        const arrFiliacoes = filiacao.FiliacaoParlamentar.Parlamentar.Filiacoes.Filiacao
        return (
             <div className="page">
                <h1>Filiação</h1>
                 <hr />

                 {arrFiliacoes.map((filiacao) => {
                     return (
                         <>
                             <p>Data Filiacao: {filiacao.DataFiliacao}</p>
                             <p>Data Desfiliacao: {filiacao.DataDesfiliacao}</p>
                             <p>Partido: {filiacao.Partido.NomePartido}</p>
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
