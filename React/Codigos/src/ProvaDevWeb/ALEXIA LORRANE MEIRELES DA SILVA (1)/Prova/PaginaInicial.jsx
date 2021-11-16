//Chamada do que foi instalado para direcionar as rotas
import {useNavigate} from "react-router-dom";

export default function Inicial() {
    let navigate = useNavigate();
    function EscolheDestino(destino){
        navigate(`/Destinos/${destino}`)
    }

  return (
    <div className="containerInicial">
        <h1>Escolha o seu próximo destino</h1>
        <select onChange={(e) => {EscolheDestino(e.target.value)}}>
            <option value="Noronha">Fernando de Noronha, Brasil</option>
            <option value="SanAndres">San Andrés, Colômbia</option>
            <option value="Whitehaven">Whitehaven, Austrália</option>
        </select>
    </div>
  );
}


