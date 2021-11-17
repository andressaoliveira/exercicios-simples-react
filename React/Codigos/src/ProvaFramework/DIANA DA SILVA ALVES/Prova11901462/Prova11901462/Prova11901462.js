import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Inicio from './Inicio/index.js';
import Destinos from './Destinos/index.js';
import Combustivel from './Combustivel/index.js';

export default function Rotas() {
   return(
       <BrowserRouter>
        <Routes>
           <Route element={<Inicio />}  path="/" exact />
           <Route element={<Destinos />}  path="/Destinos" />
           <Route element={<Combustivel />}  path="/Combustivel" />
        </Routes>
       </BrowserRouter>
   )
}