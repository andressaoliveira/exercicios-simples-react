import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Menu from "./Menu/Menu";
import Inicio from "./Inicio/Inicio";
import Destinos from "./Destinos/Destinos";
import Combustivel from "./Combustivel/Combustivel";
import "./Prova.scss"

const Routes = () => {

    return(
        <div className="rotas">
         <BrowserRouter>  
         <Menu/>
         <Route exact component={Inicio} path="/"/> 
         <Route component={Destinos} path="/Destinos"/> 
         <Route component={Combustivel} path="/Combustivel"/> 
         </BrowserRouter>    
        </div>
    )
}

export default Routes;