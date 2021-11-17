import { Link } from "react-router-dom";
export function Navbar() {
  return(
    <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/destino">Destinos</Link></li>
    <li><Link to="/gasolina">Gasolina</Link></li>
    </ul>  
    </nav>
  );
}