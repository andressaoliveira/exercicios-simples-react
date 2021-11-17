import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Combustivel from "./Combustivel/Combustivel";
import Destinos from "./Destinos/Destinos";
import Inicio from "./Inicio/Inicio";
import Menu from "./Menu/Menu";

function Prova() {
    return (
        <>
            <Menu />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/destinos/:id" element={<Destinos />} />
                    <Route path="/combustivel" element={<Combustivel />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Prova;
