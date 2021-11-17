import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
            <h2>Inicio</h2>
            <p>Escolha seu destino:</p>
            <select className="select">
                <option value="valor1" selected>Belo Horizonte</option>
                <option value="valor2">Juis De Fora</option>
                <option value="valor3">Barbacena</option>
            </select>
    </div>
  );
}
