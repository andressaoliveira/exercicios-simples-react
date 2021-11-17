const titulo2 = "Início";


function PaginaInicial() {
  return (
    <div className="PaginaInicial">
        <h1>{titulo2}</h1>
        <p>Escolha seu destino: </p>
        <select name="cars" id="cars">
            <option value="caoThomedasLetras">São Thomé das Letras</option>
            <option value="carrancas">Carrancas</option>
            <option value="trindade">Trindade</option>
        </select>
    </div>
  );
}

export default PaginaInicial;
