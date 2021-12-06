import React from "react";

import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return(
      // Lita de links de acordo com o roteamento
      <nav className="menu navbar navbar-expand-sm bg-warning">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Calculo">Calculo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Senador">Senador</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cargos">Cargos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu