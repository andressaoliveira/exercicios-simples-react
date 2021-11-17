import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const navClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-btn">
              <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={navClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-btn">
              <NavLink exact to="/destino" activeClassName="active" className="nav-links" onClick={navClick}>
                Destino
              </NavLink>
            </li>
            <li className="nav-btn">
              <NavLink exact to="/combustivel" activeClassName="active" className="nav-links" onClick={navClick}>
                Combustivel
              </NavLink>
            </li>
           
          </ul>
      </nav>
    </>
  );
}

export default NavBar;