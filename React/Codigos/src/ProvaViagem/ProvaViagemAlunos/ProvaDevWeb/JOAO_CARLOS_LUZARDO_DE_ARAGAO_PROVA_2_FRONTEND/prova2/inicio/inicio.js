import './inicio.css';

function Inicio() {
  return (
    <div className='inicio'>
      <h1>Início</h1>
      <h2>Escolha seu destino</h2>
      <select className='cidades'>
        <option>Brasília (DF)</option>
        <option>Ouro Preto (MG)</option>
        <option>Caldas Novas (GO)</option>
      </select>
    </div>
  );
}

export default Inicio;
