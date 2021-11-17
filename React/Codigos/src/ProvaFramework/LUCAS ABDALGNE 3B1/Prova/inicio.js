import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Nav from "./prova";

function Inicio(){
    return (
    <div className="">
        
        <div className=" corpo">
            <center>
                <h1>Início</h1>
                <p>Escolha seu destino</p>
                <select>
                    <option>Toronto</option>
                    <option>Texas</option>
                    <option>Nova Iorque</option>
                </select>
            </center>
        </div>

    </div>
    )
}

export default Inicio;