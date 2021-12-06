import { useState } from "react";
import "./Calculo.scss";

export const Calcular = {
  validar(n1, n2) {
    if (n1 === 0) return 0;
    else if (n2 === 0) return -1;
    else return n1 % n2 === 0;
  },
};

export default function Calculo() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [calcular, setCalcular] = useState(false);

  function result(n1, n2) {
    const result = Calcular.validar(parseInt(n1), parseInt(n2));

    switch (result) {
      case true:
        return `${num1} É divisível por ${num2}!`;
        break;
      case false:
        return `${num1} NÃO É divisível por ${num2}!`;
        break;
      case 0:
        return `0 dividido por qualquer número é igual a 0!`;
        break;
      default:
        return `Não é possível dividir por 0!`;
        break;
    }
  }

  return (
    <div className="calculadora">
      Número 1: <input onChange={(e) => setNum1(e.target.value)} />
      Número 2: <input onChange={(e) => setNum2(e.target.value)} />
      <div>
        <button onClick={() => setCalcular(result(num1, num2))}>
          Calcular
        </button>

        <h3 id="result">{calcular}</h3>
      </div>
    </div>
  );
}
