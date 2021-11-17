import React from 'react';
import './App.css'

function Inicio(){
    return(
        <div class="escolha-cidade">
            <h1>Inicio</h1>
            <p> Escolha o destino: </p>
            <select name="select">
                <option value="valor1">Ipatinga</option>
                <option value="valor2" selected>Coronel Fabriciano</option>
                <option value="valor3">Timoteo</option>
            </select>
        </div>
    );
}

export default Inicio;