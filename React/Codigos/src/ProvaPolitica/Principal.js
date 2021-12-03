import { Route, BrowserRouter } from "react-router-dom";
import Senador from './Senador';
import Cargos from './Cargos';
import Filiacoes from './Filiacoes';
import Mandatos from './Mandatos';
import Profissoes from './Profissoes';
import Menu from './Menu/Menu';
import './Principal.css'

export default function Principal() {

    return (
        <div className="Principal">
            <BrowserRouter>
                <Menu />
                <div className="display-prova">
                    <Route path="/Senador" exact component={Senador} />
                    <Route path="/Cargos" component={Cargos} />
                    <Route path="/Filiacoes" component={Filiacoes} />
                    <Route path="/Mandatos" component={Mandatos} />
                    <Route path="/Profissoes" component={Profissoes} />
                </div>
            </BrowserRouter>

        </div>
    )
}