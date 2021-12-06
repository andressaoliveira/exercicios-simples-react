import React from 'react';
import './Principal.css';
import Calculo from './Calculo/Calculo'
import Senador from './Senador/Senador'
import Cargos from './Cargos/Cargos'
import logo_got from '../logo_oitnb.png'
import { Route, BrowserRouter } from "react-router-dom";
import Menu from "./Menu/Menu"

export default class apiSenado extends React.Component {

    render() {
        return (
            <div id="got_page">
                {/* <img src={logo_got} alt="Got Logo" width="100%" height="300px"/> */}
                <div className="rotas">
                    <BrowserRouter>
                        <Menu />
                        <Route path="/" exact component={Calculo} />
                        <Route path="/Senador" component={Senador} />
                        <Route path="/Cargos" component={Cargos} />
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}