import {BrowserRouter, Route} from "react-router-dom";
import Inicio from "./Inicio"
import Destinos from "./Destinos"
import Combustivel from "./Combustivel"
import Menu from "./components/Menu/Menu";
import './Prova.scss'

const Rotas = () => {
    return (
        <div className="routes">
            <BrowserRouter>
                <Menu />
                <div className="pages">
                    <Route path="/" exact component={Inicio} />
                    <Route path="/destinos" component={Destinos} />
                    <Route path="/combustivel" component={Combustivel} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Rotas;