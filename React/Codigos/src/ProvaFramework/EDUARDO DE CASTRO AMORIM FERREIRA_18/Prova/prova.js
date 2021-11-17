// Eduardo de Castro Amorim Ferreira
// 11901160
// N° 18

// import dos valores para fazer a navegação, juntamente dos valores das outras páginas.
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Inicio from './Inicio/inicio';
import Destinos from './Destinos/destinos';
import Combustivel from './Combustivel/combustivel';

// export default feito em classe
export default class Prova extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            // div com BrowserRouter feita para inicializar pela parte inicial
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/destinos" component={Destinos} />
                    <Route path="/combustivel" component={Combustivel} />
                </BrowserRouter>
            </div>
        )
    }
}