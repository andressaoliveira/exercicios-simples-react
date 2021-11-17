import React from "react";
import { Link } from "react-router-dom";

export default class Sobre extends React.Component{
    render(){
        return(
            <div>
                <h3>Home</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/destino">Destino</Link></li>
                    <li><Link to="/combustivel">Combustivel</Link></li>
                </ul>
            </div>
        );
    }
}