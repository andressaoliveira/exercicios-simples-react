import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Inicio from './components/Inicio.js'
import Destinos from './components/Destinos.js'
import Combustivel from './components/Combustivel.js'
import Menu from './components/Menu.js'
import './style.css';

function Prova() {
  return (
    // Lista de rotas de acordo com a documentação do Router. Importo o elemento e falo em que rota fica.
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route element={<Inicio/>} path="/" />
        <Route element={<Destinos/>} path="/destinos" />
        <Route element={<Combustivel/>} path="/combustivel" />
      </Routes>
    </BrowserRouter>
  )
}

export default Prova