import {BrowserRouter, Route} from "react-router-dom";
import Calculo from "./Calculo";
import Senador from "./Senador";
import Filiacoes from "./Filiacoes";
import Menu from "./Menu/Menu";
import "./Principal.scss"


const Rotas = () => {
    return (
        <div className="routes">
            <BrowserRouter>
                <Menu />
                <div className="pages">
                    <Route path="/" exact component={Calculo} />
                    <Route path="/senador" component={Senador} />
                    <Route path="/filiacoes" component={Filiacoes} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Rotas;