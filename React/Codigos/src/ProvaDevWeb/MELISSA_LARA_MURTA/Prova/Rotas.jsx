import { Routes, Route} from 'react-router-dom';
import PaginaInicial from './PaginaInicial/index';
import Destinos from './Destinos/index';
import BetoCarreroWorld from './Destino/BetoCarrero';
import Florianopolis from './Destino/Florianopolis';
import Balneario from './Destino/Balneario';
import Combustivel from './Combustivel/index';
import React from 'react';

function Rotas() { 
  return (
    <Routes>
        
        <Route path={'/PaginaInicial'} element={<PaginaInicial/>} />
        <Route path={'/Destinos'} element={<Destinos/>} />
        <Route path={'/Destino/BetoCarreroWorld'} element={<BetoCarreroWorld/>} />
        <Route path={'/Destino/Florianopolis'} element={<Florianopolis/>} />
        <Route path={'/Destino/Balneario'} element={<Balneario/>} />
        <Route path={'/Combustivel'} element={<Combustivel/>} />
    </Routes>
  );
}

export default Rotas;