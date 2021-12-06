import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Calculo from "./Calculo";
import Filiacoes from "./Filiacoes";
import Menu from "./Menu/Menu";
import Senador from "./Senador";

const PrincipalEstilo = {
    marginLeft: '190px',
    paddingTop: '20px'
}

function Principal() {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <main style={PrincipalEstilo} className="principal">
                    <Routes>
                        <Route path="/" element={<Calculo />} />
                        <Route path="/senadores" element={<Senador />} />
                        <Route path="/filiacoes" element={<Filiacoes />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    )
}

export default Principal;
