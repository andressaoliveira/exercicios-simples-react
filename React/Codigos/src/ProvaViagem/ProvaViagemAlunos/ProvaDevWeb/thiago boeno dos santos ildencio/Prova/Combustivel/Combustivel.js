import { useState } from 'react';

const Combustivel = () => {
  const [tempo, setTempo] = useState('');
  const [velocidade, setVelocidade] = useState('');
  const [rendimento, setRendimento] = useState('');
  const [preco, setPreco] = useState('');
  const [distancia, setDistancia] = useState(0);
  const [combustivel, setCombustivel] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  const [showResultado, setShowResultado] = useState(false);

  function calcularCombustivel() {
    let calculoDistancia = parseInt(velocidade) * parseInt(tempo);
    setDistancia(calculoDistancia);

    let calculoCombustivel = calculoDistancia / parseFloat(rendimento);
    setCombustivel(parseFloat(calculoCombustivel).toFixed(2));
    
    let calculoValorTotal = calculoCombustivel * parseFloat(preco);
    setValorTotal(parseFloat(calculoValorTotal).toFixed(2));

    setShowResultado(true);
  }

  function validateForm() {
    if ((tempo !== '' && parseInt(tempo) !== 0 ) && (velocidade !== '' && parseInt(velocidade) !== 0 ) && (rendimento !== '' && parseFloat(rendimento) !== 0 ) && (preco !== '' && parseFloat(preco) !== 0 )) {
      return true;
    } else {
      return false;
    }
  }

  function renderResultado() {
    if(showResultado) {
      if (validateForm()) {
        return (
          <div className="resultado">
            <span>Velocidade média: {velocidade} km/h</span>
    
            <span>Tempo gasto: {tempo} horas</span>
    
            <span>Rendimento: {rendimento} km/litros</span>
    
            <span>Distancia: {distancia} km</span>
    
            <span>Combustível: {combustivel} litros</span>
    
            <span>Valor Total: R${valorTotal}</span>
          </div>
        );
      } else {
        setShowResultado(false);
        alert('Preencha todos os campos com valores validos');
      }
    }
  }

  return (
    <section className="combustivel">
      <h1>Combustível</h1>

      <div className="data">
        <label htmlFor="tempo">Tempo (em horas):</label>
        <input name="tempo" type="text" value={tempo} onInput={e => setTempo(e.target.value)} />
      </div>

      <div className="data">
        <label htmlFor="velocidade">Velocidade média (em km/h):</label>
        <input name="velocidade" type="text" value={velocidade} onInput={e => setVelocidade(e.target.value)} />
      </div>

      <div className="data">
        <label htmlFor="rendimento">Rendimento médio (em km/litros):</label>
        <input name="rendimento" type="text" value={rendimento} onInput={e => setRendimento(e.target.value)} />
      </div>

      <div className="data">
        <label htmlFor="preco">Preço gasolina (em reais R$):</label>
        <input name="preco" type="text" value={preco} onInput={e => setPreco(e.target.value)} />
      </div>

      <button className="calcular" onClick={() => calcularCombustivel()}>
        Calcular
      </button>

      { renderResultado() }
    </section>
  );
}

export default Combustivel;