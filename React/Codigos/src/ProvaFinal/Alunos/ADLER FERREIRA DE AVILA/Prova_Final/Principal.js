import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from './Menu';
import Calculo from './Calculo';
import Senador from './Senador';
import Cargos from './Cargos';

function Principal() {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        {/* <Route element={<Home/>} path="/" /> */}
        <Route element={<Calculo/>} path="/Calculo" />
        <Route element={<Senador/>} path="/Senador" />
        <Route element={<Cargos/>} path="/Cargos" />
      </Routes>
    </BrowserRouter>
  );
}

export default Principal;