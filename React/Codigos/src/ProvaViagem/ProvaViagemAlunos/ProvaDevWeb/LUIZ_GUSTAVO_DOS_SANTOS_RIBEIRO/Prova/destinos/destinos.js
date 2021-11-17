import './destinos.scss';
import Gramado1 from '../imagens/gramado-1.jpg';
import Gramado2 from '../imagens/gramado-2.jpg';
import Gramado3 from '../imagens/gramado-3.jpg';

import Fortaleza1 from '../imagens/fortaleza-1.jpg';
import Fortaleza2 from '../imagens/fortaleza-2.jpg';
import Fortaleza3 from '../imagens/fortaleza-3.jpg';

import Bonito1 from '../imagens/bonito-1.jpg';
import Bonito2 from '../imagens/bonito-2.jpg';
import Bonito3 from '../imagens/bonito-3.jpg';

function Destinos() {
  return (
    <div className='destinos'>
      <div className='destino-item'>
        <h1>Gramado</h1>
        <hr />
        <div className='imagens-destino'>
          <img src={Gramado1} />
          <img src={Gramado2} />
          <img src={Gramado3} />
        </div>
        <hr />
        <p>
          Gramado é uma cidade com uma estância de montanha situada no estado
          mais a sul do Brasil, Rio Grande do Sul. Influenciada pelos colonos
          alemães do século XIX, a cidade possui um toque bávaro com chalés
          alpinos, chocolateiros e lojas de artesanato.
        </p>
      </div>
      <hr />
      <div className='destino-item'>
        <h1>Fortaleza</h1>
        <hr />
        <div className='imagens-destino'>
          <img src={Fortaleza1} />
          <img src={Fortaleza2} />
          <img src={Fortaleza3} />
        </div>
        <hr />
        <p>
          Fortaleza é a capital do estado do Ceará, no Nordeste brasileiro. A
          cidade é conhecida por suas praias, com falésias vermelhas, palmeiras,
          dunas e lagoas. As tradições folclóricas da cidade podem ser vistas em
          apresentações de dança no Theatro José de Alencar, construção em
          estilo art nouveau inaugurada em 1910. Outro destaque arquitetônico é
          a Catedral Metropolitana, em estilo neogótico.
        </p>
      </div>
      <hr />
      <div className='destino-item'>
        <h1>Bonito</h1>
        <hr />
        <div className='imagens-destino'>
          <img src={Bonito1} />
          <img src={Bonito2} />
          <img src={Bonito3} />
        </div>
        <hr />
        <p>
          Bonito é uma cidade e centro de ecoturismo no estado brasileiro de
          Mato Grosso do Sul. A área circundante é conhecida pelos rios de água
          translúcida, como o Rio da Prata, um destino de snorkeling repleto de
          peixes. O Abismo Anhumas é uma enorme caverna coberta de estalactites
          que permite a prática de rapel e de mergulho num lago subterrâneo.
          Bandos de araras criam ninhos no profundo Buraco das Araras, de cor
          ocre.
        </p>
      </div>
    </div>
  );
}

export default Destinos;
