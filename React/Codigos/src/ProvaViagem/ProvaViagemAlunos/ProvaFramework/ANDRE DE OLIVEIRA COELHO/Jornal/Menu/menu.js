import React from 'react';
import { Link } from "react-router-dom";
import jornal from "../Assets/images.png";
import "./menu.scss";

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <img alt="naruto" src={jornal} />
                <h1>JORNAL DE FRAMEWORK</h1>
                Menu:
                <br/>
                <Link to="/Pagina1">Pagina1</Link>
                <br/>
                <Link to="/Pagina2">Pagina2</Link>
                <br/>
                <Link to="/Pagina3">Pagina3</Link>
                <br/>
            </div>
        );
    }
}