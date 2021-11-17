
import balneario1 from '../assets/balneario1.jpg';
import balneario2 from '../assets/balneario2.jpg';
import betoCarrero1 from '../assets/betoCarrero1.jpg';
import betoCarrero2 from '../assets/betoCarrero2.jpg';
import floripa1 from '../assets/floripa1.jpg';
import floripa2 from '../assets/floripa2.jpg';

export default function Destinos() {
  return (
    <div className="containerDesintos" > 
      <div>
        <h1>Florianópolis</h1>
        <div>
          <img src={floripa1} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
          <img src={floripa2} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
        </div>
        <span>Florianópolis, a capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.  <br/>É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha. A sua Lagoa da Conceição, uma lagoa de água salgada,  <br/>é popular para a prática de windsurf e para excursões de barco. A Ponte Pedro Ivo Campos faz a ligação entre a ilha e a zona comercial continental.</span>
      </div>

      <div>
        <h1>Balneário Camboriú</h1>
        <div>
          <img src={balneario1} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
          <img src={balneario2} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
        </div>
        <span>Balneário Camboriú é uma cidade turística no estado de Santa Catarina, no sul do Brasil. É conhecida pelos grandes edifícios e por praias como a Praia Central. <br/>Bares, restaurantes e lojas preenchem a Avenida Atlântica, uma avenida movimentada junto à praia. O Parque Unipraias fica na foz do Rio Camboriú e oferece vistas a partir das tirolesas e dos teleféricos. O monumento Cristo Luz, uma enorme estátua de Cristo, contempla a cidade.</span>
      </div>

      <div>
       <h1>Beto Carrero World</h1>
       <div>
          <img src={betoCarrero1} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
          <img src={betoCarrero2} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
        </div>
       <span>Beto Carrero World é um parque temático localizado no litoral norte do estado de Santa Catarina, Brasil.<br/>   Inaugurado no dia 28 de dezembro de 1991, pelo seu idealizador João Batista Sérgio Murad, artisticamente conhecido como Beto Carrero, o parque foi desenvolvido em uma área de 14 quilômetros quadrados. </span>
      </div>
    </div>
  );
}

