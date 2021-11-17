import Navbar from './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';

export default function NavBar() {
    return (
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
    );
  }
  
  