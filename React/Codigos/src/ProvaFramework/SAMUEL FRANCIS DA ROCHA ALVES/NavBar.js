import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        <h3>Samuel Francis</h3>
        <ul class="nav-list">
            <Link to="/inicio">
                <li>Inicio</li>
            </Link>
            <Link to="/destino">
                <li>Destino</li>
            </Link>
            <Link to="/combustivel">
                <li>Combustivel</li>
            </Link>
        </ul>
    </nav>
  );
}

export default NavBar;