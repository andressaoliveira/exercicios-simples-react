//Importação das fotos que serão dispostas na página de destinos
import noronha1 from './Assets/noronha1.jpg';
import noronha2 from './Assets/noronha2.jpg';
import noronha3 from './Assets/noronha3.jpg';

import whitehaven1 from './Assets/whitehaven1.jpg';
import whitehaven2 from './Assets/whitehaven2.jpg';
import whitehaven3 from './Assets/whitehaven3.jpg';

import sanadres1 from './Assets/sanadres1.jpg';
import sanadres2 from './Assets/sanadres2.jpg';
import sanadres3 from './Assets/sanadres3.jpg';

//Criação da função que criará os elemetentos HTML da página de destinos
export default function Destinos(){
    return (
      <div className="containerDestinos"> 
        <div>
          <h2>Fernando de Noronha, Brasil</h2>
          <div>
            <img src={noronha1} style={{width: "300px", height: "300px", margin: "5px"}} alt=""/>
            <img src={noronha2} style={{width: "300px", height: "300px", margin: "5px"}} alt=""/>
            <img src={noronha3} style={{width: "300px", height: "300px", margin: "5px"}} alt=""/>
          </div>
          <div>
            <p>Conhecido por ter uma das praias mais bonitas do mundo, Fernando de Noronha se torna um ótimo destino para quem deseja passar suas férias em um lugar paradisíaco.</p>
            <p>Lá você poderá ver golfinhos de perto, fazer trilhas, mergulhos, aproveitar o pôr do sol no mirante, dentre diversas outras atividades.</p>
            <p>O melhor de tudo? É que é uma preciosidade brasileira. Fernando de Noronha fica em Pernambuco, na região nordeste do Brasil.</p>
          </div>
        </div>
        <div>
          <h2>Whitehaven, Austrália</h2>
          <div>
            <img src={whitehaven1} style={{width: "300px", height: "300px", margin: "5px"}} alt=""/>
            <img src={whitehaven2} style={{width: "300px", height: "300px", margin: "5px"}} alt=""/>
            <img src={whitehaven3} style={{width: "300px", height: "300px", margin: "5px"}} alt=""/>
          </div>
          <div>
            <p>Considerada a melhor praia do mundo, a Whitehaven fica na Austrália e pode ser uma ótima escolha para você passar as suas férias.</p>
            <p>A praia é parte do famoso arquipélago das Whitsundays, composto por 74 ilhas que flutuam entre a costa nordeste de Queensland e a Grande Barreira de Corais.</p>
          </div>
        </div>
        <div>
          <h2>San Andres, Colômbia</h2>
          <div>
            <img src={sanadres1} style={{width: "300px", height: "300px", margin: "5px"}} alt=""/>
            <img src={sanadres2} style={{width: "300px", height: "300px", margin: "5px"}} alt=""/>
            <img src={sanadres3} style={{width: "300px", height: "300px", margin: "5px"}} alt=""/>
          </div>
          <div>
            <p>San Andrés é um dos destinos preferidos dos brasileiros. A ilha faz parte de um arquipélago que abrange também as ilhas de Providencia e Santa Catalina.</p> 
            <p>Essa região do Caribe colombiano é conhecida como mar das sete cores, e essa fama é um tanto auto explicativa para os turistas que visitam este paraíso caribenho.</p>
          </div>
        </div>
      </div>
    );
}