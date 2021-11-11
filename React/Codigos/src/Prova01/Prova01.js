import { Route, BrowserRouter } from "react-router-dom";
import Inicio from './Inicio/Inicio';
import Destinos from './Destinos/Destinos';
import Combustivel from './Combustivel/Combustivel';
import Menu from './Menu';

export default function Prova01() {

    return (
        <div className="prova01">
            <BrowserRouter>
                <Menu />
                <div className="display-prova">
                    <Route path="/" exact component={Inicio} />
                    <Route path="/Combustivel" component={Combustivel} />
                    <Route path="/Destinos" component={Destinos} />
                </div>
            </BrowserRouter>

        </div>
    )
}