import { Link } from "react-router-dom"

export default () => {
    return <aside className="sidebar">
        <Link to="/">Home</Link>
        <Link to="/Calculo">Cálculo</Link>
        <Link to="/Senador">Senador</Link>
        <Link to="/Cargos">Cargos</Link>
    </aside>
}