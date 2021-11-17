import { useState } from "react";
import "./Gas.css";

const Gas = () => {
  const [travelTime, setTravelTime] = useState("");
  const [averageSpeed, setAverageSpeed] = useState("");
  const [averageUse, setAverageUse] = useState("");
  const [gasPrice, setGasPrice] = useState("");

  return (
    <main>
      <h1>Combustível</h1>
      <p>Calcule aqui seu combustivel</p>

      <div>
        <p>Tempo de viagem (em horas)</p>
        <input
          placeholder="Tempo de viagem"
          value={travelTime}
          onChange={(e) => setTravelTime(e.target.value)}
        />
      </div>

      <div>
        <p>Velocidade média (em km/h)</p>
        <input
          placeholder="Velocidade média"
          value={averageSpeed}
          onChange={(e) => setAverageSpeed(e.target.value)}
        />
      </div>
      <div>
        <p>Rendimento médio (em km/litros)</p>
        <input
          placeholder="Rendimento médio"
          value={averageUse}
          onChange={(e) => setAverageUse(e.target.value)}
        />
      </div>

      <div>
        <p>Preço de gasolina (em reais R$)</p>
        <input
          placeholder="Preço de gasolina"
          value={gasPrice}
          onChange={(e) => setGasPrice(e.target.value)}
        />
      </div>

      <div>
        <h1>Resultado</h1>
        <p>Velocidade média: {averageSpeed} km/h</p>
        <p>Rendimento: {averageUse} km/litros</p>
        <p>Distancia: {averageSpeed * travelTime} km</p>
        <p>Combustível: {(averageSpeed * travelTime) / averageUse} litros</p>

        <h3>
          Preço total: {((averageSpeed * travelTime) / averageUse) * gasPrice}
        </h3>
      </div>
    </main>
  );
};

export { Gas };
