import React, { useState } from "react";
const Page3 = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "#6A6A6A",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <div className="geral">
        <h1>Combustivel</h1>
        <label>Tempo:</label>
        <input></input>
        <label>(Em horas)</label>
        <br />
        <label>Velocidade media:</label>
        <input></input>
        <label>(Em Km/h)</label>
        <br />
        <label>Rendimento medio:</label>
        <input></input>
        <label>(Em Km/litros)</label>
        <br />
        <label>Preço Gasolina:</label>
        <input></input>
        <label>(Em Reais R$)</label>
        <br />
        <div>
          <input
            type="button"
            id="Calcular"
            value="Calcular"
            onclick="Botao_Exibir_lista()"
          />
        </div>
      </div>
    </div>
  );
};

export default Page3;
