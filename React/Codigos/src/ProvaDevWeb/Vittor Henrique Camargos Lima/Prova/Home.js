import './App.css';
function Home() {
    return (
      <div className="Inicio">
          <h4><strong>Início</strong></h4>
            Escolha seu destino:    
        <select className="select">
            <option value="STL" selected>São Thomé das Letras</option>
            <option value="CPO" >Capitólio</option>
            <option value="SDC">Serra do Cipó</option>
        </select>        
        
      </div>
    );
  }


  export default Home;