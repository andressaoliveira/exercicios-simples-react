import React from 'react';
import {BrowserRouter, Router } from "react-router-dom";
import Inicio from './Inicio/Inicio';
import Destino from './Destino/Destino';
import Combustivel from './Combustivel/Combustivel';

export default class Prova01 extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                a: true
            };
}
    
   render() {
     return (
         <div> 
             <BrowserRouter>
             <Route conponent={Inicio} path="/" exact />
             <Route conponent={Destino} path="/Destino" />
             <Route conponent={Combustivel} path="/Combustivel" />
             </BrowserRouter>
         </div>
     )
  }
}


        