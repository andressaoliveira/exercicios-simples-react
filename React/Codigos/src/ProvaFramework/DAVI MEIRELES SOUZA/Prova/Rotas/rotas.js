import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";

import Calculo from '../Calculo/calculo';
import Inicio from '../Inicio/inicio';
import Menu from '../Menu/menu';
import Detalhes from '../Detalhes/detalhes';

export default class Rotas extends React.Component{

    render(){
  
  
      return (
  
        <BrowserRouter>
        <Menu/>
        <Route path="/" component={Inicio} exact/>
        <Route path="/calculo" component={Calculo} />
        <Route path="/detalhes" component={Detalhes} />
        </BrowserRouter>

      )
    }
  }
  
  