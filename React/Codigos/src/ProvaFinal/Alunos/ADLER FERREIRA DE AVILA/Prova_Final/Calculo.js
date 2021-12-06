import React, { useState } from "react";

export const Checar = {
  dividir(n1, n2) {
    if (n1 % n2 == 0){
        return 0
    } else if (n1 % n2 !== 0) {
        return 1
    } else if (n1 == 0 || n2 == 0){
        return 2
    }
  }
}

export default function Calculo() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);

  return (
    <div className="calculadora">
      <input onChange={(e) => setNumA(e.target.value)} />
      <input onChange={(e) => setNumB(e.target.value)} />
      <div>
        <button onClick={() => Checar.dividir(numA, numB)}>
          Checar divisibilidade
        </button>
      </div>
    </div >
  );
}