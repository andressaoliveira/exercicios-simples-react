import React from 'react';
import './Destiny.css';

import sp from '../../assets/sp.jfif'
import sp2 from '../../assets/sp2.jfif'
import sp3 from '../../assets/sp3.jfif'

import rj from '../../assets/rj.jfif'
import rj2 from '../../assets/rj2.jfif'
import rj3 from '../../assets/rj3.jfif'

import v from '../../assets/v.jfif'
import v2 from '../../assets/v2.jfif'
import v3 from '../../assets/v3.jfif'

const Destiny = () => {
  return (
    <div className="destiny">
      <div className="city">
        <h2>São Paulo</h2>
        <span>
          <img src={sp} alt="SP"/>
          <img src={sp2} alt="SP"/>
          <img src={sp3} alt="SP"/>
        </span>
        <h4>
          A cidade de São Paulo abriga a sede do governo do estado, localizado na região Sudeste. São Paulo possui atualmente área de 1.521,110 km², sendo a 9ª em extensão do estado
        </h4>
      </div>

      <div className="city">
        <h2>Rio de Janeiro</h2>
        <span>
          <img src={rj} alt="RJ"/>
          <img src={rj2} alt="RJ"/>
          <img src={rj3} alt="RJ"/>
        </span>
        <h4>
          É considerada uma cidade global. ... Conta com 6.747.815 habitantes, sendo a segunda cidade mais populosa do Brasil. Com PIB de R$ 364 bilhões, consiste na segunda maior economia municipal do país. O setor terciário é o principal segmento, com destaque para o turismo.
        </h4>
      </div>

      <div className="city">
        <h2>Vitória</h2>
        <span>
          <img src={v} alt="Vitoria"/>
          <img src={v2} alt="Vitoria"/>
          <img src={v3} alt="Vitoria"/>
        </span>
        <h4>
          O município de Vitória, capital do Espírito Santo, está situado na Região Sudeste do Brasil. É banhado pelo Oceano Atlântico, possui clima tropical e tipos vegetais variados, com formações de floresta tropical, mangues, restingas e vegetação litorânea.
        </h4>
      </div>
    </div>
  );
}

export default Destiny;