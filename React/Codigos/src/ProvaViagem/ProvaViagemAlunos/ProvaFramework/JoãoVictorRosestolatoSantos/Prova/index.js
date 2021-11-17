import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import Prova from "./Prova"
import Destino from "./Destino"
import Combustivel from "./Combustivel"
import Menu from "./Menu/Menu"

export default class Rotas extends React.Component{

    render(){

        return(
            <div>

            <BrowserRouter>

            <Menu/>
          
            <Route component={Prova} path="/" exact />
            <Route component={Destino} path="/Destino" />
            <Route component={Combustivel} path="/Combustivel" />

            </BrowserRouter>

           </div>
        )
    }
}