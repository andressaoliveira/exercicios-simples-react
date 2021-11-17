import {Nav} from '../components/Nav.js'
import saothome1 from '../images/saotome1.jpg'
import saothome2 from '../images/saotome2.jpg'
import saothome3 from '../images/saotome3.jpg'
import capitolio1 from '../images/capitolio1.jpg'
import capitolio2 from '../images/capitolio2.jpg'
import capitolio3 from '../images/capitolio3.jpg'
import cabofrio1 from '../images/cabofrio1.jpg'
import cabofrio2 from '../images/cabofrio2.jpg'
import '../styles/destinos.css';
import cabofrio3 from '../images/cabofrio3.jpg'
export function Destinos(){
  return (
    <div id="iinicial">
     <Nav/>
      <div className="content">
        <div className="city">
        <h1>São Thome</h1>
        <div className="card-imgs">
 <img src={saothome1} />
 <img src={saothome2} />
 <img src={saothome3} />
        </div>
        <p>
          São Tomé das Letras é um município do estado de Minas Gerais, no Brasil.
          Localiza-se a 346 km da capital do estado. Sua população em 2010,
          segundo o censo realizado pelo Instituto Brasileiro de Geografia e Estatística,
          era de 6 655 habitantes.
        </p>
        </div>
        <div className="city">
        <h1>Capitólio</h1>
        <div className="card-imgs">
 <img src={capitolio1} />
 <img src={capitolio2} />
 <img src={capitolio3} />
        </div>
        <p>
        Capitólio é um município brasileiro do estado de Minas Gerais.
        De acordo com o Instituto Brasileiro de Geografia e Estatística,
        sua população era estimada em 8 663 habitantes em 2020.
        </p>
        </div>
        <div className="city">
        <h1>Cabo Frio</h1>
        <div className="card-imgs">
 <img src={cabofrio1} />
 <img src={cabofrio2} />
 <img src={cabofrio3} />
        </div>
        <p>
        Cabo Frio é um município do estado brasileiro do Rio de Janeiro.
        As suas praias incluem a Praia das Dunas, ao centro, e a Praia do Forte,
        ambas conhecidas pela forte rebentação de ondas. A Praia das Conchas tem águas mais calmas.
        Passagem, a área mais antiga da cidade, possui edifícios da época colonial e a Capela de São Benedito,
        uma igreja construída em 1701.
        </p>
        </div>
      </div>
    </div>

  ) ;
}