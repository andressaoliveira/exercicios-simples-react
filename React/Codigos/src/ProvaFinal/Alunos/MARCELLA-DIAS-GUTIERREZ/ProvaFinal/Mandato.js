import React, {useState, useEffect} from 'react';
import axios from "axios";


export default function Mandato () {
    const [mandato, setMandato] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("https://legis.senado.leg.br/dadosabertos/senador/25/mandatos")
            .then((response) => setMandato(response.data))
            .catch((error) => console.error(error))
        }
        fetchData()
    }, [])

    console.log(mandato)

    if(mandato.length !== 0){
        const arrMandato = mandato.MandatoParlamentar.Parlamentar.Mandatos.Mandato
        return (
             <div className="page">
                <h1>Mandato</h1>
                 <hr />
                 {arrMandato.map((mandato) => {
                     return (
                         <>
                             <p>Código: {mandato.CodigoMandato}</p>
                             <p>Descrição: {mandato.DescricaoParticipacao}</p>
                             <p>Estado: {mandato.UfParlamentar}</p>
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
