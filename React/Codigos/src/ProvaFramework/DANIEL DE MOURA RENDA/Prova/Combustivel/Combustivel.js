const click = (nome, descricao) => {
    return alert(`${nome} é ${descricao}`)
  }
  
  const lista = [
    { nome: "Arroz", descricao: "branco" },
    
  ];
  
  
  function Combustivel() {
    return (
      <div className="Aula02">
       
       <form>
         <input name="nome" placeholder="Digite seu nome"></input>
        <input name="conteudo" placeholder="Digite o conteudo"></input>
        <input type="date" name="date" id="date"></input>
        <button type="submit">Calcular </button>
        
    </form>
         <ul>
          {
            lista.map((item, index) =>
              <li key={index} onClick={() => click( item.descricao)}><button>{item.nome}</button></li>)
          }
        </ul>
        
      </div>
    );
  }

  export default Combustivel;
