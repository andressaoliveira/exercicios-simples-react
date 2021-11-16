import React from 'react';
import React, { Component } from 'react';
import InicioSelect from './PROVA01/Inicio/InicioSelect'

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