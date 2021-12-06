import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>

          <li>
            <Link to="/senador">Senador</Link>
          </li>

          <li>
            <Link to="/cargos">Cargos</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}