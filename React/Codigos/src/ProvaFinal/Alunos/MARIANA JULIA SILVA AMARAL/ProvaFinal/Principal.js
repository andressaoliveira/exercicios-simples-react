import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Menu from "./Menu/Menu";
import Calculo from "./Calculo/Calculo";
import Senador from "./Senador/Senador";
import Filiacao from "./Senador/Filiacao";
import "./ProvaFinal.scss";

const Routes = () => {

    return(
        <div className="rotas">
         <BrowserRouter>  
         <Menu/>
         <Route exact component={Calculo} path="/"/> 
         <Route component={Senador} path="/Senador"/> 
         <Route component={Filiacao} path="/Filiacao"/> 
         </BrowserRouter>    
        </div>
    )
}

export default Routes;