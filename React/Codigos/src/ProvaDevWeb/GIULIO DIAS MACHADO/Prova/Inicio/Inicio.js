import React from "react";
import "./Inicio.scss";

export default class Inicio extends React.Component {
  render() {
    return (
      <div className="inicio">
        <h1>Início</h1>
        <label>Escolha seu destino:</label>
        <select id="destino">
          <option value="1">Serra Gaúcha</option>
          <option value="2">Bonito</option>
          <option value="3">Fernando de Noronha</option>
        </select>
      </div>
    );
  }
}
