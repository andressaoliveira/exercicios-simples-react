import floripa1 from '../assets/floripa1.jpg';
import floripa2 from '../assets/floripa2.jpg';

export default function Florianopolis() {
    return (
      <div>
        <h1>Florianópolis</h1>
        <div>
          <img src={floripa1} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
          <img src={floripa2} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
        </div>
        <span>Florianópolis, a capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.  <br/>É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha. A sua Lagoa da Conceição, uma lagoa de água salgada,  <br/>é popular para a prática de windsurf e para excursões de barco. A Ponte Pedro Ivo Campos faz a ligação entre a ilha e a zona comercial continental.</span>
      </div>
    );
  }
  
    