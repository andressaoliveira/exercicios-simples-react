import { Route, BrowserRouter } from "react-router-dom";

import calculo from "./Calculo";
import senador from "./Senador";
import cargos from "./Cargos";
const Routes = () => {
        return (
                <div className="menuPrinc">
                        <BrowserRouter>
                                <Route path="/Inicio" component={calculo} />
                                <Route path="/Senador" component={senador} />
                                <Route path="/Cargos" component={cargos} />
                        </BrowserRouter>
                </div>
        )
}
export default Routes;