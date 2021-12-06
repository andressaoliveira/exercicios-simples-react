import React from 'react';
import Calculo from './Calculo/calculo';
import Filiacoes from './Filiacoes/filiacoes';
import Senador from './Senador/senador';
import Menu from './Menu/menu';
import {Route, BrowserRouter} from "react-router-dom";

export default class Prova extends React.Component {
 
  render() {
    return (
        <div className="rot">      
            <BrowserRouter>
            <Menu/> 
                <Route path="/Calculo" component={Calculo}/>
                <Route path="/Senador" component={Senador}/>
                <Route path="/Filiacao" component={Filiacoes}/>
            </BrowserRouter>
        </div>
    );
  }
}
