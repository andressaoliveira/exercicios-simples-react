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
            <Link to="/destinos">Destinos</Link>
          </li>

          <li>
            <Link to="/combustivel">Combustível</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}