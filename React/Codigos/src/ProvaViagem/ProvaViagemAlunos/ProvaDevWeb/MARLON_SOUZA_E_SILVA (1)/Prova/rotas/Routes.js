import {Route, BrowserRouter } from "react-router-dom";
import Inicio from '../inicio/Inicio';
import Destinos from '../destinos/Destinos';
import Combustivel from '../combustivel/Combustivel';
import Menu from "../menu/Menu";
import "./rotas.css"

const Routes = () => {
    return (
        <div className="rotas">
            <BrowserRouter>
                <Menu />
                <Route path="/" exact component={Inicio} />
                <Route path="/inicio" component={Inicio} />
                <Route path="/destinos" component={Destinos} />
                <Route path="/combustivel" component={Combustivel} />
            </BrowserRouter>
        </div>
    )
}

export default Routes;