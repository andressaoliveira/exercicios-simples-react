import React from "react";

import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return(
      // Lita de links de acordo com o roteamento
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/destinos">Destinos</Link></li>
          <li><Link to="/combustivel">Calcular Combustível</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu