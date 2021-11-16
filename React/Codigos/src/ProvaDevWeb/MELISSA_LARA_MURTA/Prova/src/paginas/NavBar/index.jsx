import './Navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="containerNavBar">
        <div className="link">
          <Link to="/PaginaInicial">Página Inicial</Link>
        </div>
        <div className="link">
          <Link to="/Destinos">Destinos</Link>
        </div>
        <div className="link">
          <Link to="/Combustivel">Combustível</Link>
        </div>
      </div>
    </div>
  );
}

