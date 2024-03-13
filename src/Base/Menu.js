import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <br />
                Menu:
                <br /><br />
                <Link to="/Lista01">Lista 1</Link>
                <Link to="/Lista02">Lista2</Link>
            </div>
        );
    }
}