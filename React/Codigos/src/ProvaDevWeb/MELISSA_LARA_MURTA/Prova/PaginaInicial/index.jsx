import { useNavigate } from "react-router-dom";
import React from 'react';

export default function PaginaInicial() {
    let navigate = useNavigate();

    function DirecionaDestino(destino){
        
        navigate(`/Destino/${destino}`)
        
    }

  return (
    <div className="containerPaginaInicial">
        <h1>Ínicio</h1>
        <div>
            <span>Escolha um destino</span>
        </div>
        
        <select
            onChange={(e) => {DirecionaDestino(e.target.value)}}
        >
            <option value=""></option>
            <option value="Florianopolis">Florianópolis</option>
            <option value="Balneario">Balneário Camboriú</option>
            <option value="BetoCarreroWorld">Beto Carrero World</option>
        </select>
    </div>
  );
}


