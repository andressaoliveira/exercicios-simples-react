import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Dados from "../Dados/Dados";

function Destinos() {

    let { id } = useParams();

    const [cidade, setCidade] = useState({});
    
    const dados = new Dados();

    useEffect(() => {
        console.log(dados.obterCidade(id));
        setCidade(dados.obterCidade(id));
    }, [])

    return (
        <div className="mt-3 container destinos">
            <div className="card">
                <div className="card-header">
                    <h4>{cidade.nome} - <small>{cidade.estado} - {cidade.pais}</small></h4>
                </div>
                <div className="card-body">
                    <p>{cidade.descricao}</p>
                    {/* {
                        cidade.imagens.forEach(img => {
                            <p>{img}</p>
                        })
                    } */}
                    {JSON.stringify(cidade.imagens)}
                </div>
            </div>
        </div>
    );
}

export default Destinos;
