import {Nav} from '../components/Nav.js'
import '../styles/telainicial.css';
export function TelaInicial(){
 
  return(
    <div id="inicial">
     <Nav/>
      <div className="content">
        <h1>Início</h1>
        <h2>Escolha seu destino:</h2>
        <select>
          <option value="saothome"> São Thomé das Letras</option>
          <option value="capitolio"> Capitólio</option>
          <option value="cabofrio"> Cabo Frio</option>
        </select>
      </div>
    </div>
   );
}