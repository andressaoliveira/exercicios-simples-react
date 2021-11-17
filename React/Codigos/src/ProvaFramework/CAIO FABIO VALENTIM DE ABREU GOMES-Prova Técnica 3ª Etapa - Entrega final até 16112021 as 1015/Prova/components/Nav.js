import '../styles/nav.css'
import {TelaInicial} from '../Home/TelaInicial.js';
import {Destinos} from '../Destinos/Destinos.js';
import { Link } from 'react-router-dom';
export function Nav(){
  return (
    <nav>
    <ul>
      <li> <Link to="/"> Página Inicial </Link> </li>
      <li> <Link to="/destinos"> Destinos </Link> </li>
      <li> <Link to="/combustivel"> Combustível </Link></li>
    </ul>
    </nav>
  );
}