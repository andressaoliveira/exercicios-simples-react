
import React, { useState } from "react";
import './CALCULO.scss'

export const Calcular = {
  
  dividir(n1, n2) {
    return n1 / n2
  },

  dividirSemResto(n1, n2) {
    return n1 % n2
  },
}

export default function Calculadora() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);

  return (
    <div className="calculadora">
      <input onChange={(e) => setNumA(e.target.value)} />
      <input onChange={(e) => setNumB(e.target.value)} />
      <div>
        <button onClick={() => Calcular.dividir(numA, numB)}>
          dividir
        </button>
      </div>
      
    </div >
  );
}