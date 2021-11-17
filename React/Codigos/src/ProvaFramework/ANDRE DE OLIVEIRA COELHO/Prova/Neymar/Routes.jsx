import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Contadores from "../Contadores/contadores";
import Prova from "../Prova";
import Rotas from "../Rotas/rotas";
import Viagem from "../Viagem/viagem";
import Neymar from "./Neymar";

const Routes = () => {
    return(
        <div className="rotas">
            <BrowserRouter>
            <Neymar/>
            <Route path="/" exact component={Prova}/>
            <Route path="/Contadores" exact component={Contadores}/>
            <Route path="/Viagem" exact component={Viagem}/>
            <Route path="/Rotas" exact component={Rotas}/>
            </BrowserRouter>
        </div>
    )
}

export default Routes;