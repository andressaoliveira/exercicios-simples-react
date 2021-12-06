import { useState } from 'react';

export const Calcular = {
  calcularDivisivel(valor1, valor2) {
    return valor1 % valor2;
  },
  
  isDivisivel(resultado) {
    if (resultado === 0) {
      return true;
    } else {
      return false;      
    }
  },
}

const Calculo = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');

  // para exibir os números na tela, evitando que atualize os valores exibidos com a alteração dos campos, antes que o botão seja acionado
  const [valores, setValores] = useState([]);

  const [divisivel, setDivisivel] = useState(false);
  const [showResultado, setShowResultado] = useState(false);
  
  function verificarDivisivel() {
    setValores([valor1, valor2]);
    let expressao = Calcular.calcularDivisivel(valor1, valor2);

    setDivisivel(Calcular.isDivisivel(expressao));
    setShowResultado(true);
  }

  function validateForm() {
    if ( ((valor1 !== '' && parseInt(valor1) >= 0) && (valor2 !== '' && parseInt(valor2) >= 0)) || valores.length ) {
      return true;
    } else {
      return false;
    }
  }

  function renderResultado() {
    if(showResultado) {
      if (validateForm()) {
        if (divisivel) {
          return (
            <div className="resultado">
              <span>O número { valores[0] } é divisível por { valores[1] }</span>
            </div>
          );
        } else {
          return (
            <div className="resultado">
              <span>O número {valores[0]} não é divisível por {valores[1]}</span>
            </div>
          );
        }
      } else {
        setShowResultado(false);
        alert('Preencha todos os campos com valores validos');
      }
    }
  }

  return (
    <section className="content">
      <h1>Divisível</h1>

      <div className="data">
        <label htmlFor="valor1">Primeiro Valor:</label>

        <input
          name="valor1"
          type="text"
          value={valor1}
          onInput={(e) => setValor1(e.target.value)}
        />
      </div>

      <div className="data">
        <label htmlFor="valor2">Segundo Valor:</label>

        <input
          name="valor2"
          type="text"
          value={valor2}
          onInput={(e) => setValor2(e.target.value)}
        />
      </div>

      <button
        className="verificar"
        onClick={() => verificarDivisivel()}
      >
        Verificar
      </button>

      { renderResultado() }
    </section>
  );
}

export default Calculo;