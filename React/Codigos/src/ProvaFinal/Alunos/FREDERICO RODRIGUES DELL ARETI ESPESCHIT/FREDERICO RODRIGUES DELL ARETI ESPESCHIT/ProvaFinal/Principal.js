import React from 'react';

import { Routes, BrowserRouter, Route} from 'react-router-dom'

import Calculo from './Calculo';
import Senador from './Senador';
import Cargos from './Cargos';

import Menu from './Menu/menu'

import './bootstrap.min.css';


function Principal(){
    return(
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route element={<Calculo />} path="/" />
        <Route element={<Senador />} path="/senador" />
        <Route element={<Cargos />} path="/cargos" />
      </Routes>
    </BrowserRouter>
    )
}

export default Principal;