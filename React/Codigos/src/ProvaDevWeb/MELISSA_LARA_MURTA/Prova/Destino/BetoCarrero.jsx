import betoCarrero1 from '../../assets/betoCarrero1.jpg';
import betoCarrero2 from '../../assets/betoCarrero2.jpg';

export default function BetoCarreroWorld() {
    return (
      <div>
       <h1>Beto Carrero World</h1>
       <div>
          <img src={betoCarrero1} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
          <img src={betoCarrero2} alt="balneario" style={{width: "200px", height: "200px", margin: "5px"}}/>
        </div>
       <span>Beto Carrero World é um parque temático localizado no litoral norte do estado de Santa Catarina, Brasil.<br/>   Inaugurado no dia 28 de dezembro de 1991, pelo seu idealizador João Batista Sérgio Murad, artisticamente conhecido como Beto Carrero, o parque foi desenvolvido em uma área de 14 quilômetros quadrados. </span>
      </div>
    );
  }
  
  