import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Cálculo</Link>
        </li>
        <li>
          <Link to="/Senador">Senador</Link>
        </li>
        <li>
          <Link to="/Cargos">Cargos</Link>
        </li>
      </ul>
    </nav>
  );
}
