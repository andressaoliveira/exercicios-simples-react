import React from "react";

import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return(
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/senador">Senador</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Menu