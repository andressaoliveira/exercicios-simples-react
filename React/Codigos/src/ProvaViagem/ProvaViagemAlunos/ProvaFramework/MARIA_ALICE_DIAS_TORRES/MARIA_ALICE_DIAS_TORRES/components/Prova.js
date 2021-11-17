//Maria Alice Dias 11900652
//dentro da pasta app.js deve ser inserido 
//import Prova  from './components/Prova'


import React from "react";
//importaçao do router para navegação entre telas no projeto
import { Route, BrowserRouter } from "react-router-dom";
//importacao de todos os componentes criados para faze as rotas no arquivo Prova.js
import PaginaInicial from './PaginaInicial/PaginaInicial';
import Combustivel from './Combustivel/Combustivel';
import Destino from './Destino/Destino';
//importaçao do menu para que seja exibido em todas as telas (para que seja feito uma 
//única vez, em apenas um arquivo)
import Menu from './Menu/Menu'
import './Prova.css';

  export default class Prova extends React.Component {
  
    //nagegaçao por rotas (utilizando os componentes) dentro da pasta principal
    render() {
        return (
          <div className="rotas">
          <BrowserRouter>
          <Menu/>
             <Route path="/" exact component={PaginaInicial} />
            <Route path="/Destino" component={Destino} />
            <Route path="/Combustivel" component={Combustivel} />
          </BrowserRouter>
        </div>
        )
    }
}