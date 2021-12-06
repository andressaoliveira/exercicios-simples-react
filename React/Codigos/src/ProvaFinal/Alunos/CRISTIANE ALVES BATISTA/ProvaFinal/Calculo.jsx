import { useState } from "react";

export function Calculo() {
  const [result, setResult] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const n1 = parseInt(event.target.children.n1.value);
    const n2 = parseInt(event.target.children.n2.value);

    setResult(
      n2 !== 0
        ? n1 % n2 === 0
          ? "É divisível"
          : "Não é divisível"
        : "O divisor não pode ser 0"
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" id="n1" placeholder="Número 1" />
        <br />
        <input type="text" id="n2" placeholder="Número 2" />
        <br />
        <button type="submit">Calcular</button>
        <p>{result}</p>
      </form>
    </div>
  );
}
