import { Route, BrowserRouter } from "react-router-dom";
import Sobre from './Sobre/Sobre';
import Personagens from './Personagens/Personagens';
import Casas from './Casas/Casas';
import Menu from './Menu/Menu';

export default function ProvaHarryPotter() {

    return (
        <div className="ProvaHarryPotter">
            <BrowserRouter>
                <Menu />
                <div className="display-prova">
                    <Route path="/" exact component={Sobre} />
                    <Route path="/Casas" component={Casas} />
                    <Route path="/Personagens" component={Personagens} />
                </div>
            </BrowserRouter>

        </div>
    )
}