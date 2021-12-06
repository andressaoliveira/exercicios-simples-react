import React, {useState, useEffect} from 'react';
import axios from "axios";


export default function Cargo () {
    const [cargo, setCargo] = useState([])

    useEffect(() => {
        // debugger
        const fetchData = async () => {
            await axios.get("https://legis.senado.leg.br/dadosabertos/senador/25/cargos")
            .then((response) => setCargo(response.data))
            .catch((error) => console.error(error))
        }
        fetchData()
    }, [])

    if(cargo.length !== 0){
        const arrCargos = cargo.CargoParlamentar.Parlamentar.Cargos.Cargo
        return (
             <div className="page">
                <h1>Cargos do senador</h1>
                 <hr />

                 {arrCargos.map((cargo) => {
                     return (
                         <>
                             <p>Código: {cargo.CodigoCargo}</p>
                             <p>Descrição: {cargo.DescricaoCargo}</p>
                             <p>Data Inicio: {cargo.DataInicio}</p>
                             <p>Data Fim: {cargo.DataFim}</p>
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
