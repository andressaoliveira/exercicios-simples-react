import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/">Inicio</Link>
      <Link to="/destiny">Destino</Link>
      <Link to="/fuel">Combustível</Link>
    </aside>
  );
}

export default Sidebar;