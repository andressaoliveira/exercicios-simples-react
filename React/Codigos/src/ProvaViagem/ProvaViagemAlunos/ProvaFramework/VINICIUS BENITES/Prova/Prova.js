import React from "react";
import { Route, BrowserRouter as router, Routes } from "react-router-dom";

import Inicio from "./Inicio";
import Destinos from "./Destinos";
import Combustivel from "./Combustivel";

const Rotas = () => {
   return(
       <router> 
       <Routes>
           <Route element={<Inicio />}  path="/Inicio" />
           <Route element={<Destinos />}  path="/Destinos" />
           <Route element={<Combustivel />}  path="/Combustivel" />
        </Routes>
       </router>

   )
}

export default Routes;