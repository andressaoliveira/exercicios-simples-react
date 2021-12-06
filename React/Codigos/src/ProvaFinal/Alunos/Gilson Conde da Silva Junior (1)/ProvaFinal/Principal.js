import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

import Calcular from './Calculo';
import Senador from './Senador';
import Filiacao from './Filiacao';

export default class Projeto extends React.Component { 
  render() {
    return (
        <div className="rotas">      
            <BrowserRouter>
            <Menu/> 
                <Route path="/" component={Calcular} exact/>
                <Route path="/Senador" component={Senador}/> 
                <Route path="/Filiacao" component={Filiacao}/>
            </BrowserRouter>
        </div>
    );
  }
}