import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/neyssi.jpg";
export default Neymar;

function Neymar() {
    return (
        <div className="Neymar">
            <br />
                AJUDE O NEYMAR E O MESSI A VIAJAREM PELO MUNDO<br   />
                <img width="400px" height="400px"src={img}/>
            <br />
            <Link to="/">Menu</Link><br />
            <Link to="/Contadores">Combustível</Link><br />
            <Link to="/Rotas">Página inicial</Link><br />
            <Link to="/Viagem">Destinos</Link><br />

        </div>
    )
}