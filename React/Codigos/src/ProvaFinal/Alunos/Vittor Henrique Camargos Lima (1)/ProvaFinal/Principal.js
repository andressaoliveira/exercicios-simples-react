import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Menu from "./Menu/Menu";

import Calcular from './Calculo/Calculo';
import Senador from './Senador/Senador';
import Filiacao from './Filiacao/Filiacao';

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