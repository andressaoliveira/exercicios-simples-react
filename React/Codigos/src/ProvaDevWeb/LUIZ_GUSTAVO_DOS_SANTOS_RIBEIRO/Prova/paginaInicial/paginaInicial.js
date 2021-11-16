import './paginaInicial.scss';

function PaginaInicial() {
  return (
    <div className='pagina-inicial'>
      <h1>Início</h1>
      <hr />
      <h3>Escolha seu destino</h3>
      <select className='select-lugares'>
        <option>Gramado - Rio Grande do Sul</option>
        <option>Fortaleza - Ceará</option>
        <option>Bonito - Mato Grosso do Sul</option>
      </select>
      <hr />
    </div>
  );
}

export default PaginaInicial;
