import React from 'react';
import Menu from './Menu.js'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Calculo from './Calculo.js';
import Senador from './Senador.js';
function Principal() {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route element={<Calculo/>} path="/" />
        <Route element={<Senador/>} path="/senador" />
      </Routes>
    </BrowserRouter>
  );
}

export default Principal;
