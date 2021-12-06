import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './styles.css'
import Senador from "./Senador"
import Cargo from "./Cargo"
import Calculo from "./Calculo"

export default () => {
    return <BrowserRouter>
                <aside>
                    <Link to="/">Página inicial</Link>
                    <Link to="/senador">Senador</Link>
                    <Link to="/cargos">Cargos</Link>
                </aside>
                <Routes className="routes">
                    <Route path="/" element={<Calculo />}/>
                    <Route path="/senador" element={<Senador />}/>
                    <Route path="/cargos" element={<Cargo />}/>
                </Routes>
            </BrowserRouter>
    
}