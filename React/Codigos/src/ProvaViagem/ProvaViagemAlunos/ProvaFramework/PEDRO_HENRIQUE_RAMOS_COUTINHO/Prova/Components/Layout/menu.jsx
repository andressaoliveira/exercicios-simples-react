import "./menu.css";
import React from "react";

import { Link } from "react-router-dom";

// Rotas responsivas utilizando o link, e não o a.


const menu = (props) => (
  <aside className="menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/destino">Destinos</Link>
        </li>
        <li>
          <Link to="/fuel">Combustível</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default menu;
