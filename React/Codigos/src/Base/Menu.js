import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                Menu:
                <Link to="/">Página inicial</Link>
                <Link to="/Lista01">Lista01</Link>
                <Link to="/Lista02">Lista02</Link>
                <Link to="/ProvaViagem">ProvaViagem</Link>
                <Link to="/ProvaHarryPotter">ProvaHarryPotter</Link>
                <Link to="/ProvaFinal">ProvaFinal</Link>
            </div>
        );
    }
}