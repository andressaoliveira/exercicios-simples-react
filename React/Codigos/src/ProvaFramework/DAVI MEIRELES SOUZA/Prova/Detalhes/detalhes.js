import React from 'react';
import Beco_T from '../img/beco_T.jpg';
import Beco_V from '../img/beco_V.jpg';
import Bike from '../img/bike.jpg';
import Moinho_T from '../img/moinho_H.jpg';
import Noite_V from '../img/noite_V.jpg';
import Red_H from '../img/red_H.jpg';
import Rio_V from '../img/rio_V.jpg';
import Roca_T from '../img/roca_T.jpg';
import Torre_T from '../img/torre_T.jpg';

export default class Detalhes extends React.Component{

    render(){
  
  
      return (
  
        <div>

            <h1>Detalhes</h1> <br/>

            <h2>Tokyo</h2> <br/>
            <table>

                <tr>

                    <th> <img src={Beco_T} alt="#" width="270px"/> </th>
                    <th> <img src={Roca_T} alt="#" width="270px"/> </th>
                    <th> <img src={Torre_T} alt="#" width="270px"/> </th>

                </tr>

            </table> <br/>

            <p>Tóquio (em japonês: 東京; romaniz.: Tōkyō, pronunciado: [to̞ːkʲo̞ː] (Sobre este somescutar (ajuda·info)), literalmente "capital
                 do Leste"), oficialmente Metrópole de Tóquio (東京都 Tōkyō-to?), é a capital do Japão e uma das 47 prefeituras do país.
                  Situa-se em Honshu, a maior ilha do arquipélago. Em 2015, Tóquio possuía mais de 13,4 milhões de habitantes, cerca de 11%
                   da população do país, e a Região Metropolitana de Tóquio possui mais de 37 milhões de habitantes, o que torna a
                    aglomeração de Tóquio, independentemente de como se define, como a área urbana mais populosa do mundo. Um de seus
                     monumentos mais famosos é a Torre de Tóquio. Foi fundada em 1457, com o nome de Edo ou Yedo. Tornou-se a capital
                      do Império em 1868 com a atual designação. Sofreu grande destruição duas vezes; uma em 1923, quando foi atingida
                       por um terremoto; e outra em 1944 e 1945, quando bombardeios americanos destruíram grande parte da cidade, sendo
                        que no total foi destruída 51% de sua área[2] e mortas mais de 80 mil pessoas.</p> <br/>

            <h2>Veneza</h2> <br/>
            <table>

                <tr>

                    <th> <img src={Beco_V} alt="#" width="270px"/> </th>
                    <th> <img src={Rio_V} alt="#" width="270px"/> </th>
                    <th> <img src={Noite_V} alt="#" width="270px"/> </th>

                </tr>

            </table> <br/>

            <p>Veneza (em italiano: Venezia, em vêneto: Venexia, AFI: [veˈnɛsja]) é uma cidade no nordeste da Itália situada sobre
                 um grupo de 117 pequenas ilhas separadas por canais e ligadas por pontes. Ela está localizada na pantanosa Lagoa de Veneza,
                  que se estende ao longo da costa entre as bocas dos rios Po e Piave. Veneza é famosa pela beleza de sua arquitetura e obras
                   de arte. Uma parte da cidade está listada como um Patrimônio Mundial, juntamente com a sua lagoa.</p> <br/>

            <h2>Holanda</h2> <br/>
            <table>

                <tr>

                    <th> <img src={Bike} alt="#" width="270px"/> </th>
                    <th> <img src={Red_H} alt="#" width="270px"/> </th>
                    <th> <img src={Moinho_T} alt="#" width="270px"/> </th>

                </tr>

            </table> <br/>

            <p>Os Países Baixos (em neerlandês: Nederland AFI: [ˈneːdərˌlɑnt] (Sobre este somescutar (ajuda·info)), literalmente "país baixo"),
                 conhecidos informalmente como Holanda,[8] são uma nação constituinte do Reino dos Países Baixos localizada na Europa
                  ocidental. O país é uma monarquia constitucional parlamentar democrática banhada pelo mar do Norte a norte e a oeste,
                   que faz fronteira com a Bélgica a sul e com a Alemanha a leste. A capital é Amesterdãopt ou Amsterdãbr e a sede do governo 
                   é na cidade de Haia.</p> <br/>


        </div>

      )
    }
  }
