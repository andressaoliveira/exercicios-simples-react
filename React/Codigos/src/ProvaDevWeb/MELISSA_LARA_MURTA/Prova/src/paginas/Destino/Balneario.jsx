import balneario1 from '../../assets/balneario1.jpg';
import balneario2 from '../../assets/balneario2.jpg';

export default function Balneario() {
    return (
      <div>
        <h1>Balneário Camboriú</h1>
        <div>
          <img src={balneario1} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
          <img src={balneario2} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
        </div>
        <span>Balneário Camboriú é uma cidade turística no estado de Santa Catarina, no sul do Brasil. É conhecida pelos grandes edifícios e por praias como a Praia Central. <br/>Bares, restaurantes e lojas preenchem a Avenida Atlântica, uma avenida movimentada junto à praia. O Parque Unipraias fica na foz do Rio Camboriú e oferece vistas a partir das tirolesas e dos teleféricos. O monumento Cristo Luz, uma enorme estátua de Cristo, contempla a cidade.</span>
      </div>
    );
  }
  
  