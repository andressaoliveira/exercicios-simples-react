import React, { Component } from 'react';
import InicioSelect from './inicioSelect'

function Inicio(){
   return (
    <div className="MenuIncio">
        <label>Inicio</label>
         <label>Escolha seu destino:</label>
         <InicioSelect>opções:</InicioSelect>
    </div>
  );
}

export default Inicio;