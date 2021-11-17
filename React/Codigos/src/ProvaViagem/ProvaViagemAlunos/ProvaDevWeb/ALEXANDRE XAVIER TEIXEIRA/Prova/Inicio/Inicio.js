import { useEffect, useState } from "react";
import Dados from "../Dados/Dados";
import { useNavigate } from "react-router-dom";

function Inicio() {

    const [cidades, setCidades] = useState([]);

    const dados = new Dados();
    let navigate = useNavigate();

    useEffect(() => {
        const listaCidades = dados.obterCidades().map(x => ({ id: x.id, nome: x.nome, estado: x.estado }));
        setCidades(listaCidades);
    }, [])

    const cidadeSelecionada = (e) => {
        navigate(`/destinos/${e.target.value}`);
    }

    return (
        <div className="mt-3 container inicio">
            <h4>Início</h4>

            <div className="inicio-pesquisa">
                <p>Escolha seu destino:</p>
                <select className="form-select" value={0} onChange={cidadeSelecionada}>
                    <option disabled value={0}>Selecione um destino...</option>
                    {
                        cidades.map((cidade, i) => {
                            return (
                                <option value={cidade.id} key={i}>{cidade.nome} - {cidade.estado}</option>
                            );
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default Inicio;
