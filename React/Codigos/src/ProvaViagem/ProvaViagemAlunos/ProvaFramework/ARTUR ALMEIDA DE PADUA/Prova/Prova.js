import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Inicio from './Inicio/Inicio';
import Destinos from './Destinos/Destinos';
import Combustivel from './Combustivel/Combustivel';

export default class Prova extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: true
        };
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route component={Inicio} path="/" exact />
                    <Route component={Destinos} path="/destinos" />
                    <Route component={Combustivel} path="/combustivel" />
                </BrowserRouter>
            </div>
        )
    }
}