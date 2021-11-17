import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  //conbtroe a nav bar, olhando para os caminhos "paths" que apontam para os respectivos
  //components. Isso ocorre no arquivo prova.js
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/destino"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Destino
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/combustivel"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Combustivel
              </NavLink>
            </li>
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
